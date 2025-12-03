import React from 'react';
import type { AttractionCardData } from './types';
import styles from './AttractionCard.module.css';

interface AttractionCardProps {
  item: AttractionCardData;
}

const AttractionCard: React.FC<AttractionCardProps> = ({ item }) => {
  // 키 제한 문구 생성
  const getHeightRequirement = () => {
    if (item.maxHeight) {
      return `${item.minHeight}cm 이상 ${item.maxHeight}cm 이하`;
    }
    return `${item.minHeight}cm 이상`;
  };

  return (
    <div className={styles.card}>
      {/* 이미지 영역 */}
      <div className={styles.imageWrapper}>
        <img
          src={item.imageSrc}
          alt={item.name}
          className={styles.image}
        />
      </div>

      {/* 정보 영역 */}
      <div className={styles.content}>
        {/* 헤더: 이름과 키 제한 배지 */}
        <div className={styles.header}>
          <h3 className={styles.name}>{item.name}</h3>
          {item.minHeight > 0 && (
            <span className={styles.heightBadge}>{getHeightRequirement()}</span>
          )}
        </div>

        {/* 키워드 태그 */}
        <div className={styles.tagList}>
          {item.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        {/* 위치 정보 */}
        <div className={styles.footer}>
          <span className={styles.locationIcon}>📍</span>
          <span className={styles.location}>{item.location}</span>
        </div>
      </div>
    </div>
  );
};

export default AttractionCard;
