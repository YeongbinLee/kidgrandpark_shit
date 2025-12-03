import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './CoursesPage.module.css';

interface Stop {
  name: string;
  description: string;
  emoji: string;
}

interface Course {
  id: number;
  name: string;
  imageSrc: string;
  target: string;
  description: string;
  duration: string;
  distance: string;
  difficulty: string;
  stops: Stop[];
  hash: string;
}

const CoursesPage: React.FC = () => {
  const location = useLocation();

  const courses: Course[] = [
    {
      id: 1,
      name: '가족 코스',
      imageSrc: '/course/family.png',
      target: '온 가족',
      description: '온 가족이 함께 즐기는 테마파크와 동물원 중심 코스입니다. 어린이부터 어른까지 모두가 즐길 수 있습니다.',
      duration: '3-4시간',
      distance: '2.8km',
      difficulty: '보통',
      hash: 'family',
      stops: [
        { name: '어린이 놀이터', description: '안전한 놀이 시설', emoji: '🎠' },
        { name: '동물원', description: '다양한 동물 관람', emoji: '🦁' },
        { name: '어트랙션', description: '테마파크 즐기기', emoji: '🎡' },
        { name: '정원', description: '가족 사진 촬영', emoji: '🌸' },
        { name: '레스토랑', description: '식사 및 휴식', emoji: '🍽️' },
      ],
    },
    {
      id: 2,
      name: '연인 코스',
      imageSrc: '/course/couple.png',
      target: '커플/연인',
      description: '아름다운 연못과 로맨틱한 정원을 따라 걷는 데이트 코스입니다. 포토존이 많아 추억을 남기기 좋습니다.',
      duration: '2.5시간',
      distance: '2.2km',
      difficulty: '쉬움',
      hash: 'couple',
      stops: [
        { name: '장미원', description: '향기로운 장미 감상', emoji: '🌹' },
        { name: '연못', description: '평화로운 수변 풍경', emoji: '🪷' },
        { name: '한국 정원', description: '전통 정원의 아름다움', emoji: '🏯' },
        { name: '카페', description: '여유로운 티타임', emoji: '☕' },
      ],
    },
    {
      id: 3,
      name: '웰니스 코스',
      imageSrc: '/course/wellness.png',
      target: '성인',
      description: '힐링을 위한 식물원과 산책로 위주의 건강 코스입니다. 자연 속에서 마음의 평화를 찾을 수 있습니다.',
      duration: '2시간',
      distance: '3.5km',
      difficulty: '쉬움',
      hash: 'wellness',
      stops: [
        { name: '수목원', description: '숲길 산책', emoji: '🌳' },
        { name: '허브원', description: '허브 향기 체험', emoji: '🌿' },
        { name: '명상 공간', description: '자연 속 명상', emoji: '🧘' },
        { name: '실내정원', description: '식물 관람', emoji: '🪴' },
      ],
    },
    {
      id: 4,
      name: '물고기 코스',
      imageSrc: '/course/fish.png',
      target: '어린이/가족',
      description: '수족관과 연못 생물을 중심으로 탐험하는 교육 코스입니다. 수생생물을 가까이서 관찰할 수 있습니다.',
      duration: '2.5시간',
      distance: '1.8km',
      difficulty: '쉬움',
      hash: 'fish',
      stops: [
        { name: '연못', description: '물고기와 오리 구경', emoji: '🦆' },
        { name: '수생식물원', description: '연꽃과 수련 관찰', emoji: '🪷' },
        { name: '분수', description: '음악분수 감상', emoji: '⛲' },
        { name: '물놀이장', description: '여름 물놀이', emoji: '💦' },
      ],
    },
  ];

  // URL 해시에 따라 해당 코스로 스크롤
  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.replace('#', '');
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>추천 코스</h1>
      <p className={styles.subtitle}>
        방문 목적과 대상에 맞는 최적의 관람 코스를 소개합니다
      </p>

      <div className={styles.coursesGrid}>
        {courses.map((course) => (
          <div key={course.id} id={course.hash} className={styles.courseCard}>
            <div className={styles.courseHeader}>
              <div className={styles.courseImageWrapper}>
                <img
                  src={course.imageSrc}
                  alt={course.name}
                  className={styles.courseImage}
                />
              </div>
              <div className={styles.courseHeaderInfo}>
                <div className={styles.courseTitleRow}>
                  <h3 className={styles.courseName}>{course.name}</h3>
                  <span className={styles.targetBadge}>{course.target}</span>
                </div>
                <p className={styles.courseDescription}>{course.description}</p>
              </div>
            </div>

            <div className={styles.courseBody}>
              <div className={styles.courseDetails}>
                <div className={styles.detailItem}>
                  <div className={styles.detailLabel}>소요 시간</div>
                  <div className={styles.detailValue}>{course.duration}</div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailLabel}>거리</div>
                  <div className={styles.detailValue}>{course.distance}</div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailLabel}>난이도</div>
                  <div className={styles.detailValue}>{course.difficulty}</div>
                </div>
              </div>

              <div className={styles.stopsSection}>
                <h4 className={styles.stopsTitle}>
                  <span className={styles.stopsIcon}>📍</span>
                  주요 경유지
                </h4>
                <div className={styles.stopsList}>
                  {course.stops.map((stop, index) => (
                    <div key={index} className={styles.stopItem}>
                      <div className={styles.stopNumber}>{index + 1}</div>
                      <div className={styles.stopInfo}>
                        <div className={styles.stopName}>{stop.name}</div>
                        <div className={styles.stopDescription}>
                          {stop.description}
                        </div>
                      </div>
                      <div className={styles.stopEmoji}>{stop.emoji}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
