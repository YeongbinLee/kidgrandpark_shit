import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PaymentCompletePage.module.css';

const PaymentCompletePage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 결제 완료 후 로컬스토리지 클리어
    localStorage.removeItem('reservationData');
    localStorage.removeItem('totalAmount');
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.checkIcon}>✓</div>
        <h1 className={styles.title}>결제가 완료되었습니다!</h1>
        <p className={styles.message}>
          예약이 정상적으로 완료되었습니다.<br />
          방문 당일 예약 확인 문자를 확인해주세요.
        </p>

        <div className={styles.infoBox}>
          <p className={styles.infoText}>
            • 예약 내역은 마이페이지에서 확인하실 수 있습니다.<br />
            • 방문 전날 예약 확인 문자가 발송됩니다.<br />
            • 예약 취소는 방문 3일 전까지 가능합니다.
          </p>
        </div>

        <div className={styles.buttons}>
          <button
            className={styles.homeBtn}
            onClick={() => navigate('/')}
          >
            홈으로 이동
          </button>
          <button
            className={styles.myPageBtn}
            onClick={() => navigate('/mypage')}
          >
            예약 내역 확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentCompletePage;
