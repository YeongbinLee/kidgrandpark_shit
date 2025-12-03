import React, { useState, useEffect } from 'react';
import styles from './SearchModal.module.css';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  // 추천 검색어 데이터
  const recommendedSearches = {
    테마: ['코끼리', '장미원', '대관람차', '체험 프로그램'],
    유틸리티: ['화장실', '수유실', '식당', '운영 시간'],
  };

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // 스크롤 방지
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // 검색 실행
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowResults(true);
    }
  };

  // 추천 검색어 클릭
  const handleRecommendedClick = (keyword: string) => {
    setSearchQuery(keyword);
    setShowResults(true);
  };

  // 모달 닫기 시 초기화
  const handleClose = () => {
    setSearchQuery('');
    setShowResults(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* 검색 입력 영역 */}
        <div className={styles.searchHeader}>
          <form onSubmit={handleSearch} className={styles.searchForm}>
            <div className={styles.searchInputWrapper}>
              <svg
                className={styles.searchIcon}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                type="text"
                className={styles.searchInput}
                placeholder="검색어를 입력하세요..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              {searchQuery && (
                <button
                  type="button"
                  className={styles.clearBtn}
                  onClick={() => {
                    setSearchQuery('');
                    setShowResults(false);
                  }}
                >
                  ✕
                </button>
              )}
            </div>
            <button type="button" className={styles.closeBtn} onClick={handleClose}>
              ✕
            </button>
          </form>
        </div>

        {/* 검색 결과 또는 추천 검색어 */}
        <div className={styles.content}>
          {showResults && searchQuery ? (
            // 검색 결과 영역
            <div className={styles.searchResults}>
              <p className={styles.resultsPlaceholder}>
                "{searchQuery}"에 대한 검색 결과가 여기에 표시됩니다.
              </p>
            </div>
          ) : (
            // 추천 검색어 영역
            <div className={styles.recommendations}>
              <h3 className={styles.sectionTitle}>추천 검색어</h3>

              {/* 테마 섹션 */}
              <div className={styles.recommendSection}>
                <h4 className={styles.categoryTitle}>테마</h4>
                <div className={styles.tagList}>
                  {recommendedSearches.테마.map((keyword, index) => (
                    <button
                      key={index}
                      className={styles.tag}
                      onClick={() => handleRecommendedClick(keyword)}
                    >
                      {keyword}
                    </button>
                  ))}
                </div>
              </div>

              {/* 유틸리티 섹션 */}
              <div className={styles.recommendSection}>
                <h4 className={styles.categoryTitle}>유틸리티</h4>
                <div className={styles.tagList}>
                  {recommendedSearches.유틸리티.map((keyword, index) => (
                    <button
                      key={index}
                      className={styles.tag}
                      onClick={() => handleRecommendedClick(keyword)}
                    >
                      {keyword}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
