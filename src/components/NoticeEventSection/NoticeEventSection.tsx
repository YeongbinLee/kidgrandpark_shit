import React, { useState } from 'react';
import styles from './NoticeEventSection.module.css';

interface Notice {
  id: number;
  title: string;
  date: string;
  category: string;
}

interface Event {
  id: number;
  title: string;
  period: string;
  status: '진행중' | '예정' | '종료';
}

const NoticeEventSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'notice' | 'event'>('notice');

  const notices: Notice[] = [
    {
      id: 1,
      title: '2024년 설 연휴 운영 안내',
      date: '2024.01.25',
      category: '공지',
    },
    {
      id: 2,
      title: '동물원 시설 보수 공사 안내',
      date: '2024.01.20',
      category: '안내',
    },
    {
      id: 3,
      title: '어린이대공원 봄 축제 개최',
      date: '2024.01.15',
      category: '행사',
    },
  ];

  const events: Event[] = [
    {
      id: 1,
      title: '겨울 동물 만남의 시간',
      period: '2024.01.01 - 2024.02.29',
      status: '진행중',
    },
    {
      id: 2,
      title: '어린이 체험 프로그램',
      period: '2024.03.01 - 2024.03.31',
      status: '예정',
    },
    {
      id: 3,
      title: '연말 특별 이벤트',
      period: '2023.12.01 - 2023.12.31',
      status: '종료',
    },
  ];

  return (
    <section className={styles.noticeEventSection}>
      <div className={styles.container}>
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${
              activeTab === 'notice' ? styles.activeTab : ''
            }`}
            onClick={() => setActiveTab('notice')}
          >
            공지사항
          </button>
          <button
            className={`${styles.tab} ${
              activeTab === 'event' ? styles.activeTab : ''
            }`}
            onClick={() => setActiveTab('event')}
          >
            이벤트
          </button>
        </div>

        <div className={styles.content}>
          {activeTab === 'notice' ? (
            <div className={styles.noticeList}>
              {notices.map((notice) => (
                <div key={notice.id} className={styles.listItem}>
                  <span className={styles.category}>{notice.category}</span>
                  <h3 className={styles.itemTitle}>{notice.title}</h3>
                  <span className={styles.date}>{notice.date}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.eventList}>
              {events.map((event) => (
                <div key={event.id} className={styles.listItem}>
                  <span
                    className={`${styles.status} ${
                      styles[`status${event.status}`]
                    }`}
                  >
                    {event.status}
                  </span>
                  <h3 className={styles.itemTitle}>{event.title}</h3>
                  <span className={styles.period}>{event.period}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={styles.moreBtn}>
          <button className={styles.btn}>
            더보기
            <svg
              width="20"
              height="20"
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
        </div>
      </div>
    </section>
  );
};

export default NoticeEventSection;
