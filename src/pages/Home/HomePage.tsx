import React from 'react';
import VisualSection from '../../components/VisualSection/VisualSection';
import CourseSection from '../../components/CourseSection/CourseSection';
import StampSection from '../../components/StampSection/StampSection';
import ReviewSection from '../../components/ReviewSection/ReviewSection';
import NoticeEventSection from '../../components/NoticeEventSection/NoticeEventSection';

const HomePage: React.FC = () => {
  return (
    <div className="home">
      {/* 비주얼 섹션 - 풀스크린 비디오 배경 */}
      <VisualSection />

      {/* 추천 코스 섹션 - 4가지 코스 카드 */}
      <CourseSection />

      {/* 온라인 스탬프 섹션 */}
      <StampSection />

      {/* 방문자 후기 섹션 - 캐러셀 */}
      <ReviewSection />

      {/* 공지 및 이벤트 섹션 */}
      <NoticeEventSection />
    </div>
  );
};

export default HomePage;
