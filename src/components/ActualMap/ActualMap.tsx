import React, { useEffect, useRef } from 'react';
import styles from './ActualMap.module.css';

// 마커 데이터 타입 정의
interface MarkerData {
  id: string;
  name: string;
  category: 'zoo' | 'garden' | 'park' | 'facility';
  lat: number;
  lng: number;
  icon: string;
}

interface ActualMapProps {
  filters: {
    zoo: boolean;
    garden: boolean;
    park: boolean;
  };
}

// 서울어린이대공원 시설 좌표 데이터
const facilityData: MarkerData[] = [
  // 주요 시설
  { id: 'main-gate', name: '정문', category: 'facility', lat: 37.5481, lng: 127.0811, icon: '🚪' },
  { id: 'parking', name: '주차장', category: 'facility', lat: 37.5475, lng: 127.0805, icon: '🅿️' },
  { id: 'nursing-room', name: '수유실', category: 'facility', lat: 37.5485, lng: 127.0820, icon: '🍼' },

  // 동물원 구역
  { id: 'elephant', name: '코끼리 우리', category: 'zoo', lat: 37.5490, lng: 127.0825, icon: '🐘' },
  { id: 'lion', name: '사자 우리', category: 'zoo', lat: 37.5495, lng: 127.0830, icon: '🦁' },
  { id: 'monkey', name: '원숭이 우리', category: 'zoo', lat: 37.5485, lng: 127.0835, icon: '🐵' },
  { id: 'bird', name: '조류원', category: 'zoo', lat: 37.5500, lng: 127.0840, icon: '🦅' },

  // 식물원 구역
  { id: 'greenhouse', name: '온실', category: 'garden', lat: 37.5505, lng: 127.0815, icon: '🌿' },
  { id: 'rose-garden', name: '장미원', category: 'garden', lat: 37.5510, lng: 127.0820, icon: '🌹' },
  { id: 'pond', name: '연못', category: 'garden', lat: 37.5515, lng: 127.0825, icon: '🪷' },

  // 놀이공원 구역
  { id: 'roller-coaster', name: '롤러코스터', category: 'park', lat: 37.5475, lng: 127.0835, icon: '🎢' },
  { id: 'ferris-wheel', name: '대관람차', category: 'park', lat: 37.5470, lng: 127.0840, icon: '🎡' },
  { id: 'playground', name: '어린이 놀이터', category: 'park', lat: 37.5480, lng: 127.0845, icon: '🎠' },
];

// Google Maps API 타입 선언
declare global {
  interface Window {
    google: any;
    initMap?: () => void;
  }
}

const ActualMap: React.FC<ActualMapProps> = ({ filters }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const infoWindowRef = useRef<any>(null);

  // 구글 맵 초기화
  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current || !window.google) {
        console.error('Google Maps API not loaded');
        return;
      }

      // 서울어린이대공원 중심 좌표
      const center = { lat: 37.5490, lng: 127.0825 };

      // 지도 생성
      const map = new window.google.maps.Map(mapRef.current, {
        center: center,
        zoom: 16,
        mapTypeControl: true,
        streetViewControl: false,
        fullscreenControl: true,
      });

      mapInstanceRef.current = map;

      // InfoWindow 생성
      infoWindowRef.current = new window.google.maps.InfoWindow();

      // 마커 추가
      addMarkers(map);
    };

    // Google Maps API 로드 확인
    if (window.google && window.google.maps) {
      initMap();
    } else {
      // API 스크립트 로드
      const script = document.createElement('script');
      const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    }
  }, []);

  // 마커 추가 함수
  const addMarkers = (map: any) => {
    // 기존 마커 제거
    markersRef.current.forEach(({ marker }) => marker.setMap(null));
    markersRef.current = [];

    facilityData.forEach((facility) => {
      // 마커 생성
      const marker = new window.google.maps.Marker({
        position: { lat: facility.lat, lng: facility.lng },
        map: map,
        title: facility.name,
        animation: window.google.maps.Animation.DROP,
      });

      // 마커 클릭 이벤트
      marker.addListener('click', () => {
        const content = `
          <div style="padding: 12px; min-width: 180px;">
            <div style="font-size: 28px; text-align: center; margin-bottom: 8px;">
              ${facility.icon}
            </div>
            <div style="font-weight: bold; font-size: 18px; text-align: center; color: #3A45AD; margin-bottom: 4px;">
              ${facility.name}
            </div>
          </div>
        `;
        infoWindowRef.current.setContent(content);
        infoWindowRef.current.open(map, marker);
      });

      markersRef.current.push({
        marker,
        category: facility.category,
      });
    });

    // 초기 필터 적용
    updateMarkerVisibility();
  };

  // 필터에 따라 마커 표시/숨김
  const updateMarkerVisibility = () => {
    markersRef.current.forEach(({ marker, category }) => {
      const shouldShow =
        (category === 'zoo' && filters.zoo) ||
        (category === 'garden' && filters.garden) ||
        (category === 'park' && filters.park) ||
        category === 'facility'; // 시설은 항상 표시

      marker.setVisible(shouldShow);
    });
  };

  // 필터 변경 시 마커 업데이트
  useEffect(() => {
    if (mapInstanceRef.current && markersRef.current.length > 0) {
      updateMarkerVisibility();
    }
  }, [filters]);

  return (
    <div className={styles.mapWrapper}>
      <div ref={mapRef} className={styles.map}></div>
      <div className={styles.mapControls}>
        <p className={styles.controlsText}>
          마커를 클릭하면 시설 정보를 확인할 수 있습니다
        </p>
      </div>
    </div>
  );
};

export default ActualMap;
