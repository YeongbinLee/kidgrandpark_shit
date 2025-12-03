import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PaymentPage.module.css';

const PaymentPage: React.FC = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<string>('card');
  const [agreeTerms, setAgreeTerms] = useState<boolean>(false);
  const [reservationData, setReservationData] = useState<any>(null);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  useEffect(() => {
    // 로컬스토리지에서 예약 정보 불러오기
    const storedData = localStorage.getItem('reservationData');
    const storedAmount = localStorage.getItem('totalAmount');

    if (storedData && storedAmount) {
      setReservationData(JSON.parse(storedData));
      setTotalAmount(parseInt(storedAmount));
    } else {
      alert('예약 정보가 없습니다. 예약 페이지로 이동합니다.');
      navigate('/reservation');
    }
  }, [navigate]);

  const handlePayment = () => {
    if (!agreeTerms) {
      alert('결제 약관에 동의해주세요.');
      return;
    }

    // 결제 완료 페이지로 이동
    navigate('/payment/complete');
  };

  if (!reservationData) {
    return null;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>결제하기</h1>
      <p className={styles.subtitle}>예약 정보를 확인하고 결제를 진행해주세요</p>

      <div className={styles.content}>
        {/* 예약 정보 요약 */}
        <div className={styles.summarySection}>
          <h2 className={styles.sectionTitle}>📋 예약 정보</h2>

          <div className={styles.infoCard}>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>방문 날짜</span>
              <span className={styles.infoValue}>{reservationData.date}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>성인</span>
              <span className={styles.infoValue}>{reservationData.adults}명</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>어린이</span>
              <span className={styles.infoValue}>{reservationData.children}명</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>유아</span>
              <span className={styles.infoValue}>{reservationData.infants}명</span>
            </div>
            <div className={styles.totalRow}>
              <span className={styles.totalLabel}>총 결제 금액</span>
              <span className={styles.totalAmount}>{totalAmount.toLocaleString()}원</span>
            </div>
          </div>
        </div>

        {/* 결제 수단 선택 */}
        <div className={styles.paymentSection}>
          <h2 className={styles.sectionTitle}>💳 결제 수단</h2>

          <div className={styles.paymentMethods}>
            <label className={styles.paymentOption}>
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span className={styles.paymentLabel}>신용카드</span>
            </label>

            <label className={styles.paymentOption}>
              <input
                type="radio"
                name="payment"
                value="phone"
                checked={paymentMethod === 'phone'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span className={styles.paymentLabel}>휴대폰 결제</span>
            </label>

            <label className={styles.paymentOption}>
              <input
                type="radio"
                name="payment"
                value="simple"
                checked={paymentMethod === 'simple'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span className={styles.paymentLabel}>간편 결제 (카카오페이, 네이버페이)</span>
            </label>
          </div>

          {/* 약관 동의 */}
          <div className={styles.termsSection}>
            <label className={styles.termsLabel}>
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
              />
              <span>결제 약관 및 개인정보 처리방침에 동의합니다</span>
            </label>
          </div>

          {/* 결제 버튼 */}
          <button
            className={styles.paymentBtn}
            onClick={handlePayment}
            disabled={!agreeTerms}
          >
            {totalAmount.toLocaleString()}원 결제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
