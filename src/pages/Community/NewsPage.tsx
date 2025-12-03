import React, { useState } from 'react';
import styles from './NewsPage.module.css';

const NewsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const newsData = [
    {
      id: 1,
      title: '2024년 봄 꽃축제 개최 안내',
      date: '2024.03.15',
      views: 1234,
    },
    {
      id: 2,
      title: '어린이날 특별 프로그램 운영',
      date: '2024.04.28',
      views: 2456,
    },
    {
      id: 3,
      title: '여름 물놀이장 운영 시작 공지',
      date: '2024.06.01',
      views: 3421,
    },
    {
      id: 4,
      title: '동물원 신규 동물 입소 안내',
      date: '2024.07.10',
      views: 1876,
    },
    {
      id: 5,
      title: '추석 연휴 운영 시간 변경 안내',
      date: '2024.09.12',
      views: 987,
    },
  ];

  const totalPages = 3;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>대공원 소식</h1>
      <p className={styles.subtitle}>
        서울어린이대공원의 최신 소식을 확인하세요
      </p>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead className={styles.tableHead}>
            <tr>
              <th style={{ width: '60%' }}>제목</th>
              <th style={{ width: '20%' }}>작성일</th>
              <th style={{ width: '20%' }}>조회수</th>
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {newsData.map((news) => (
              <tr key={news.id}>
                <td className={styles.titleCell}>{news.title}</td>
                <td className={styles.dateCell}>{news.date}</td>
                <td className={styles.viewsCell}>{news.views.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.pagination}>
        <button
          className={styles.pageButton}
          onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
        >
          &lt;
        </button>

        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className={`${styles.pageButton} ${
              currentPage === page ? styles.active : ''
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}

        <button
          className={styles.pageButton}
          onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default NewsPage;
