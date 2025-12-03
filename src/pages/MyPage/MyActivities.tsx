import React from 'react';
import styles from './MyActivities.module.css';

interface Coupon {
  id: number;
  title: string;
  discount: string;
  description: string;
  expiryDate: string;
}

interface Review {
  id: number;
  title: string;
  date: string;
  rating: number;
}

interface Inquiry {
  id: number;
  title: string;
  date: string;
  status: '답변 대기' | '답변 완료';
}

const MyActivities: React.FC = () => {
  // 온라인 스탬프 현황
  const totalStamps = 10;
  const collectedStamps = 7;
  const progress = (collectedStamps / totalStamps) * 100;

  // 보유 쿠폰 목록
  const coupons: Coupon[] = [
    {
      id: 1,
      title: '신규 회원 할인',
      discount: '10%',
      description: '첫 방문 예약 시 10% 할인',
      expiryDate: '2025-12-31',
    },
    {
      id: 2,
      title: '가족 패키지',
      discount: '15%',
      description: '4인 이상 예약 시 15% 할인',
      expiryDate: '2025-12-31',
    },
    {
      id: 3,
      title: '재방문 감사 쿠폰',
      discount: '5,000원',
      description: '재방문 고객 5,000원 할인',
      expiryDate: '2026-01-31',
    },
  ];

  // 방문 후기 (최근 5개)
  const reviews: Review[] = [
    { id: 1, title: '아이들과 즐거운 하루!', date: '2025-11-25', rating: 5 },
    { id: 2, title: '동물들이 너무 귀여워요', date: '2025-11-20', rating: 4 },
    { id: 3, title: '시설이 깨끗하고 좋아요', date: '2025-11-15', rating: 5 },
  ];

  // 1:1 문의 내역 (최근 5개)
  const inquiries: Inquiry[] = [
    { id: 1, title: '단체 예약 문의', date: '2025-11-28', status: '답변 완료' },
    { id: 2, title: '주차장 이용 시간 문의', date: '2025-11-25', status: '답변 완료' },
    { id: 3, title: '체험 프로그램 예약 취소 관련', date: '2025-11-20', status: '답변 대기' },
  ];

  const renderStars = (rating: number) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.pageTitle}>활동/혜택 내역</h2>

      {/* 온라인 스탬프 현황 */}
      <section className={styles.stampSection}>
        <h3 className={styles.sectionTitle}>🏆 온라인 스탬프 현황</h3>
        <div className={styles.stampDashboard}>
          <div className={styles.stampProgress}>
            <div className={styles.progressCircle}>
              <svg className={styles.progressSvg} viewBox="0 0 120 120">
                <circle
                  className={styles.progressBg}
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  strokeWidth="12"
                />
                <circle
                  className={styles.progressBar}
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  strokeWidth="12"
                  strokeDasharray={`${2 * Math.PI * 54}`}
                  strokeDashoffset={`${2 * Math.PI * 54 * (1 - progress / 100)}`}
                />
              </svg>
              <div className={styles.progressText}>
                <span className={styles.progressPercent}>{progress.toFixed(0)}%</span>
              </div>
            </div>
            <div className={styles.stampInfo}>
              <p className={styles.stampCount}>
                <span className={styles.current}>{collectedStamps}</span>
                <span className={styles.separator}>/</span>
                <span className={styles.total}>{totalStamps}</span>
              </p>
              <p className={styles.stampDesc}>스탬프를 모으고 혜택을 받아보세요!</p>
            </div>
          </div>
          <div className={styles.stampGrid}>
            {Array.from({ length: totalStamps }).map((_, index) => (
              <div
                key={index}
                className={`${styles.stamp} ${index < collectedStamps ? styles.collected : ''}`}
              >
                {index < collectedStamps ? '✓' : index + 1}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 보유 쿠폰 목록 */}
      <section className={styles.couponSection}>
        <h3 className={styles.sectionTitle}>🎁 보유 쿠폰</h3>
        <div className={styles.couponList}>
          {coupons.map((coupon) => (
            <div key={coupon.id} className={styles.couponCard}>
              <div className={styles.couponHeader}>
                <span className={styles.couponTitle}>{coupon.title}</span>
                <span className={styles.couponDiscount}>{coupon.discount}</span>
              </div>
              <p className={styles.couponDesc}>{coupon.description}</p>
              <p className={styles.couponExpiry}>유효기간: {coupon.expiryDate}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 활동 기록 */}
      <section className={styles.activitySection}>
        <h3 className={styles.sectionTitle}>📝 활동 기록</h3>

        {/* 방문 후기 */}
        <div className={styles.activityGroup}>
          <h4 className={styles.activityTitle}>방문 후기</h4>
          <div className={styles.activityTable}>
            {reviews.length === 0 ? (
              <p className={styles.emptyText}>작성한 후기가 없습니다.</p>
            ) : (
              reviews.map((review) => (
                <div key={review.id} className={styles.activityRow}>
                  <div className={styles.activityInfo}>
                    <span className={styles.activityName}>{review.title}</span>
                    <span className={styles.activityDate}>{review.date}</span>
                  </div>
                  <span className={styles.rating}>{renderStars(review.rating)}</span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* 1:1 문의 내역 */}
        <div className={styles.activityGroup}>
          <h4 className={styles.activityTitle}>1:1 문의 내역</h4>
          <div className={styles.activityTable}>
            {inquiries.length === 0 ? (
              <p className={styles.emptyText}>문의 내역이 없습니다.</p>
            ) : (
              inquiries.map((inquiry) => (
                <div key={inquiry.id} className={styles.activityRow}>
                  <div className={styles.activityInfo}>
                    <span className={styles.activityName}>{inquiry.title}</span>
                    <span className={styles.activityDate}>{inquiry.date}</span>
                  </div>
                  <span
                    className={`${styles.inquiryStatus} ${
                      inquiry.status === '답변 완료' ? styles.statusCompleted : styles.statusPending
                    }`}
                  >
                    {inquiry.status}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyActivities;
