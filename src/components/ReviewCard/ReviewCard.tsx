import React from 'react';
import styles from './ReviewCard.module.css';
import type { ReviewData } from './types';

interface ReviewCardProps {
  review: ReviewData;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  // 별점을 시각적으로 표시 (채워진 별과 빈 별)
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= review.rating ? styles.starFilled : styles.starEmpty}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className={styles.card}>
      {/* 이미지 영역 (4:3 비율) */}
      <div className={styles.imageWrapper}>
        <img src={review.imageSrc} alt={`${review.authorId}님의 후기`} className={styles.image} />
      </div>

      {/* 카드 내용 */}
      <div className={styles.content}>
        {/* 작성자 및 날짜 */}
        <div className={styles.meta}>
          <span className={styles.author}>{review.authorId}</span>
          <span className={styles.date}>{review.date}</span>
        </div>

        {/* 별점 표시 */}
        <div className={styles.rating}>{renderStars()}</div>

        {/* 한 줄 후기 */}
        <p className={styles.summary}>{review.summary}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
