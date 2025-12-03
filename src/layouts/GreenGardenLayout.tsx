import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import styles from './SectionLayout.module.css';

const GreenGardenLayout: React.FC = () => {
  const navItems = [
    { path: '/garden/indoor', label: '실내 정원' },
    { path: '/garden/pond', label: '연못 안내' },
    { path: '/garden/zones', label: '관람 구역' },
  ];

  return (
    <div className={styles.container}>
      {/* 왼쪽 로컬 네비게이션 */}
      <aside className={styles.sidebar}>
        <h2 className={styles.sidebarTitle}>그린 가든</h2>
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

export default GreenGardenLayout;
