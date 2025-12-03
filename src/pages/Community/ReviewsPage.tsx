import React, { useState, useMemo } from 'react';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import type { ReviewData } from '../../components/ReviewCard/types';
import Pagination from '../../components/Pagination/Pagination';
import styles from './ReviewsPage.module.css';

// 전체 36개의 더미 리뷰 데이터 (3페이지 분량)
const generateReviews = (): ReviewData[] => {
  const authors = [
    'kimminsu', 'leejihye', 'parkseojun', 'choiyuna', 'jeongjiwon',
    'kangdahyun', 'yoonseungho', 'leesubin', 'hanminho', 'kimjiwoo',
    'parkjunhee', 'choisohee', 'jeonghyunwoo', 'kangminseok', 'leehaneul',
    'yoonjisoo', 'kimdongmin', 'parkjiho', 'leeyujin', 'hanseoyeon'
  ];

  const summaries = [
    '아이들과 함께 정말 즐거운 하루를 보냈어요!',
    '동물들이 생각보다 다양하고 잘 관리되어 있어요.',
    '가족과 나들이하기 딱 좋은 장소입니다.',
    '놀이기구가 재미있고 안전해서 좋았어요.',
    '정원이 정말 아름답고 사진 찍기 좋아요.',
    '주말에 방문했는데 사람이 많았지만 재밌었어요.',
    '체험 프로그램이 알차고 교육적이었습니다.',
    '연인과 데이트하기 좋은 분위기예요.',
    '아이 생일 기념으로 왔는데 최고의 선택이었어요!',
    '깨끗하고 시설이 잘 되어 있어서 만족스러워요.',
    '입장료 대비 정말 알차게 즐길 수 있어요.',
    '동물원과 놀이공원이 함께 있어 좋습니다.',
    '가을 단풍이 정말 아름다웠어요.',
    '물놀이장이 무료라서 여름에 최고예요!',
    '사육사 체험이 정말 인상깊었습니다.',
    '장미원이 너무 예뻐서 사진 잔뜩 찍었어요.',
    '대관람차에서 보는 전망이 환상적이에요.',
    '아이들이 정말 좋아해서 또 올 거예요.',
    '교육적이면서도 재미있는 공간이에요.',
    '주차장이 넓어서 편리했습니다.',
    '피크닉하기 정말 좋은 잔디밭이 많아요.',
    '야외 음악회도 하고 문화 행사가 다양해요.',
    '반려동물과 함께 산책하기 좋아요.',
    '어른들도 충분히 즐길 수 있는 곳이에요.',
    '실내 체험관도 있어서 비 오는 날도 좋아요.',
    '카페와 식당 시설도 깔끔해요.',
    '안전 관리가 철저해서 안심하고 놀 수 있어요.',
    '계절마다 다른 매력이 있는 것 같아요.',
    '어린이뿐 아니라 온 가족이 즐기기 좋아요.',
    '접근성도 좋고 교통도 편리해요.',
    '휴식 공간이 많아서 여유롭게 즐겼어요.',
    '다양한 동물들을 가까이서 볼 수 있어요.',
    '직원분들이 친절하고 전문적이에요.',
    '추억 만들기에 완벽한 장소입니다.',
    '스트레스 해소하기 정말 좋았어요.',
    '서울에서 이런 곳이 있어 감사해요!'
  ];

  // 리뷰 이미지 배열 (실제 public 폴더의 이미지들)
  const reviewImages = [
    '/review/1.png',
    '/review/2.png',
    '/review/3.png',
    '/review/4.png',
    '/review/5.png',
    '/review/6.png',
    '/garden/lake_1.jpg',
    '/garden/lake_2.jpg',
    '/animals/penguin_1.jpg',
    '/animals/bear_1.jpg',
    '/animals/otter_1.jpg',
    '/animals/squirrel_1.jpg'
  ];

  return Array.from({ length: 36 }, (_, i) => ({
    id: i + 1,
    authorId: authors[i % authors.length],
    date: `2025.${11 - Math.floor(i / 12)}.${String(28 - (i % 28)).padStart(2, '0')}`,
    rating: Math.floor(Math.random() * 2) + 4, // 4-5점 사이 랜덤
    summary: summaries[i],
    imageSrc: reviewImages[i % reviewImages.length]
  }));
};

const ReviewsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 12; // 페이지당 12개
  const allReviews = useMemo(() => generateReviews(), []);

  // 총 페이지 수 계산
  const totalPages = Math.ceil(allReviews.length / reviewsPerPage);

  // 현재 페이지의 리뷰만 필터링
  const currentReviews = useMemo(() => {
    const startIndex = (currentPage - 1) * reviewsPerPage;
    const endIndex = startIndex + reviewsPerPage;
    return allReviews.slice(startIndex, endIndex);
  }, [currentPage, allReviews]);

  // 평균 평점 계산
  const averageRating = useMemo(() => {
    const sum = allReviews.reduce((acc, review) => acc + review.rating, 0);
    return (sum / allReviews.length).toFixed(1);
  }, [allReviews]);

  // 페이지 변경 핸들러
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // 페이지 상단으로 스크롤
  };

  return (
    <div className={styles.container}>
      {/* 페이지 제목 */}
      <h1 className={styles.title}>방문 후기</h1>
      <p className={styles.subtitle}>
        서울어린이대공원을 다녀간 방문자들의 생생한 후기를 확인하세요
      </p>

      {/* 상단 요약 정보 */}
      <div className={styles.statsContainer}>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{averageRating}</div>
          <div className={styles.statLabel}>평균 평점</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{allReviews.length}</div>
          <div className={styles.statLabel}>전체 후기</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>98%</div>
          <div className={styles.statLabel}>재방문 의향</div>
        </div>
      </div>

      {/* 리뷰 카드 그리드 (가로 3개, 세로 4개 = 12개) */}
      <div className={styles.reviewGrid}>
        {currentReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {/* 페이지네이션 */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ReviewsPage;
