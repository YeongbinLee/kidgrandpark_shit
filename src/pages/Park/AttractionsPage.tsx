import React, { useState, useMemo } from 'react';
import AttractionCard from '../../components/AttractionCard/AttractionCard';
import type { AttractionCardData } from '../../components/AttractionCard/types';
import styles from './AttractionsPage.module.css';

type TabType = '전체 보기' | '130cm 이상' | '120cm 이상' | '110cm 이상' | '100cm 이상' | '90cm 이상';

const AttractionsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('전체 보기');

  // 최종 어트랙션 데이터 (키 제한 기준)
  const attractions: AttractionCardData[] = [
    {
      id: 1,
      name: '드롭타워',
      minHeight: 130,
      imageSrc: '/attration/Droptower_1.jpg',
      tags: ['스릴만점', '자유낙하', '고공체험'],
      location: '놀이동산 중앙',
    },
    {
      id: 2,
      name: '슈퍼점프',
      minHeight: 130,
      imageSrc: '/attration/viking_1.jpg',
      tags: ['바이킹', '흔들림', '스릴'],
      location: '서쪽 광장',
    },
    {
      id: 3,
      name: '패밀리코스터',
      minHeight: 130,
      imageSrc: '/attration/familycoster_1.webp',
      tags: ['롤러코스터', '빠른속도', '레일'],
      location: '동쪽 언덕',
    },
    {
      id: 4,
      name: '회전그네',
      minHeight: 125,
      imageSrc: '/attration/rotatingswing_1.jpg',
      tags: ['회전', '공중비행', '스릴'],
      location: '중앙 광장',
    },
    {
      id: 5,
      name: '범퍼카',
      minHeight: 120,
      imageSrc: '/attration/bumpercar_1.jpg',
      tags: ['충돌', '운전체험', '재미'],
      location: '실내놀이관',
    },
    {
      id: 6,
      name: '매직스윙',
      minHeight: 120,
      imageSrc: '/attration/magicswing_1.jpg',
      tags: ['스윙', '공중', '회전'],
      location: '서쪽 광장',
    },
    {
      id: 7,
      name: '슈퍼바이킹',
      minHeight: 110,
      imageSrc: '/attration/superviking_1.jpg',
      tags: ['바이킹', '스릴', '흔들림'],
      location: '중앙 광장',
    },
    {
      id: 8,
      name: '후룸라이드',
      minHeight: 110,
      imageSrc: '/attration/flumeride_1.avif',
      tags: ['물놀이', '급류', '시원함'],
      location: '북쪽 호수',
    },
    {
      id: 9,
      name: '회전목마',
      minHeight: 100,
      imageSrc: '/attration/marrygoaround_1.jpeg',
      tags: ['클래식', '가족', '여유'],
      location: '중앙 광장',
    },
    {
      id: 10,
      name: '스윙베어',
      minHeight: 100,
      imageSrc: '/attration/swingbear_1.jpg',
      tags: ['스윙', '공중', '재미'],
      location: '동쪽 구역',
    },
    {
      id: 11,
      name: '디노기차',
      minHeight: 100,
      imageSrc: '/attration/dinotrain_1.png',
      tags: ['기차', '공룡', '모험'],
      location: '남쪽 정원',
    },
    {
      id: 12,
      name: '개구리점프',
      minHeight: 90,
      maxHeight: 140,
      imageSrc: '/attration/frogjump_1.jpg',
      tags: ['점프', '상하', '키즈'],
      location: '키즈존',
    },
    {
      id: 13,
      name: '스윙거',
      minHeight: 90,
      imageSrc: '/attration/swinger_1.jpg',
      tags: ['스윙', '회전', '가족'],
      location: '키즈존',
    },
    {
      id: 14,
      name: '회전컵',
      minHeight: 90,
      imageSrc: '/attration/rotatingcup_1.jpg',
      tags: ['회전', '재미', '가족'],
      location: '키즈존',
    },
    {
      id: 15,
      name: '꼬마기차',
      minHeight: 90,
      maxHeight: 140,
      imageSrc: '/attration/tinytrain_1.jpg',
      tags: ['기차', '여유', '가족'],
      location: '키즈존',
    },
  ];

  // 탭 목록
  const tabs: TabType[] = ['전체 보기', '130cm 이상', '120cm 이상', '110cm 이상', '100cm 이상', '90cm 이상'];

  // 필터링 로직 - 정확한 키 범위별 분류
  const filteredAttractions = useMemo(() => {
    switch (activeTab) {
      case '전체 보기':
        return attractions;
      case '130cm 이상':
        // 130cm 이상만 표시
        return attractions.filter((attr) => attr.minHeight >= 130);
      case '120cm 이상':
        // 120cm 이상 130cm 미만만 표시
        return attractions.filter((attr) => attr.minHeight >= 120 && attr.minHeight < 130);
      case '110cm 이상':
        // 110cm 이상 120cm 미만만 표시
        return attractions.filter((attr) => attr.minHeight >= 110 && attr.minHeight < 120);
      case '100cm 이상':
        // 100cm 이상 110cm 미만만 표시
        return attractions.filter((attr) => attr.minHeight >= 100 && attr.minHeight < 110);
      case '90cm 이상':
        // 90cm 이상 100cm 미만만 표시
        return attractions.filter((attr) => attr.minHeight >= 90 && attr.minHeight < 100);
      default:
        return attractions;
    }
  }, [activeTab, attractions]);

  return (
    <div className={styles.container}>
      {/* 페이지 제목 */}
      <h1 className={styles.title}>어트랙션 안내</h1>
      <p className={styles.subtitle}>
        신나는 놀이기구와 함께 즐거운 시간을 보내세요
      </p>

      {/* 탭 메뉴 */}
      <div className={styles.tabContainer}>
        <div className={styles.tabMenu}>
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`${styles.tabButton} ${
                activeTab === tab ? styles.active : ''
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 어트랙션 카드 목록 */}
        <div className={styles.tabContent}>
          <div className={styles.cardGrid}>
            {filteredAttractions.map((attraction) => (
              <AttractionCard key={attraction.id} item={attraction} />
            ))}
          </div>

          {filteredAttractions.length === 0 && (
            <div className={styles.emptyState}>
              <p>해당 조건에 맞는 어트랙션이 없습니다.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AttractionsPage;
