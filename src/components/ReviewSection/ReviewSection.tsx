import React, { useState } from 'react';
import styles from './ReviewSection.module.css';

interface Review {
  id: number;
  userId: string;
  rating: number;
  comment: string;
  imageUrl: string;
}

const ReviewSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews: Review[] = [
    {
      id: 1,
      userId: 'happy_family',
      rating: 5,
      comment: '아이들과 함께 최고의 주말을 보냈어요!',
      imageUrl: '/review/1.png',
    },
    {
      id: 2,
      userId: 'nature_lover',
      rating: 5,
      comment: '자연과 함께하는 힐링 시간, 정말 좋았습니다.',
      imageUrl: '/review/2.png',
    },
    {
      id: 3,
      userId: 'couple_date',
      rating: 4,
      comment: '연인과 데이트하기 완벽한 장소에요!',
      imageUrl: '/review/3.png',
    },
    {
      id: 4,
      userId: 'animal_friend',
      rating: 5,
      comment: '귀여운 동물들과 즐거운 시간을 보냈어요.',
      imageUrl: '/review/4.png',
    },
    {
      id: 5,
      userId: 'weekend_trip',
      rating: 5,
      comment: '가족 나들이 최고의 선택이었어요!',
      imageUrl: '/review/5.png',
    },
    {
      id: 6,
      userId: 'photo_lover',
      rating: 5,
      comment: '사진 찍기 좋은 포토존이 가득해요.',
      imageUrl: '/review/6.png',
    },
  ];

  const cardsPerView = 3;
  const maxIndex = Math.ceil(reviews.length / cardsPerView) - 1;

  const nextReview = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const currentReviews = reviews.slice(
    currentIndex * cardsPerView,
    (currentIndex + 1) * cardsPerView
  );

  return (
    <section className={styles.reviewSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>방문자 후기</h2>
          <p className={styles.subtitle}>
            어린이대공원을 다녀간 분들의 생생한 후기를 만나보세요
          </p>
        </div>

        <div className={styles.reviewCarousel}>
          <button className={styles.prevBtn} onClick={prevReview}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className={styles.reviewCards}>
            {currentReviews.map((review) => (
              <div key={review.id} className={styles.reviewCard}>
                <div className={styles.imageWrapper}>
                  <img
                    src={review.imageUrl}
                    alt={`${review.userId}의 후기`}
                    className={styles.image}
                  />
                  <div className={styles.imageOverlay}>
                    <button className={styles.viewBtn}>View More +</button>
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.userInfo}>
                    <span className={styles.userId}>{review.userId}</span>
                    <span className={styles.period}>
                      {new Date().toLocaleDateString('ko-KR', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                      }).replace(/\. /g, '.').replace(/\.$/, '')}
                    </span>
                  </div>
                  <div className={styles.rating}>
                    {'⭐'.repeat(review.rating)}
                  </div>
                  <p className={styles.comment}>{review.comment}</p>
                </div>
              </div>
            ))}
          </div>

          <button className={styles.nextBtn} onClick={nextReview}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className={styles.indicators}>
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentIndex ? styles.activeIndicator : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
