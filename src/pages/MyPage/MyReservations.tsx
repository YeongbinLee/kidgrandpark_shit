import React, { useState } from 'react';
import styles from './MyReservations.module.css';

interface Reservation {
  id: number;
  type: '방문 예약' | '체험 프로그램' | '시설 대관';
  title: string;
  date: string;
  time?: string;
  people?: {
    adults: number;
    children: number;
    infants: number;
  };
  amount: number;
  status: '결제 완료' | '방문 완료' | '취소됨';
  createdAt: string;
}

const MyReservations: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'전체' | '방문 예약' | '체험 프로그램' | '시설 대관'>('전체');

  // 더미 데이터
  const [reservations] = useState<Reservation[]>([
    {
      id: 1,
      type: '방문 예약',
      title: '서울어린이대공원 입장',
      date: '2025-12-15',
      people: { adults: 2, children: 1, infants: 0 },
      amount: 13000,
      status: '결제 완료',
      createdAt: '2025-11-28',
    },
    {
      id: 2,
      type: '체험 프로그램',
      title: '동물 먹이주기 체험',
      date: '2025-12-20',
      time: '14:00',
      people: { adults: 1, children: 2, infants: 0 },
      amount: 25000,
      status: '결제 완료',
      createdAt: '2025-11-25',
    },
    {
      id: 3,
      type: '시설 대관',
      title: '야외 피크닉 공간 대관',
      date: '2025-12-25',
      time: '10:00 - 16:00',
      amount: 50000,
      status: '결제 완료',
      createdAt: '2025-11-20',
    },
    {
      id: 4,
      type: '방문 예약',
      title: '서울어린이대공원 입장',
      date: '2025-11-10',
      people: { adults: 3, children: 0, infants: 0 },
      amount: 15000,
      status: '방문 완료',
      createdAt: '2025-11-05',
    },
  ]);

  const filters: Array<'전체' | '방문 예약' | '체험 프로그램' | '시설 대관'> = ['전체', '방문 예약', '체험 프로그램', '시설 대관'];

  const filteredReservations = activeFilter === '전체'
    ? reservations
    : reservations.filter(res => res.type === activeFilter);

  const handleCancelReservation = (_id: number) => {
    if (window.confirm('정말 예약을 취소하시겠습니까?')) {
      alert('예약이 취소되었습니다.');
    }
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case '결제 완료':
        return styles.statusConfirmed;
      case '방문 완료':
        return styles.statusCompleted;
      case '취소됨':
        return styles.statusCancelled;
      default:
        return '';
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.pageTitle}>예약/신청 관리</h2>

      {/* 서브 탭 필터 */}
      <div className={styles.filterTabs}>
        {filters.map((filter) => (
          <button
            key={filter}
            className={`${styles.filterTab} ${activeFilter === filter ? styles.activeFilter : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* 예약 목록 */}
      <div className={styles.reservationList}>
        {filteredReservations.length === 0 ? (
          <div className={styles.emptyState}>
            <p>예약 내역이 없습니다.</p>
          </div>
        ) : (
          filteredReservations.map((reservation) => (
            <div key={reservation.id} className={styles.reservationCard}>
              <div className={styles.cardHeader}>
                <div className={styles.typeAndStatus}>
                  <span className={styles.type}>{reservation.type}</span>
                  <span className={`${styles.statusBadge} ${getStatusBadgeClass(reservation.status)}`}>
                    {reservation.status}
                  </span>
                </div>
                <span className={styles.createdAt}>예약일: {reservation.createdAt}</span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.reservationTitle}>{reservation.title}</h3>
                <div className={styles.reservationDetails}>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>방문 날짜:</span>
                    <span className={styles.detailValue}>{reservation.date}</span>
                  </div>
                  {reservation.time && (
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>시간:</span>
                      <span className={styles.detailValue}>{reservation.time}</span>
                    </div>
                  )}
                  {reservation.people && (
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>인원:</span>
                      <span className={styles.detailValue}>
                        성인 {reservation.people.adults}명 · 어린이 {reservation.people.children}명 · 유아 {reservation.people.infants}명
                      </span>
                    </div>
                  )}
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>결제 금액:</span>
                    <span className={styles.amount}>{reservation.amount.toLocaleString()}원</span>
                  </div>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <button className={styles.detailBtn}>예약 상세 보기</button>
                {reservation.status === '결제 완료' && (
                  <button
                    className={styles.cancelBtn}
                    onClick={() => handleCancelReservation(reservation.id)}
                  >
                    취소 요청
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyReservations;
