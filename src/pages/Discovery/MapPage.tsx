import React, { useState } from 'react';
import ActualMap from '../../components/ActualMap/ActualMap';
import styles from './MapPage.module.css';

interface Facility {
  id: number;
  name: string;
  category: 'zoo' | 'garden' | 'park';
  description: string;
  location: string;
  icon: string;
}

const MapPage: React.FC = () => {
  const [filters, setFilters] = useState({
    zoo: true,
    garden: true,
    park: true,
  });
  const [selectedFacility, setSelectedFacility] = useState<number | null>(null);

  const filterItems = [
    { id: 'zoo', label: '동물원' },
    { id: 'garden', label: '식물원' },
    { id: 'park', label: '놀이공원' },
  ];

  const facilities: Facility[] = [
    { id: 1, name: '대형동물관', category: 'zoo', description: '사자, 호랑이, 코끼리 등 대형 동물을 만나보세요', location: '동물원 구역 A', icon: '/animals/lion_1.jpg' },
    { id: 2, name: '소형동물관', category: 'zoo', description: '토끼, 햄스터, 기니피그 등 귀여운 동물들', location: '동물원 구역 B', icon: '/animals/squirrel_1.jpg' },
    { id: 3, name: '조류관', category: 'zoo', description: '앵무새, 공작새 등 아름다운 새들', location: '동물원 구역 C', icon: '/animals/eagle_1.webp' },
    { id: 4, name: '수족관', category: 'zoo', description: '다양한 물고기와 해양 생물', location: '동물원 구역 D', icon: '/animals/fish_1.jpg' },
    { id: 5, name: '열대식물원', category: 'garden', description: '다양한 열대 식물과 꽃을 감상하세요', location: '식물원 온실', icon: '/garden/Dracaena_1.webp' },
    { id: 6, name: '장미원', category: 'garden', description: '계절별 아름다운 장미가 가득', location: '식물원 야외', icon: '/garden/close-up-pink-roses.jpg' },
    { id: 7, name: '선인장 정원', category: 'garden', description: '다육식물과 선인장 전시', location: '식물원 실내', icon: '/garden/lake_1.jpg' },
    { id: 8, name: '허브 가든', category: 'garden', description: '향기로운 허브들을 체험하세요', location: '식물원 야외', icon: '/garden/lake_2.jpg' },
    { id: 9, name: '대관람차', category: 'park', description: '서울을 한눈에 조망하는 전망', location: '놀이공원 중앙', icon: '/attration/roller_1.jpg' },
    { id: 10, name: '회전목마', category: 'park', description: '온 가족이 즐기는 클래식 놀이기구', location: '놀이공원 입구', icon: '/attration/marrygoaround_1.jpeg' },
    { id: 11, name: '바이킹', category: 'park', description: '짜릿한 스릴을 즐기는 놀이기구', location: '놀이공원 서쪽', icon: '/attration/viking_1.jpg' },
    { id: 12, name: '범퍼카', category: 'park', description: '안전하게 즐기는 충돌 게임', location: '놀이공원 동쪽', icon: '/attration/bumpercar_1.jpg' },
  ];

  const toggleFilter = (id: string) => {
    setFilters((prev) => ({
      ...prev,
      [id]: !prev[id as keyof typeof prev],
    }));
  };

  const filteredFacilities = facilities.filter(
    (facility) => filters[facility.category]
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>대공원 전체 지도</h1>
      <p className={styles.subtitle}>
        서울어린이대공원의 모든 시설을 한눈에 확인하세요
      </p>

      <div className={styles.mapContainer}>
        {/* 좌측: 필터 및 시설 목록 */}
        <div className={styles.leftPanel}>
          {/* 필터 섹션 */}
          <div className={styles.filterSection}>
            <h2 className={styles.filterTitle}>필터</h2>
            <div className={styles.filterList}>
              {filterItems.map((item) => (
                <div
                  key={item.id}
                  className={styles.filterItem}
                  onClick={() => toggleFilter(item.id)}
                >
                  <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={filters[item.id as keyof typeof filters]}
                    onChange={() => toggleFilter(item.id)}
                  />
                  <label className={styles.filterLabel}>{item.label}</label>
                </div>
              ))}
            </div>
          </div>

          {/* 시설 목록 */}
          <div className={styles.facilitiesSection}>
            <h2 className={styles.facilitiesTitle}>
              시설 목록 ({filteredFacilities.length}개)
            </h2>
            <div className={styles.facilitiesList}>
              {filteredFacilities.map((facility) => (
                <div
                  key={facility.id}
                  className={`${styles.facilityCard} ${
                    selectedFacility === facility.id ? styles.selected : ''
                  }`}
                  onClick={() => setSelectedFacility(facility.id)}
                >
                  <div className={styles.facilityIcon}>
                    <img src={facility.icon} alt={facility.name} />
                  </div>
                  <div className={styles.facilityInfo}>
                    <h3 className={styles.facilityName}>{facility.name}</h3>
                    <p className={styles.facilityDescription}>{facility.description}</p>
                    <div className={styles.facilityLocation}>
                      <span className={styles.locationIcon}>📍</span>
                      {facility.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 우측: 지도 섹션 */}
        <div className={styles.mapSection}>
          <ActualMap filters={filters} />
        </div>
      </div>
    </div>
  );
};

export default MapPage;
