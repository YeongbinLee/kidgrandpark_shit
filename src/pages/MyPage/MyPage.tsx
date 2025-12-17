import React, { useEffect, useState } from 'react';
import { useNavigate, Outlet, useLocation, Link } from 'react-router-dom';
import styles from './MyPage.module.css';

const MyPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userName, setUserName] = useState('김고객');
  const [userGrade] = useState('VIP');
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      alert('로그인이 필요합니다.');
      navigate('/login');
      return;
    }

    // 저장된 이름 불러오기 (없으면 이메일에서 추출)
    const savedName = localStorage.getItem('userName');
    if (savedName) {
      setUserName(savedName);
    } else {
      const email = localStorage.getItem('userEmail');
      if (email) {
        const name = email.split('@')[0];
        setUserName(name);
      }
    }

    // 프로필 이미지 불러오기
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setProfileImage(savedImage);
    } else {
      setProfileImage(null);
    }
  }, [navigate, location.pathname]);

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
        {/* 최상단: 고객 정보 */}
        <div className={styles.dashboardHeader}>
          <div className={styles.userInfo}>
            <div className={styles.profileAvatar}>
              {profileImage ? (
                <img src={profileImage} alt="프로필" className={styles.avatarImage} />
              ) : (
                <svg className={styles.avatarIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                </svg>
              )}
            </div>
            <div className={styles.userNameSection}>
              <h1 className={styles.userName}>{userName}님</h1>
              <span className={styles.userGrade}>{userGrade}</span>
            </div>
          </div>

          {/* 등급 진행 바 */}
          <div className={styles.gradeProgress}>
            <div className={styles.gradeInfo}>
              <span className={styles.currentGrade}>{userGrade}</span>
              <span className={styles.nextGrade}>VVIP</span>
            </div>
            <div className={styles.progressBar}>
              <div className={styles.progressFill} style={{ width: '65%' }}></div>
            </div>
            <p className={styles.progressText}>다음 등급까지 35,000원 남음</p>
          </div>
        </div>

        {/* 고정 메뉴 - 3개 가로 배치 */}
        <div className={styles.quickMenuSection}>
          <Link to="/mypage/activities" className={styles.quickMenuItem}>
            <div className={styles.quickMenuIconWrapper}>
              <svg className={styles.quickMenuIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6" />
                <path d="M14 2h6a2 2 0 0 1 2 2v6" />
                <path d="M12 12L22 2" />
              </svg>
            </div>
            <span className={styles.quickMenuLabel}>쿠폰 & 혜택</span>
            <span className={styles.quickMenuDesc}>보유 쿠폰 및 스탬프</span>
          </Link>
          <Link to="/mypage/reservations" className={styles.quickMenuItem}>
            <div className={styles.quickMenuIconWrapper}>
              <svg className={styles.quickMenuIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <span className={styles.quickMenuLabel}>예약 내역</span>
            <span className={styles.quickMenuDesc}>예약 조회 및 관리</span>
          </Link>
          <Link to="/mypage/profile" className={styles.quickMenuItem}>
            <div className={styles.quickMenuIconWrapper}>
              <svg className={styles.quickMenuIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </div>
            <span className={styles.quickMenuLabel}>회원 정보</span>
            <span className={styles.quickMenuDesc}>개인정보 및 설정</span>
          </Link>
        </div>

        {/* 미사용 쿠폰 슬라이드 */}
        <div className={styles.couponSection}>
          <h2 className={styles.sectionTitle}>보유 쿠폰</h2>
          <div className={styles.couponSlider}>
            <div className={styles.couponCard}>
              <div className={styles.couponLeft}>
                <span className={styles.couponDiscount}>20%</span>
                <span className={styles.couponDiscountLabel}>할인</span>
              </div>
              <div className={styles.couponRight}>
                <h4 className={styles.couponTitle}>입장권 할인 쿠폰</h4>
                <p className={styles.couponTarget}>전 구역 입장권 적용</p>
                <p className={styles.couponExpiry}>2025.12.31까지</p>
              </div>
            </div>
            <div className={styles.couponCard}>
              <div className={styles.couponLeft}>
                <span className={styles.couponDiscount}>3,000</span>
                <span className={styles.couponDiscountLabel}>원 할인</span>
              </div>
              <div className={styles.couponRight}>
                <h4 className={styles.couponTitle}>식음료 할인 쿠폰</h4>
                <p className={styles.couponTarget}>파크 내 모든 식당</p>
                <p className={styles.couponExpiry}>2025.12.15까지</p>
              </div>
            </div>
            <div className={styles.couponCard}>
              <div className={styles.couponLeft}>
                <span className={styles.couponDiscount}>15%</span>
                <span className={styles.couponDiscountLabel}>할인</span>
              </div>
              <div className={styles.couponRight}>
                <h4 className={styles.couponTitle}>기프트샵 할인 쿠폰</h4>
                <p className={styles.couponTarget}>기프트샵 전 상품</p>
                <p className={styles.couponExpiry}>2026.01.31까지</p>
              </div>
            </div>
          </div>
        </div>

        {/* 다가오는 예약 */}
        <div className={styles.upcomingReservationSection}>
          <h2 className={styles.sectionTitle}>다가오는 예약</h2>
          <div className={styles.reservationList}>
            <div className={styles.reservationCard}>
              <div className={styles.reservationQr}>
                <img src="/QR_1.png" alt="입장 QR 코드" className={styles.qrImage} />
                <span className={styles.qrLabel}>입장 QR</span>
              </div>
              <div className={styles.reservationMain}>
                <div className={styles.reservationBadge}>동물 사육사 체험</div>
                <div className={styles.reservationDetails}>
                  <div className={styles.reservationDetailRow}>
                    <svg className={styles.reservationIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span>2025.12.21 (토) 10:00</span>
                  </div>
                  <div className={styles.reservationDetailRow}>
                    <svg className={styles.reservationIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    <span>성인 2명, 어린이 1명</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.reservationCard}>
              <div className={styles.reservationQr}>
                <img src="/QR_1.png" alt="입장 QR 코드" className={styles.qrImage} />
                <span className={styles.qrLabel}>입장 QR</span>
              </div>
              <div className={styles.reservationMain}>
                <div className={styles.reservationBadge}>가족 코스 투어</div>
                <div className={styles.reservationDetails}>
                  <div className={styles.reservationDetailRow}>
                    <svg className={styles.reservationIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span>2025.12.28 (토) 14:00</span>
                  </div>
                  <div className={styles.reservationDetailRow}>
                    <svg className={styles.reservationIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    <span>성인 2명, 어린이 2명</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
