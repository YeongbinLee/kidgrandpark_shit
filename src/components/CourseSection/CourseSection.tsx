import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CourseSection.module.css';

interface Course {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  hash: string;
}

const CourseSection: React.FC = () => {
  const courses: Course[] = [
    {
      id: 1,
      title: '가족 코스',
      description: '온 가족이 함께 즐기는 힐링 코스',
      imageUrl: '/course/family.png',
      tags: ['동물원', '놀이터', '카페'],
      hash: 'family',
    },
    {
      id: 2,
      title: '연인 코스',
      description: '로맨틱한 데이트를 위한 특별한 코스',
      imageUrl: '/course/couple.png',
      tags: ['정원', '포토존', '레스토랑'],
      hash: 'couple',
    },
    {
      id: 3,
      title: '웰니스 코스',
      description: '자연과 함께하는 힐링 산책',
      imageUrl: '/course/wellness.png',
      tags: ['산책로', '숲길', '휴게소'],
      hash: 'wellness',
    },
    {
      id: 4,
      title: '물고기 코스',
      description: '수중 생물을 만나는 신비한 여행',
      imageUrl: '/course/fish.png',
      tags: ['수족관', '물놀이', '체험존'],
      hash: 'fish',
    },
  ];

  return (
    <section className={styles.courseSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>추천 코스</h2>
          <p className={styles.subtitle}>
            어린이대공원에서 즐기는 다양한 테마 코스를 만나보세요
          </p>
        </div>

        <div className={styles.courseGrid}>
          {courses.map((course) => (
            <Link
              key={course.id}
              to={`/discovery/courses#${course.hash}`}
              className={styles.courseCard}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={course.imageUrl}
                  alt={course.title}
                  className={styles.image}
                />
                <div className={styles.imageOverlay}>
                  <button className={styles.viewBtn}>자세히 보기</button>
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.courseTitle}>{course.title}</h3>
                <p className={styles.courseDescription}>{course.description}</p>
                <div className={styles.tags}>
                  {course.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
