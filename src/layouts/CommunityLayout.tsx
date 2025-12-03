import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import styles from './SectionLayout.module.css';

const CommunityLayout: React.FC = () => {
  const navItems = [
    { path: '/community/news', label: '대공원 소식' },
    { path: '/community/reviews', label: '방문 후기' },
    { path: '/community/support', label: '고객센터' },
    { path: '/community/calendar', label: '이벤트 일정' },
  ];

  return (
    <div className={styles.container}>
      {/* 왼쪽 로컬 네비게이션 */}
      <aside className={styles.sidebar}>
        <h2 className={styles.sidebarTitle}>커뮤니티</h2>
        <nav>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.path} className={styles.navItem}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.active : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* 오른쪽 콘텐츠 영역 */}
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};

export default CommunityLayout;
