import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './StampSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const StampSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const contentWrapper = contentWrapperRef.current;
    const card1 = card1Ref.current;
    const card2 = card2Ref.current;
    const card3 = card3Ref.current;

    if (!section || !contentWrapper || !card1 || !card2 || !card3) return;

    // 타임라인 생성
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80px', // 헤더 높이만큼 띄우기
        end: '+=3000', // 스크롤 길이
        scrub: 1,
        pin: true, // 섹션 전체 고정
        anticipatePin: 1,
      },
    });

    // 카드 1 애니메이션
    tl.fromTo(
      card1,
      { y: 400, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 1 },
      0
    );

    // 카드 2 애니메이션
    tl.fromTo(
      card2,
      { y: 400, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 1 },
      0.3
    );

    // 카드 3 애니메이션
    tl.fromTo(
      card3,
      { y: 400, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 1 },
      0.6
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.stampSection}>
      <div ref={contentWrapperRef} className={styles.contentWrapper}>
        {/* 텍스트 콘텐츠 */}
        <div className={styles.textContent}>
          <h2 className={styles.title}>온라인 스탬프</h2>
          <div className={styles.description}>
            <p>서울어린이대공원 곳곳을 탐험하며 각 시설에 비치된 QR을 스캔하면,</p>
            <p>나만의 온라인 스탬프가 쌓입니다.</p>
            <p>동물원, 식물원, 놀이공원을 한 바퀴 돌며 즐거운 미션을 완성해보세요.</p>
            <p>모든 스탬프를 모으면 특별한 기념 선물도 기다리고 있어요!</p>
          </div>
          <button className={styles.participateBtn}>확인하기</button>
        </div>

        {/* 손 이미지 */}
        <img
          src="/stamp/stamp_hand.png"
          alt="스탬프 체험"
          className={styles.handImage}
        />

        {/* 3개의 폰 카드 */}
        <div className={styles.cardsContainer}>
          <div ref={card1Ref} className={`${styles.phoneCard} ${styles.card1}`}>
            <img src="/stamp/stamp1.png" alt="스탬프 1" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '30px' }} />
          </div>
          <div ref={card2Ref} className={`${styles.phoneCard} ${styles.card2}`}>
            <img src="/stamp/stamp2.png" alt="스탬프 2" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '30px' }} />
          </div>
          <div ref={card3Ref} className={`${styles.phoneCard} ${styles.card3}`}>
            <img src="/stamp/stamp3.png" alt="스탬프 3" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '30px' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StampSection;
