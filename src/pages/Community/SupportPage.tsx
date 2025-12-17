import React, { useState } from 'react';
import styles from './SupportPage.module.css';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  icon: string;
}

const SupportPage: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const faqs: FAQ[] = [
    {
      id: 1,
      question: '운영 시간은 어떻게 되나요?',
      answer: '서울어린이대공원은 연중무휴로 운영됩니다. 하절기(3월~10월)는 오전 5시부터 오후 10시까지, 동절기(11월~2월)는 오전 5시부터 오후 9시까지 개방됩니다. 단, 시설물 운영 시간은 계절에 따라 다를 수 있습니다.',
      icon: '🕐',
    },
    {
      id: 2,
      question: '입장료가 있나요?',
      answer: '공원 입장은 무료입니다. 다만 일부 시설(놀이기구, 특별 전시 등)은 별도의 이용료가 발생할 수 있습니다. 자세한 요금 정보는 방문 전 확인해 주세요.',
      icon: '💰',
    },
    {
      id: 3,
      question: '주차장이 있나요?',
      answer: '공원 내 대형 주차장을 운영하고 있습니다. 주차 요금은 최초 30분 무료, 이후 10분당 500원입니다. 주말 및 공휴일에는 만차될 수 있으니 대중교통 이용을 권장합니다.',
      icon: '🚗',
    },
    {
      id: 4,
      question: '반려동물 동반이 가능한가요?',
      answer: '공원 외부 산책로는 반려동물 동반이 가능합니다. 다만 동물원 구역, 식물원, 실내 시설은 위생과 안전상의 이유로 반려동물 출입이 제한됩니다. 반려동물 동반 시 목줄 착용은 필수입니다.',
      icon: '🐕',
    },
    {
      id: 5,
      question: '체험 프로그램 신청은 어떻게 하나요?',
      answer: '체험 프로그램은 홈페이지를 통해 온라인으로 사전 예약이 가능합니다. 일부 프로그램은 현장 접수도 가능하나, 인기 프로그램은 조기 마감될 수 있으니 사전 예약을 권장합니다.',
      icon: '📝',
    },
    {
      id: 6,
      question: '우천 시에도 관람이 가능한가요?',
      answer: '비가 오는 날에도 공원은 정상 운영됩니다. 실내 동물관, 식물관, 온실 등은 날씨에 관계없이 관람 가능합니다. 다만 야외 놀이기구와 물놀이장은 기상 상황에 따라 운영이 중단될 수 있습니다.',
      icon: '☔',
    },
    {
      id: 7,
      question: '음식물 반입이 가능한가요?',
      answer: '공원 내 피크닉 구역에서는 음식물 반입이 자유롭습니다. 다만 동물원 구역 및 실내 시설은 음식물 반입이 제한됩니다. 공원 내 식당과 매점도 운영하고 있습니다.',
      icon: '🍱',
    },
    {
      id: 8,
      question: '유모차와 휠체어 대여가 가능한가요?',
      answer: '정문 안내센터에서 유모차와 휠체어를 무료로 대여해드립니다. 수량이 제한되어 있으니 방문 시간을 고려해 주세요. 신분증을 맡기시면 퇴장 시 반환해드립니다.',
      icon: '♿',
    },
  ];

  const filteredFaqs = searchQuery
    ? faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : faqs;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>고객센터</h1>
      <p className={styles.subtitle}>
        궁금하신 사항이 있으시면 언제든지 문의해 주세요
      </p>

      {/* 검색 섹션 */}
      <div className={styles.searchSection}>
        <div className={styles.totalCount}>총 {filteredFaqs.length}건의 FAQ</div>
        <div className={styles.searchBox}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="검색어를 입력해주세요."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className={styles.searchButton}>🔍</button>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.contactSection}>
          <h2 className={styles.sectionTitle}>
            <svg className={styles.sectionIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            문의하기
          </h2>
          <div className={styles.contactGrid}>
            <div className={styles.contactCard}>
              <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <h3 className={styles.contactTitle}>전화 문의</h3>
              <p className={styles.contactInfo}>02-450-9311<br />평일 09:00 - 18:00</p>
            </div>
            <div className={styles.contactCard}>
              <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <h3 className={styles.contactTitle}>이메일 문의</h3>
              <p className={styles.contactInfo}>info@childrenpark.or.kr<br />24시간 접수</p>
            </div>
            <div className={styles.contactCard}>
              <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <h3 className={styles.contactTitle}>방문 문의</h3>
              <p className={styles.contactInfo}>서울시 광진구<br />능동로 216</p>
            </div>
          </div>
        </div>

        <div className={styles.faqSection}>
          <h2 className={styles.sectionTitle}>
            <svg className={styles.sectionIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            자주 묻는 질문
          </h2>
          <div className={styles.faqList}>
            {filteredFaqs.map((faq) => (
              <div
                key={faq.id}
                className={`${styles.faqItem} ${openFaqId === faq.id ? styles.open : ''
                  }`}
              >
                <div
                  className={styles.faqQuestion}
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span className={styles.questionText}>
                    <span className={styles.questionIcon}>{faq.icon}</span>
                    {faq.question}
                  </span>
                  <span className={styles.toggleIcon}>
                    {openFaqId === faq.id ? '▲' : '▼'}
                  </span>
                </div>
                <div className={styles.faqAnswer}>
                  <p className={styles.answerContent}>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
