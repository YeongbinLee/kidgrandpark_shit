import React, { useState } from 'react';
import styles from './NewsPage.module.css';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: '공지' | '이벤트' | '안내';
}

const NewsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 10;

  const newsData: NewsItem[] = [
    { id: 50, title: '12월 겨울방학 특별 프로그램 운영 안내', date: '2025. 11. 24', category: '공지' },
    { id: 49, title: '겨울철 운영시간 단축 안내', date: '2025. 10. 27', category: '공지' },
    { id: 48, title: '동물원 아기 코끼리 탄생 소식', date: '2025. 10. 02', category: '공지' },
    { id: 47, title: '서울어린이대공원 홈페이지가 새롭게 단장했어요!', date: '2025. 09. 15', category: '공지' },
    { id: 46, title: '야간 개장 연장! 11월까지 밤 9시까지 운영합니다', date: '2025. 07. 30', category: '공지' },
    { id: 45, title: '겨울 눈썰매장 12월 1일 개장', date: '2025. 11. 15', category: '안내' },
    { id: 44, title: '크리스마스 산타 할아버지와 함께하는 특별 이벤트', date: '2025. 11. 01', category: '이벤트' },
    { id: 43, title: '동물원 겨울 운영시간 변경 안내', date: '2025. 10. 20', category: '안내' },
    { id: 42, title: '11월 주말 인형극 공연 일정', date: '2025. 10. 15', category: '이벤트' },
    { id: 41, title: '식물원 가을 단풍 축제 개최', date: '2025. 10. 01', category: '이벤트' },
    { id: 40, title: '추석 연휴 정상 운영 안내', date: '2025. 09. 10', category: '공지' },
    { id: 39, title: '어린이 교통안전 교육 프로그램 참가자 모집', date: '2025. 09. 05', category: '안내' },
    { id: 38, title: '여름 물놀이장 정기 점검 안내', date: '2025. 08. 25', category: '안내' },
    { id: 37, title: '8월 여름밤 별빛 음악회 개최', date: '2025. 08. 01', category: '이벤트' },
    { id: 36, title: '여름방학 동물원 사육사 체험 프로그램', date: '2025. 07. 20', category: '안내' },
    { id: 35, title: '신나는 물놀이장 7월 1일 개장!', date: '2025. 07. 01', category: '공지' },
    { id: 34, title: '세계 환경의 날 기념 나무 심기 행사', date: '2025. 06. 05', category: '이벤트' },
    { id: 33, title: '어린이날 모든 어린이 무료 입장!', date: '2025. 05. 05', category: '공지' },
    { id: 32, title: '봄꽃 가득한 튤립 축제 개최', date: '2025. 04. 15', category: '이벤트' },
    { id: 31, title: '벚꽃 만개 예상 시기 안내', date: '2025. 04. 01', category: '안내' },
    { id: 30, title: '3월 동물 먹이주기 체험 프로그램', date: '2025. 03. 20', category: '이벤트' },
    { id: 29, title: '봄 시즌 운영시간 변경 안내', date: '2025. 03. 01', category: '공지' },
    { id: 28, title: '설날 연휴 정상 운영합니다', date: '2025. 01. 25', category: '공지' },
    { id: 27, title: '겨울방학 얼음조각 전시회 개최', date: '2025. 01. 10', category: '안내' },
    { id: 26, title: '신년 복주머니 이벤트 당첨자 발표', date: '2025. 01. 05', category: '이벤트' },
    { id: 25, title: '2025년 새해 복 많이 받으세요!', date: '2025. 01. 01', category: '공지' },
    { id: 24, title: '연말 감사 선물 이벤트', date: '2024. 12. 20', category: '이벤트' },
    { id: 23, title: '크리스마스 캐롤 합창단 공연', date: '2024. 12. 15', category: '이벤트' },
    { id: 22, title: '겨울 눈썰매장 안전 이용 수칙', date: '2024. 12. 01', category: '안내' },
    { id: 21, title: '대공원 가을 단풍 명소 베스트 5', date: '2024. 11. 10', category: '안내' },
    { id: 20, title: '가을 풍경 사진 콘테스트 수상작 발표', date: '2024. 11. 01', category: '이벤트' },
    { id: 19, title: '10월 가을 축제 "단풍 속으로" 개최', date: '2024. 10. 15', category: '이벤트' },
    { id: 18, title: '추석 연휴 운영시간 안내', date: '2024. 09. 12', category: '공지' },
    { id: 17, title: '제10회 어린이 그림 그리기 대회', date: '2024. 09. 01', category: '이벤트' },
    { id: 16, title: '여름 물놀이장 8월 31일 폐장', date: '2024. 08. 31', category: '안내' },
    { id: 15, title: '광복절 기념 태극기 그리기 행사', date: '2024. 08. 15', category: '이벤트' },
    { id: 14, title: '여름휴가 시즌 혼잡 예상 안내', date: '2024. 08. 01', category: '공지' },
    { id: 13, title: '아기 판다 "푸바오" 동물원 입소', date: '2024. 07. 10', category: '안내' },
    { id: 12, title: '시원한 물놀이장 6월 1일 개장!', date: '2024. 06. 01', category: '공지' },
    { id: 11, title: '플라스틱 없는 대공원 만들기 캠페인', date: '2024. 05. 25', category: '이벤트' },
    { id: 10, title: '어린이날 특별 마술쇼 공연', date: '2024. 04. 28', category: '이벤트' },
    { id: 9, title: '봄꽃 사진 공모전 개최', date: '2024. 04. 15', category: '이벤트' },
    { id: 8, title: '2024년 벚꽃 축제가 시작됩니다', date: '2024. 03. 15', category: '이벤트' },
    { id: 7, title: '식물원 봄맞이 새 단장', date: '2024. 03. 01', category: '안내' },
    { id: 6, title: '3.1절 임시 휴원 안내', date: '2024. 02. 25', category: '공지' },
    { id: 5, title: '설날 연휴 정상 운영', date: '2024. 02. 05', category: '공지' },
    { id: 4, title: '겨울방학 눈사람 만들기 대회', date: '2024. 01. 15', category: '이벤트' },
    { id: 3, title: '2024년 새해를 맞이하여', date: '2024. 01. 01', category: '공지' },
    { id: 2, title: '연말 시설 점검으로 인한 임시 휴원', date: '2023. 12. 28', category: '공지' },
    { id: 1, title: '대형 크리스마스 트리 점등식', date: '2023. 12. 01', category: '이벤트' },
  ];

  const filteredNews = searchQuery
    ? newsData.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.includes(searchQuery)
      )
    : newsData;

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentNews = filteredNews.slice(startIndex, startIndex + itemsPerPage);

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pages.push(i);
        }
      }
    }

    return pages;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>대공원 소식</h1>
      <p className={styles.subtitle}>
        서울어린이대공원의 최신 소식과 이벤트를 전해드립니다. 방문 전 확인하시면 더욱 알찬 하루를 보내실 수 있어요.
      </p>

      <div className={styles.searchSection}>
        <div className={styles.totalCount}>총 {filteredNews.length}건</div>
        <div className={styles.searchBox}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="검색어를 입력해주세요."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
          <button className={styles.searchButton}>🔍</button>
        </div>
      </div>

      <div className={styles.listContainer}>
        {currentNews.map((news) => (
          <div key={news.id} className={styles.listItem}>
            <span className={styles.categoryBadge}>{news.category}</span>
            <h3 className={styles.listTitle}>{news.title}</h3>
            <span className={styles.listDate}>{news.date}</span>
          </div>
        ))}
      </div>

      <div className={styles.pagination}>
        <button
          className={styles.pageButton}
          onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
        >
          &lt;
        </button>

        {getPageNumbers().map((page) => (
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
