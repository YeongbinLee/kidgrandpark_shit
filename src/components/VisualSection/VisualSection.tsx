import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './VisualSection.module.css';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  videoUrl: string; // 실제 프로젝트에서는 비디오 URL을 사용
  imageUrl: string; // 대체 이미지 (비디오가 없을 경우)
  link: string;
}

const VisualSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const slides: Slide[] = [
    {
      id: 1,
      title: '어반 쥬',
      subtitle: '도심 속 야생의 만남',
      description: '다양한 동물들과 함께하는 특별한 시간',
      videoUrl: '/tiger.mp4',
      imageUrl: 'https://via.placeholder.com/1920x1080/3A45AD/ffffff?text=Urban+Zoo',
      link: '/zoo/animals',
    },
    {
      id: 2,
      title: '어반 가든',
      subtitle: '자연과 하나되는 공간',
      description: '계절마다 변하는 아름다운 식물원',
      videoUrl: '/garden.mp4',
      imageUrl: 'https://via.placeholder.com/1920x1080/4CAF50/ffffff?text=Urban+Garden',
      link: '/garden/indoor',
    },
    {
      id: 3,
      title: '플레이그라운드',
      subtitle: '신나는 모험의 시작',
      description: '온 가족이 함께 즐기는 어트랙션',
      videoUrl: '/roller.mp4',
      imageUrl: 'https://via.placeholder.com/1920x1080/FF5722/ffffff?text=Playground',
      link: '/park/attractions',
    },
  ];

  // 비디오 재생 제어
  useEffect(() => {
    const currentVideo = videoRefs.current[currentSlide];
    if (currentVideo) {
      currentVideo.play().catch((error) => {
        console.log('비디오 자동 재생 실패:', error);
      });
    }

    // 다른 비디오들은 일시정지
    videoRefs.current.forEach((video, index) => {
      if (video && index !== currentSlide) {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [currentSlide]);

  // 자동 슬라이드
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5초마다 전환

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className={styles.visualSection}>
      {/* 슬라이드 컨테이너 */}
      <div className={styles.slideContainer}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''
              }`}
          >
            {/* 배경 이미지/비디오 */}
            <div className={styles.background}>
              {slide.videoUrl ? (
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  key={slide.id}
                  className={styles.video}
                  muted
                  loop
                  playsInline
                  preload="auto"
                  onLoadedData={(e) => {
                    if (index === currentSlide) {
                      (e.target as HTMLVideoElement).play().catch(console.log);
                    }
                  }}
                >
                  <source src={slide.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  className={styles.image}
                />
              )}
              {/* 오버레이 */}
              <div className={styles.overlay}></div>
            </div>

            {/* 슬라이드 콘텐츠 */}
            <div className={styles.content}>
              <div className={styles.textBox}>
                <p className={styles.subtitle}>{slide.subtitle}</p>
                <h1 className={styles.title}>{slide.title}</h1>
                <p className={styles.description}>{slide.description}</p>
                <button
                  className={styles.exploreBtn}
                  onClick={() => navigate(slide.link)}
                >
                  자세히 보기
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 네비게이션 화살표 */}
      <button
        className={`${styles.navBtn} ${styles.prevBtn}`}
        onClick={goToPrevSlide}
        aria-label="이전 슬라이드"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        className={`${styles.navBtn} ${styles.nextBtn}`}
        onClick={goToNextSlide}
        aria-label="다음 슬라이드"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* 페이지네이션 인디케이터 */}
      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentSlide ? styles.activeIndicator : ''
              }`}
            onClick={() => goToSlide(index)}
            aria-label={`슬라이드 ${index + 1}`}
          />
        ))}
      </div>

      {/* 스크롤 다운 인디케이터 */}
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll Down</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.scrollIcon}
        >
          <path
            d="M12 5V19M12 19L19 12M12 19L5 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default VisualSection;
