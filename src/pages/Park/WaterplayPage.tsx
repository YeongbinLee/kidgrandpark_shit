import React from 'react';
import AttractionCard from '../../components/AttractionCard/AttractionCard';
import type { AttractionCardData } from '../../components/AttractionCard/types';
import styles from './WaterplayPage.module.css';

const WaterplayPage: React.FC = () => {
  // 물놀이장 시설 데이터 (3개)
  const waterFacilities: AttractionCardData[] = [
    {
      id: 1,
      name: '음악분수',
      minHeight: 0,
      imageSrc: '/attration/musicwater_1.jpeg',
      tags: ['음악', '분수쇼', '감상'],
      location: '중앙 광장',
    },
    {
      id: 2,
      name: '무지개분수',
      minHeight: 0,
      imageSrc: '/attration/rainbowwater_1.jpg',
      tags: ['컬러풀', '분수', '포토존'],
      location: '서쪽 광장',
    },
    {
      id: 3,
      name: '물놀이장',
      minHeight: 0,
      imageSrc: '/attration/waterpark_1.jpg',
      tags: ['수영', '여름', '시원함'],
      location: '남쪽 구역',
    },
  ];

  const rules = [
    '물놀이장 이용 시 반드시 수영복을 착용해 주세요.',
    '안전을 위해 음식물 반입은 금지되어 있습니다.',
    '보호자 없는 7세 미만 어린이는 입장이 제한됩니다.',
    '유리병, 캔 등 위험한 물품은 반입할 수 없습니다.',
    '물놀이장 내에서는 뛰지 말아 주세요.',
    '안전 요원의 지시에 따라 주시기 바랍니다.',
  ];

  return (
    <div className={styles.container}>
      {/* 페이지 제목 */}
      <h1 className={styles.title}>물놀이장</h1>
      <p className={styles.subtitle}>
        시원한 물과 함께 여름을 즐겨보세요
      </p>

      {/* 운영 안내 */}
      <div className={styles.infoBox}>
        <h3 className={styles.infoTitle}>운영 안내</h3>
        <ul className={styles.infoList}>
          <li className={styles.infoItem}>
            <span className={styles.infoIcon}>📅</span>
            <span>운영 기간: 7월 1일 ~ 8월 31일 (여름 시즌)</span>
          </li>
          <li className={styles.infoItem}>
            <span className={styles.infoIcon}>🕐</span>
            <span>운영 시간: 오전 10시 ~ 오후 6시</span>
          </li>
          <li className={styles.infoItem}>
            <span className={styles.infoIcon}>💰</span>
            <span>입장료: 무료 (공원 입장료만 납부)</span>
          </li>
          <li className={styles.infoItem}>
            <span className={styles.infoIcon}>🌡️</span>
            <span>수온: 26-28도로 유지</span>
          </li>
        </ul>
      </div>

      {/* 물놀이 시설 카드 목록 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>주요 시설</h2>

        {/* 카드 그리드 (가로 3열) */}
        <div className={styles.cardGrid}>
          {waterFacilities.map((facility) => (
            <AttractionCard key={facility.id} item={facility} />
          ))}
        </div>
      </section>

      {/* 안전 수칙 */}
      <div className={styles.rulesSection}>
        <h2 className={styles.rulesTitle}>물놀이장 이용 수칙</h2>
        <div className={styles.rulesList}>
          {rules.map((rule, index) => (
            <div key={index} className={styles.ruleItem}>
              <span className={styles.ruleNumber}>{index + 1}</span>
              <p className={styles.ruleText}>{rule}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WaterplayPage;
