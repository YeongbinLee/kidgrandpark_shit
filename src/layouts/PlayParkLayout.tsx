import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import styles from './SectionLayout.module.css';

const PlayParkLayout: React.FC = () => {
  const navItems = [
    { path: '/park/attractions', label: '어트랙션 안내' },
    { path: '/park/playground', label: '어린이 놀이터' },
    { path: '/park/waterplay', label: '물놀이장' },
  ];

  return (
    <div className={styles.container}>
      {/* 왼쪽 로컬 네비게이션 */}
      <aside className={styles.sidebar}>
        <h2 className={styles.sidebarTitle}>플레이 파크</h2>
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

export default PlayParkLayout;
