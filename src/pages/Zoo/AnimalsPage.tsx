import React, { useState } from 'react';
import styles from './AnimalsPage.module.css';

interface Animal {
  id: number;
  name: string;
  emoji?: string;
  image?: string;
  exhibit: string;
  size: 'small' | 'medium' | 'large';
}

const AnimalsPage: React.FC = () => {
  const exhibits = [
    '전체',
    '원숭이 마을',
    '꼬마동물마을',
    '초식동물마을',
    '맹수마을',
    '바다동물원',
    '들새마을',
    '열대동물원',
  ];

  const [selectedExhibit, setSelectedExhibit] = useState('전체');

  const animals: Animal[] = [
    // 원숭이 마을
    { id: 1, name: '침팬지', image: '/animals/monkey_1.webp', exhibit: '원숭이 마을', size: 'large' },
    { id: 2, name: '오랑우탄', image: '/animals/monkey_2.webp', exhibit: '원숭이 마을', size: 'medium' },
    { id: 3, name: '원숭이', image: '/animals/monkey_3.jpg', exhibit: '원숭이 마을', size: 'small' },
    { id: 4, name: '고릴라', image: '/animals/monkey_4.jpg', exhibit: '원숭이 마을', size: 'large' },
    { id: 5, name: '긴팔원숭이', image: '/animals/monkey_5.jpg', exhibit: '원숭이 마을', size: 'medium' },
    { id: 6, name: '다람쥐원숭이', image: '/animals/monkey_6.webp', exhibit: '원숭이 마을', size: 'small' },
    { id: 7, name: '마카크', image: '/animals/monkey_7.webp', exhibit: '원숭이 마을', size: 'medium' },
    { id: 8, name: '비비원숭이', image: '/animals/monkey_8.webp', exhibit: '원숭이 마을', size: 'small' },

    // 꼬마동물마을
    { id: 9, name: '토끼', image: '/animals/rabbit_1.jpg', exhibit: '꼬마동물마을', size: 'small' },
    { id: 10, name: '햄스터', image: '/animals/hamster_1.jpg', exhibit: '꼬마동물마을', size: 'small' },
    { id: 11, name: '다람쥐', image: '/animals/squirrel_1.jpg', exhibit: '꼬마동물마을', size: 'small' },
    { id: 12, name: '고슴도치', emoji: '🦔', exhibit: '꼬마동물마을', size: 'small' },
    { id: 13, name: '염소', image: '/animals/goat_1.webp', exhibit: '꼬마동물마을', size: 'medium' },

    // 초식동물마을
    { id: 14, name: '기린', image: '/animals/giraffe_1.jpg', exhibit: '초식동물마을', size: 'large' },
    { id: 15, name: '코끼리', image: '/animals/elephant_1.webp', exhibit: '초식동물마을', size: 'large' },
    { id: 16, name: '얼룩말', image: '/animals/zebra_1.jpg', exhibit: '초식동물마을', size: 'medium' },
    { id: 17, name: '사슴', image: '/animals/dear_1.jpg', exhibit: '초식동물마을', size: 'medium' },
    { id: 18, name: '알파카', image: '/animals/alpaka_1.jpeg', exhibit: '초식동물마을', size: 'medium' },
    { id: 19, name: '말', image: '/animals/horse_1.jpg', exhibit: '초식동물마을', size: 'large' },
    { id: 20, name: '당나귀', image: '/animals/donkey_1.jpg', exhibit: '초식동물마을', size: 'medium' },
    { id: 21, name: '캥거루', image: '/animals/kangaroo_1.jpg', exhibit: '초식동물마을', size: 'large' },

    // 맹수마을
    { id: 22, name: '사자', image: '/animals/lion_1.jpg', exhibit: '맹수마을', size: 'large' },
    { id: 23, name: '호랑이', image: '/animals/tiger_1.jpeg', exhibit: '맹수마을', size: 'large' },
    { id: 24, name: '표범', image: '/animals/panther_1.jpg', exhibit: '맹수마을', size: 'medium' },
    { id: 25, name: '늑대', image: '/animals/wolf_1.jpeg', exhibit: '맹수마을', size: 'medium' },
    { id: 26, name: '곰', image: '/animals/bear_1.jpg', exhibit: '맹수마을', size: 'large' },
    { id: 27, name: '여우', image: '/animals/fox_1.jpeg', exhibit: '맹수마을', size: 'small' },

    // 바다동물원
    { id: 28, name: '펭귄', image: '/animals/penguin_1.jpg', exhibit: '바다동물원', size: 'medium' },
    { id: 29, name: '물개', image: '/animals/seadog_1.webp', exhibit: '바다동물원', size: 'medium' },
    { id: 30, name: '수달', image: '/animals/otter_1.jpg', exhibit: '바다동물원', size: 'small' },
    { id: 31, name: '돌고래', image: '/animals/dolphin_1.jpg', exhibit: '바다동물원', size: 'large' },
    { id: 32, name: '바다사자', image: '/animals/sealion_1.webp', exhibit: '바다동물원', size: 'medium' },
    { id: 33, name: '물고기', image: '/animals/fish_1.jpg', exhibit: '바다동물원', size: 'small' },

    // 들새마을
    { id: 34, name: '독수리', image: '/animals/eagle_1.webp', exhibit: '들새마을', size: 'medium' },
    { id: 35, name: '앵무새', emoji: '🦜', exhibit: '들새마을', size: 'small' },
    { id: 36, name: '플라밍고', image: '/animals/flamingo_1.webp', exhibit: '들새마을', size: 'medium' },
    { id: 37, name: '공작', image: '/animals/peacoak_1.jpg', exhibit: '들새마을', size: 'large' },
    { id: 38, name: '펠리컨', image: '/animals/pelican_1.webp', exhibit: '들새마을', size: 'medium' },
    { id: 39, name: '올빼미', image: '/animals/owl_1.jpeg', exhibit: '들새마을', size: 'small' },
    { id: 40, name: '까마귀', emoji: '🐦‍⬛', exhibit: '들새마을', size: 'small' },

    // 열대동물원
    { id: 41, name: '악어', emoji: '🐊', exhibit: '열대동물원', size: 'large' },
    { id: 42, name: '뱀', image: '/animals/snake_1.jpg', exhibit: '열대동물원', size: 'medium' },
    { id: 43, name: '도마뱀', emoji: '🦎', exhibit: '열대동물원', size: 'small' },
    { id: 44, name: '거북이', image: '/animals/landturtle_1.jpg', exhibit: '열대동물원', size: 'medium' },
    { id: 45, name: '카멜레온', image: '/animals/cameleon_1.jpg', exhibit: '열대동물원', size: 'small' },
    { id: 46, name: '이구아나', image: '/animals/eguana_1.jpg', exhibit: '열대동물원', size: 'medium' },
  ];

  const filteredAnimals =
    selectedExhibit === '전체'
      ? animals
      : animals.filter((animal) => animal.exhibit === selectedExhibit);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>동물 친구들</h1>
      <p className={styles.subtitle}>
        서울어린이대공원의 다양한 동물들을 만나보세요
      </p>

      {/* 전시관 필터 */}
      <div className={styles.filterContainer}>
        {exhibits.map((exhibit) => (
          <button
            key={exhibit}
            className={`${styles.filterButton} ${
              selectedExhibit === exhibit ? styles.active : ''
            }`}
            onClick={() => setSelectedExhibit(exhibit)}
          >
            {exhibit}
          </button>
        ))}
      </div>

      {/* 불규칙 그리드 */}
      <div className={styles.grid}>
        {filteredAnimals.map((animal) => (
          <div
            key={animal.id}
            className={`${styles.animalCard} ${styles[animal.size]}`}
          >
            <div className={styles.animalImage}>
              {animal.image ? (
                <img src={animal.image} alt={animal.name} />
              ) : (
                <span className={styles.emoji}>{animal.emoji}</span>
              )}
            </div>
            <div className={styles.animalOverlay}>
              <span className={styles.animalName}>{animal.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimalsPage;
