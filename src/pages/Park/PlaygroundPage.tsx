import React from 'react';
import AttractionCard from '../../components/AttractionCard/AttractionCard';
import type { AttractionCardData } from '../../components/AttractionCard/types';
import styles from './PlaygroundPage.module.css';

const PlaygroundPage: React.FC = () => {
  // 놀이터 데이터 (3개)
  const playgrounds: AttractionCardData[] = [
    {
      id: 1,
      name: '맘껏놀이터',
      minHeight: 0,
      imageSrc: '/attration/momcutplayground_!.jpg',
      tags: ['자유놀이', '모험', '창의력'],
      location: '동쪽 구역',
    },
    {
      id: 2,
      name: '꿈틀꿈틀놀이터',
      minHeight: 0,
      imageSrc: '/attration/dreamtleplayground_1.jpg',
      tags: ['신체활동', '감각발달', '재미'],
      location: '중앙 광장',
    },
    {
      id: 3,
      name: '실내놀이터',
      minHeight: 0,
      imageSrc: '/attration/insideplayground_1.jpg',
      tags: ['실내', '전천후', '안전'],
      location: '실내놀이관',
    },
  ];

  return (
    <div className={styles.container}>
      {/* 페이지 제목 */}
      <h1 className={styles.title}>어린이 놀이터</h1>
      <p className={styles.subtitle}>
        안전하고 즐거운 놀이 공간에서 마음껏 뛰어노세요
      </p>

      {/* 놀이터 카드 목록 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>주요 놀이터</h2>

        {/* 카드 그리드 (가로 3열) */}
        <div className={styles.cardGrid}>
          {playgrounds.map((playground) => (
            <AttractionCard key={playground.id} item={playground} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PlaygroundPage;
