import React from 'react';
import styles from './ProgramsPage.module.css';

interface Program {
  id: number;
  name: string;
  icon: string;
  description: string;
  target: string;
  schedule: string;
  duration: string;
  capacity: string;
  tags: string[];
  isRecruiting: boolean;
}

const ProgramsPage: React.FC = () => {
  const programs: Program[] = [
    {
      id: 1,
      name: '동물 사육사 체험',
      icon: '/animals/lion_1.jpg',
      description: '사육사와 함께 동물들의 먹이를 준비하고, 동물들을 가까이서 관찰하며 사육사의 하루를 체험해보는 프로그램입니다.',
      target: '초등학생 (3-6학년)',
      schedule: '매주 토요일',
      duration: '2시간',
      capacity: '20명',
      tags: ['동물', '체험', '교육'],
      isRecruiting: true,
    },
    {
      id: 2,
      name: '식물 탐험가',
      icon: '/garden/Dracaena_1.webp',
      description: '식물 전문가와 함께 정원을 탐험하며 다양한 식물의 특징을 배우고, 나만의 작은 화분을 만들어보는 프로그램입니다.',
      target: '가족 (어린이 포함)',
      schedule: '매주 일요일',
      duration: '1.5시간',
      capacity: '15가족',
      tags: ['식물', '가족', '만들기'],
      isRecruiting: true,
    },
    {
      id: 3,
      name: '자연 관찰 교실',
      icon: '/animals/eagle_1.webp',
      description: '돋보기와 망원경을 이용해 공원의 자연을 세밀하게 관찰하고 기록하는 과학 탐구 프로그램입니다.',
      target: '초등학생 (전체)',
      schedule: '매주 수요일',
      duration: '2시간',
      capacity: '25명',
      tags: ['과학', '관찰', '교육'],
      isRecruiting: false,
    },
    {
      id: 4,
      name: '어린이 생태 캠프',
      icon: '/garden/lake_1.jpg',
      description: '1박 2일 동안 공원에서 캠핑하며 자연과 함께하는 특별한 경험을 하는 프로그램입니다.',
      target: '초등학생 (4-6학년)',
      schedule: '매월 마지막 주 금-토',
      duration: '1박 2일',
      capacity: '30명',
      tags: ['캠핑', '생태', '숙박'],
      isRecruiting: true,
    },
    {
      id: 5,
      name: '사진으로 담는 자연',
      icon: '/garden/close-up-pink-roses.jpg',
      description: '전문 사진작가와 함께 공원의 아름다운 순간을 사진으로 담는 법을 배우는 프로그램입니다.',
      target: '청소년 이상',
      schedule: '격주 토요일',
      duration: '3시간',
      capacity: '15명',
      tags: ['사진', '예술', '자연'],
      isRecruiting: false,
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>체험 프로그램</h1>
      <p className={styles.subtitle}>
        다양한 교육 프로그램에 참여하고 특별한 경험을 만들어보세요
      </p>

      <div className={styles.programsGrid}>
        {programs.map((program) => (
          <div key={program.id} className={styles.programCard}>
            <div className={styles.programHeader}>
              <div className={styles.programIcon}>
                <img src={program.icon} alt={program.name} />
              </div>
              <div className={styles.programInfo}>
                <div className={styles.programTitleRow}>
                  <h3 className={styles.programName}>{program.name}</h3>
                  <span
                    className={`${styles.statusBadge} ${
                      program.isRecruiting ? styles.recruiting : ''
                    }`}
                  >
                    {program.isRecruiting ? '모집중' : '마감'}
                  </span>
                </div>
                <p className={styles.programDescription}>{program.description}</p>
              </div>
            </div>

            <div className={styles.programDetails}>
              <div className={styles.detailItem}>
                <span className={styles.detailIcon}>👥</span>
                <span>{program.target}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailIcon}>📅</span>
                <span>{program.schedule}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailIcon}>⏱️</span>
                <span>{program.duration}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailIcon}>🎯</span>
                <span>{program.capacity}</span>
              </div>
            </div>

            <div className={styles.programTags}>
              {program.tags.map((tag, index) => (
                <span key={index} className={styles.tag}>
                  #{tag}
                </span>
              ))}
            </div>

            <button
              className={styles.applyButton}
              disabled={!program.isRecruiting}
            >
              {program.isRecruiting ? '신청하기' : '신청 마감'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramsPage;
