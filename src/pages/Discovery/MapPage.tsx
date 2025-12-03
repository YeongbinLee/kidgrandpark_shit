import React, { useState } from 'react';
import styles from './MapPage.module.css';

const MapPage: React.FC = () => {
  const [filters, setFilters] = useState({
    zoo: true,
    garden: true,
    park: true,
  });

  const filterItems = [
    { id: 'zoo', label: '동물원', icon: '🦁' },
    { id: 'garden', label: '식물원', icon: '🌿' },
    { id: 'park', label: '놀이공원', icon: '🎡' },
  ];

  const toggleFilter = (id: string) => {
    setFilters((prev) => ({
      ...prev,
      [id]: !prev[id as keyof typeof prev],
    }));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>대공원 전체 지도</h1>
      <p className={styles.subtitle}>
        서울어린이대공원의 모든 시설을 한눈에 확인하세요
      </p>

      <div className={styles.mapContainer}>
        {/* 좌측: 필터 섹션 */}
        <div className={styles.filterSection}>
          <h2 className={styles.filterTitle}>필터 / 범례</h2>
          <div className={styles.filterList}>
            {filterItems.map((item) => (
              <div
                key={item.id}
                className={styles.filterItem}
                onClick={() => toggleFilter(item.id)}
              >
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={filters[item.id as keyof typeof filters]}
                  onChange={() => toggleFilter(item.id)}
                />
                <span className={styles.filterIcon}>{item.icon}</span>
                <label className={styles.filterLabel}>{item.label}</label>
              </div>
            ))}
          </div>
        </div>

        {/* 우측: 지도 섹션 */}
        <div className={styles.mapSection}>
          <div className={styles.mapPlaceholder}>
            <div className={styles.mapIcon}>🗺️</div>
            <p className={styles.mapText}>서울어린이대공원 전체 지도</p>
            <p className={styles.mapSubtext}>
              {filters.zoo && '동물원 '}
              {filters.garden && '식물원 '}
              {filters.park && '놀이공원 '}
              표시중
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
