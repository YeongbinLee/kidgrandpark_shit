import React from 'react';
import styles from './GardenCard.module.css';
import type { GardenCardData } from './types';

interface GardenCardProps {
  item: GardenCardData;
}

const GardenCard: React.FC<GardenCardProps> = ({ item }) => {
  return (
    <div className={styles.card}>
      {/* 이미지 영역 (4:3 비율) */}
      <div className={styles.imageWrapper}>
        <img src={item.imageSrc} alt={item.name} className={styles.image} />
      </div>

      {/* 카드 내용 */}
      <div className={styles.content}>
        {/* 이름 (큰 글씨) */}
        <h3 className={styles.name}>{item.name}</h3>

        {/* 설명 (한 줄 또는 간단한 설명) */}
        <p className={styles.description}>{item.description}</p>
      </div>
    </div>
  );
};

export default GardenCard;
