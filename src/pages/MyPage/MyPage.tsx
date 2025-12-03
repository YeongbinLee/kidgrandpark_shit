import React, { useEffect, useState } from 'react';
import { useNavigate, Outlet, useLocation, Link } from 'react-router-dom';
import styles from './MyPage.module.css';

const MyPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userName, setUserName] = useState('김고객');
  const [userGrade, setUserGrade] = useState('VIP');
  const [upcomingReservationsCount] = useState(2);
  const [unusedCouponsCount] = useState(3);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      alert('로그인이 필요합니다.');
      navigate('/login');
      return;
    }

    // 이메일로부터 사용자 이름 추출 (간단한 예시)
    const email = localStorage.getItem('userEmail');
    if (email) {
      const name = email.split('@')[0];
      setUserName(name);
    }
  }, [navigate]);

  // 가장 가까운 예정된 예약 (더미 데이터)
  const nextReservation = {
    type: '방문 예약',
    date: '2025-12-05',
    time: '10:00',
    visitors: {
      adult: 2,
      child: 2,
      senior: 0,
    },
    totalAmount: 24000,
  };

  // /mypage가 아닌 하위 경로면 Outlet 렌더링
  if (location.pathname !== '/mypage') {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1 className={styles.title}>마이페이지</h1>
          </div>
          <div className={styles.tabContent}>
            <Outlet />
          </div>
        </div>
      </div>
    );
  }

  // /mypage 메인 대시보드
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* 최상단: 고객 정보 및 요약 카드 */}
        <div className={styles.dashboardHeader}>
          <div className={styles.userInfo}>
            <h1 className={styles.userName}>{userName}님</h1>
            <span className={styles.userGrade}>{userGrade}</span>
          </div>
          <div className={styles.summaryCards}>
            <div className={styles.summaryCard}>
              <div className={styles.cardIcon}>📅</div>
              <div className={styles.cardContent}>
                <p className={styles.cardLabel}>예정된 예약</p>
                <p className={styles.cardValue}>{upcomingReservationsCount}건</p>
              </div>
            </div>
            <div className={styles.summaryCard}>
              <div className={styles.cardIcon}>🎁</div>
              <div className={styles.cardContent}>
                <p className={styles.cardLabel}>미사용 쿠폰</p>
                <p className={styles.cardValue}>{unusedCouponsCount}개</p>
              </div>
            </div>
          </div>
        </div>

        {/* 중앙: 가장 가까운 예약 상세 정보 */}
        <div className={styles.nextReservationSection}>
          <h2 className={styles.sectionTitle}>다가오는 예약</h2>
          <div className={styles.reservationCard}>
            <div className={styles.reservationInfo}>
              <div className={styles.reservationType}>{nextReservation.type}</div>
              <div className={styles.reservationDate}>
                <span className={styles.dateIcon}>📆</span>
                <span className={styles.dateText}>
                  {nextReservation.date} {nextReservation.time}
                </span>
              </div>
              <div className={styles.reservationDetails}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>방문 인원:</span>
                  <span className={styles.detailValue}>
                    성인 {nextReservation.visitors.adult}명, 어린이{' '}
                    {nextReservation.visitors.child}명
                    {nextReservation.visitors.senior > 0 &&
                      `, 경로 ${nextReservation.visitors.senior}명`}
                  </span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>결제 금액:</span>
                  <span className={styles.detailValue}>
                    {nextReservation.totalAmount.toLocaleString()}원
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.qrCodeSection}>
              <div className={styles.qrCodePlaceholder}>
                <div className={styles.qrIcon}>📱</div>
                <p className={styles.qrText}>QR 코드</p>
              </div>
              <p className={styles.qrDescription}>입장 시 제시해주세요</p>
            </div>
          </div>
        </div>

        {/* 하단: 관리 기능 탭 메뉴 */}
        <div className={styles.managementSection}>
          <h2 className={styles.sectionTitle}>관리 메뉴</h2>
          <div className={styles.menuGrid}>
            <Link to="/mypage/activities" className={styles.menuCard}>
              <div className={styles.menuIcon}>🎁</div>
              <h3 className={styles.menuTitle}>쿠폰 & 혜택</h3>
              <p className={styles.menuDescription}>
                보유 쿠폰, 스탬프, 활동 내역을 확인하세요
              </p>
            </Link>
            <Link to="/mypage/reservations" className={styles.menuCard}>
              <div className={styles.menuIcon}>📋</div>
              <h3 className={styles.menuTitle}>전체 예약 내역</h3>
              <p className={styles.menuDescription}>
                예약 내역을 조회하고 관리하세요
              </p>
            </Link>
            <Link to="/mypage/profile" className={styles.menuCard}>
              <div className={styles.menuIcon}>⚙️</div>
              <h3 className={styles.menuTitle}>회원 정보 관리</h3>
              <p className={styles.menuDescription}>
                개인정보 수정 및 알림 설정을 변경하세요
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
