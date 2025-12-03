import React from 'react';
import MapPlaceholder from '../../components/MapPlaceholder/MapPlaceholder';
import GardenCard from '../../components/GardenCard/GardenCard';
import type { GardenCardData } from '../../components/GardenCard/types';
import styles from './PondPage.module.css';

const PondPage: React.FC = () => {
  // 수생 생물/식물 데이터 (6가지)
  const pondLife: GardenCardData[] = [
    {
      id: 1,
      name: '연꽃',
      description: '여름철 아름다운 분홍빛 꽃 | 연못의 상징',
      imageSrc: '/garden/beautiful-pink-lotus.jpg',
    },
    {
      id: 2,
      name: '잉어',
      description: '연못에서 가장 흔한 물고기 | 다양한 색상',
      imageSrc: '/garden/macro-koi-fish.jpg',
    },
    {
      id: 3,
      name: '청둥오리',
      description: '철새 | 수면에서 헤엄치는 모습',
      imageSrc: '/garden/selective-focus-shot-adult-anas-platyrhynchos-duck-relaxing-by-river.jpg',
    },
    {
      id: 4,
      name: '수련',
      description: '물 위에 떠있는 잎과 꽃 | 수생식물',
      imageSrc: '/garden/close-up-lotus-water-lily-lake.jpg',
    },
    {
      id: 5,
      name: '거북이',
      description: '바위 위에서 일광욕 | 장수의 상징',
      imageSrc: '/garden/baby-brazilian-turtle-closeup-watter.jpg',
    },
    {
      id: 6,
      name: '개구리',
      description: '연못 주변 서식 | 울음소리의 주인공',
      imageSrc: '/garden/closeup-mediterranean-tree-frog-leaf-sunlight-with-blurry-background.jpg',
    },
  ];

  return (
    <div className={styles.container}>
      {/* 페이지 제목 */}
      <h1 className={styles.title}>연못 안내</h1>
      <p className={styles.subtitle}>
        자연 속 작은 생태계, 연못의 다양한 생물들을 만나보세요
      </p>

      {/* 지도 영역 (상단) */}
      <MapPlaceholder
        title="어린이대공원 연못 위치"
        mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.0676753918977!2d127.08074807660994!3d37.54780397205299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca5a3e2e9d70b%3A0x4e5f85f1f3f8a6c8!2z7ISc7Jq47Ja07Iug7J207IKw6rO17JuQIOyXsOuqqQ!5e0!3m2!1sko!2skr!4v1733113200000!5m2!1sko!2skr"
      />

      {/* 수생 생물/식물 카드 목록 (하단) */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>연못의 수생 생물과 식물</h2>

        {/* 카드 그리드 (가로 3열) */}
        <div className={styles.cardGrid}>
          {pondLife.map((item) => (
            <GardenCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PondPage;
