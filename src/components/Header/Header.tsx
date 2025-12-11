import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navItems = [
    { id: 1, name: '어반 쥬', link: '/zoo/animals' },
    { id: 2, name: '그린 가든', link: '/garden/indoor' },
    { id: 3, name: '플레이 파크', link: '/park/attractions' },
    { id: 4, name: '디스커버리', link: '/discovery/map' },
    { id: 5, name: '커뮤니티', link: '/community/news' },
  ];

  // 경로가 변경될 때마다 로그인 상태 확인
  useEffect(() => {
    const checkLoginStatus = () => {
      const loginStatus = localStorage.getItem('isLoggedIn');
      setIsLoggedIn(loginStatus === 'true');
    };

    checkLoginStatus();
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogoutClick = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userEmail');
      setIsLoggedIn(false);
      alert('로그아웃 되었습니다.');
      navigate('/');
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* 로고 */}
        <div className={styles.logo}>
          <Link to="/">
            <img src="/logo-horizontal.png" alt="어린이대공원" />
          </Link>
        </div>

        {/* 데스크톱 네비게이션 */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.id} className={styles.navItem}>
                <Link to={item.link} className={styles.navLink}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* 우측 액션 버튼 그룹 */}
        <div className={styles.actions}>
          {/* 검색 버튼 */}
          <button
            className={styles.searchBtn}
            aria-label="검색"
            onClick={() => (window as any).openSearchModal?.()}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* 모바일 햄버거 메뉴 버튼 */}
          <button
            className={styles.hamburger}
            onClick={toggleMobileMenu}
            aria-label="메뉴"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {
        isMobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <nav className={styles.mobileNav}>
              <ul className={styles.mobileNavList}>
                {navItems.map((item) => (
                  <li key={item.id} className={styles.mobileNavItem}>
                    <Link
                      to={item.link}
                      className={styles.mobileNavLink}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* COMMAND 1-2: 햄버거 메뉴 내부 조건부 버튼 렌더링 */}
              <div className={styles.mobileMenuActions}>
                {isLoggedIn ? (
                  <>
                    <Link
                      to="/mypage"
                      className={styles.mobileMyPageLink}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      마이페이지
                    </Link>
                    <button
                      className={styles.mobileLogoutBtn}
                      onClick={() => {
                        handleLogoutClick();
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      로그아웃
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    className={styles.mobileLoginLink}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    로그인
                  </Link>
                )}
              </div>
            </nav>
          </div>
        )
      }
    </header >
  );
};

export default Header;
