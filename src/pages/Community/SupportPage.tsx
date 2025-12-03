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

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>고객센터</h1>
      <p className={styles.subtitle}>
        궁금하신 사항이 있으시면 언제든지 문의해 주세요
      </p>

      <div className={styles.content}>
        <div className={styles.contactSection}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionIcon}>📞</span>
            문의하기
          </h2>
          <div className={styles.contactGrid}>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>☎️</div>
              <h3 className={styles.contactTitle}>전화 문의</h3>
              <p className={styles.contactInfo}>02-450-9311<br />평일 09:00 - 18:00</p>
            </div>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>✉️</div>
              <h3 className={styles.contactTitle}>이메일 문의</h3>
              <p className={styles.contactInfo}>info@childrenpark.or.kr<br />24시간 접수</p>
            </div>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>📍</div>
              <h3 className={styles.contactTitle}>방문 문의</h3>
              <p className={styles.contactInfo}>서울시 광진구<br />능동로 216</p>
            </div>
          </div>
        </div>

        <div className={styles.faqSection}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionIcon}>❓</span>
            자주 묻는 질문
          </h2>
          <div className={styles.faqList}>
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className={`${styles.faqItem} ${
                  openFaqId === faq.id ? styles.open : ''
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
