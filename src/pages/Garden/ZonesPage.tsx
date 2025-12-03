import React from 'react';
import MapPlaceholder from '../../components/MapPlaceholder/MapPlaceholder';
import GardenCard from '../../components/GardenCard/GardenCard';
import type { GardenCardData } from '../../components/GardenCard/types';
import styles from './ZonesPage.module.css';

const ZonesPage: React.FC = () => {
  // 식물원 관람 구역 데이터 (6가지)
  const zones: GardenCardData[] = [
    {
      id: 1,
      name: '장미원',
      description: '다양한 색상의 장미 | 계절마다 아름다운 풍경',
      imageSrc: '/garden/close-up-pink-roses.jpg',
    },
    {
      id: 2,
      name: '야생화원',
      description: '한국의 자생 야생화 | 자연 친화적 정원',
      imageSrc: '/garden/close-up-tiny-spring-flower-bouquet.jpg',
    },
    {
      id: 3,
      name: '허브원',
      description: '향기로운 허브 가득 | 치유의 공간',
      imageSrc: '/garden/green-plants-field.jpg',
    },
    {
      id: 4,
      name: '수목원',
      description: '다양한 수종의 나무 | 숲 속 힐링',
      imageSrc: '/garden/walkway-garden-forest.jpg',
    },
    {
      id: 5,
      name: '수련 연못',
      description: '아름다운 수련과 연꽃 | 수생 식물 감상',
      imageSrc: '/garden/lake_1.jpg',
    },
    {
      id: 6,
      name: '호수 산책로',
      description: '호수를 따라 걷는 산책로 | 자연과 함께',
      imageSrc: '/garden/lake_2.jpg',
    },
  ];

  return (
    <div className={styles.container}>
      {/* 페이지 제목 */}
      <h1 className={styles.title}>정원 관람 구역</h1>
      <p className={styles.subtitle}>
        사계절 아름다운 식물들이 가득한 정원을 둘러보세요
      </p>

      {/* 지도 영역 (상단) */}
      <MapPlaceholder
        title="식물원 테마별 관람 구역 지도"
        mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.0149347812304!2d127.07923007660991!3d37.54882407205244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca5a3e2e9d70b%3A0x4e5f85f1f3f8a6c8!2z7ISc7Jq47Ja07Iug7J207IKw6rO17JuQIOyepeuv4OybkA!5e0!3m2!1sko!2skr!4v1733113300000!5m2!1sko!2skr"
      />

      {/* 관람 구역 카드 목록 (하단) */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>주요 관람 구역</h2>

        {/* 카드 그리드 (가로 3열) */}
        <div className={styles.cardGrid}>
          {zones.map((zone) => (
            <GardenCard key={zone.id} item={zone} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ZonesPage;
