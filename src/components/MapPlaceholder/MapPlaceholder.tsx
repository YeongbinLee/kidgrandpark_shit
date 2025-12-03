import React from 'react';
import styles from './MapPlaceholder.module.css';

interface MapPlaceholderProps {
  title: string;
  mapUrl?: string;
}

const MapPlaceholder: React.FC<MapPlaceholderProps> = ({ title, mapUrl }) => {
  return (
    <div className={styles.mapContainer}>
      <h2 className={styles.mapTitle}>{title}</h2>
      {mapUrl ? (
        <div className={styles.mapIframeWrapper}>
          <iframe
            src={mapUrl}
            className={styles.mapIframe}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={title}
          />
        </div>
      ) : (
        <div className={styles.mapPlaceholder}>
          <div className={styles.mapIcon}>🗺️</div>
          <p className={styles.mapSubtitle}>지도 영역</p>
        </div>
      )}
    </div>
  );
};

export default MapPlaceholder;
