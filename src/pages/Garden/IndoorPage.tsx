import React from 'react';
import GardenCard from '../../components/GardenCard/GardenCard';
import type { GardenCardData } from '../../components/GardenCard/types';
import styles from './IndoorPage.module.css';

const IndoorPage: React.FC = () => {
  // 주요 실내 식물 데이터 (6가지)
  const plants: GardenCardData[] = [
    {
      id: 1,
      name: '몬스테라',
      description: '열대 아메리카 원산 | 큰 잎에 독특한 구멍이 특징',
      imageSrc: '/garden/fresh-monstera-leaves.jpg',
    },
    {
      id: 2,
      name: '피토니아',
      description: '남미 원산 | 아름다운 잎맥 무늬를 가진 관엽식물',
      imageSrc: '/garden/pitonia_1.jpg',
    },
    {
      id: 3,
      name: '아글라오네마',
      description: '동남아시아 원산 | 공기정화 능력이 뛰어난 식물',
      imageSrc: '/garden/aglaonema_1.jpeg',
    },
    {
      id: 4,
      name: '스파티필름',
      description: '중남미 원산 | 하얀 꽃이 아름다운 실내 식물',
      imageSrc: '/garden/spathiphyllum_1.jpg',
    },
    {
      id: 5,
      name: '칼라데아',
      description: '열대 아메리카 원산 | 화려한 잎 무늬가 특징',
      imageSrc: '/garden/calathea_1.webp',
    },
    {
      id: 6,
      name: '드라세나',
      description: '아프리카/아시아 원산 | 키우기 쉬운 관엽식물',
      imageSrc: '/garden/Dracaena_1.webp',
    },
  ];

  return (
    <div className={styles.container}>
      {/* 페이지 제목 */}
      <h1 className={styles.title}>실내 정원 안내</h1>
      <p className={styles.subtitle}>
        사계절 내내 푸르른 식물을 만나볼 수 있는 실내 정원입니다
      </p>

      {/* 주요 식물 소개 섹션 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>주요 식물 소개</h2>

        {/* 카드 그리드 (가로 3열) */}
        <div className={styles.cardGrid}>
          {plants.map((plant) => (
            <GardenCard key={plant.id} item={plant} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default IndoorPage;
