import React from 'react';
import styles from './ZonesPage.module.css';

interface Zone {
  id: number;
  name: string;
  icon?: string;
  image?: string;
  description: string;
  animals: string[];
}

const ZonesPage: React.FC = () => {
  const zones: Zone[] = [
    {
      id: 1,
      name: '맹수관',
      image: '/animals/lion_1.jpg',
      description: '사자, 호랑이 등 대형 육식동물들을 만날 수 있는 공간입니다.',
      animals: ['사자', '호랑이', '표범', '재규어'],
    },
    {
      id: 2,
      name: '초식동물관',
      image: '/animals/giraffe_1.jpg',
      description: '기린, 얼룩말, 코끼리 등 온순한 초식동물들이 있는 구역입니다.',
      animals: ['기린', '얼룩말', '코끼리', '사슴'],
    },
    {
      id: 3,
      name: '조류관',
      image: '/animals/eagle_1.webp',
      description: '다양한 새들의 아름다운 모습을 관찰할 수 있는 공간입니다.',
      animals: ['독수리', '앵무새', '플라밍고', '공작'],
    },
    {
      id: 4,
      name: '영장류관',
      image: '/animals/monkey_1.webp',
      description: '침팬지, 원숭이 등 영장류 동물들을 만날 수 있습니다.',
      animals: ['침팬지', '오랑우탄', '원숭이', '고릴라'],
    },
    {
      id: 5,
      name: '수생동물관',
      image: '/animals/penguin_1.jpg',
      description: '펭귄, 물개 등 물속 생활을 하는 동물들이 있는 구역입니다.',
      animals: ['펭귄', '물개', '바다사자', '수달'],
    },
    {
      id: 6,
      name: '파충류관',
      image: '/animals/snake_1.jpg',
      description: '뱀, 도마뱀, 거북이 등 파충류를 관찰할 수 있는 실내 공간입니다.',
      animals: ['뱀', '도마뱀', '거북이', '악어'],
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>관람 구역</h1>
      <p className={styles.subtitle}>
        동물원의 다양한 구역을 둘러보고 동물 친구들을 만나보세요
      </p>

      <div className={styles.content}>
        <div className={styles.mapSection}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.526842826948!2d127.07868337639893!3d37.54811202465076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca5b0131b293f%3A0xc7e84f258ff11efe!2z7ISc7Jq47Ja066as7J2067CC6rOV7JuQ!5e0!3m2!1sko!2skr!4v1732631781234!5m2!1sko!2skr"
            className={styles.mapFrame}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="서울어린이대공원 지도"
          />
        </div>

        <div className={styles.zonesSection}>
          {zones.map((zone) => (
            <div key={zone.id} className={styles.zoneCard}>
              {zone.image && (
                <div className={styles.zoneImageWrapper}>
                  <img src={zone.image} alt={zone.name} className={styles.zoneImage} />
                </div>
              )}
              <div className={styles.zoneContent}>
                <div className={styles.zoneHeader}>
                  {zone.icon && <span className={styles.zoneIcon}>{zone.icon}</span>}
                  <h3 className={styles.zoneName}>{zone.name}</h3>
                </div>
                <p className={styles.zoneDescription}>{zone.description}</p>
                <div className={styles.animalList}>
                  {zone.animals.map((animal, index) => (
                    <span key={index} className={styles.animalTag}>
                      {animal}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ZonesPage;
