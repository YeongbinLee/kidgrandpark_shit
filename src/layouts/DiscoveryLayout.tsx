import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import styles from './SectionLayout.module.css';

const DiscoveryLayout: React.FC = () => {
  const navItems = [
    { path: '/discovery/map', label: '전체 지도' },
    { path: '/discovery/programs', label: '체험 프로그램' },
    { path: '/discovery/courses', label: '추천 코스' },
  ];

  return (
    <div className={styles.container}>
      {/* 왼쪽 로컬 네비게이션 */}
      <aside className={styles.sidebar}>
        <h2 className={styles.sidebarTitle}>디스커버리</h2>
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

export default DiscoveryLayout;
