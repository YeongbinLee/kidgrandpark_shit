import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ReservationPage.module.css';

interface ReservationData {
  date: string;
  adults: number;
  children: number;
  infants: number;
}

const ReservationPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);
  const [infants, setInfants] = useState<number>(0);

  // 요금 설정
  const prices = {
    adult: 5000,
    child: 3000,
    infant: 0,
  };

  // 총 금액 계산
  const totalAmount = adults * prices.adult + children * prices.child + infants * prices.infant;

  // 날짜 선택 핸들러
  const handleDateClick = (date: string) => {
    setSelectedDate(date);
  };

  // 인원 조절 핸들러
  const adjustCount = (type: 'adults' | 'children' | 'infants', action: 'increase' | 'decrease') => {
    if (type === 'adults') {
      if (action === 'increase') setAdults(adults + 1);
      else if (adults > 1) setAdults(adults - 1);
    } else if (type === 'children') {
      if (action === 'increase') setChildren(children + 1);
      else if (children > 0) setChildren(children - 1);
    } else if (type === 'infants') {
      if (action === 'increase') setInfants(infants + 1);
      else if (infants > 0) setInfants(infants - 1);
    }
  };

  // 예약 확인 버튼
  const handleReservation = () => {
    if (!selectedDate) {
      alert('방문 날짜를 선택해주세요.');
      return;
    }

    const reservationData: ReservationData = {
      date: selectedDate,
      adults,
      children,
      infants,
    };

    // 로컬스토리지에 예약 정보 임시 저장
    localStorage.setItem('reservationData', JSON.stringify(reservationData));
    localStorage.setItem('totalAmount', totalAmount.toString());

    navigate('/payment');
  };

  // 임시 캘린더 데이터 (12월 2025)
  const generateCalendar = () => {
    const days = [];
    const daysInMonth = 31;
    const firstDay = 1; // 월요일부터 시작

    // 빈 칸 추가
    for (let i = 0; i < firstDay; i++) {
      days.push({ day: null, available: false });
    }

    // 날짜 추가
    for (let day = 1; day <= daysInMonth; day++) {
      const available = day >= new Date().getDate(); // 오늘 이후 날짜만 예약 가능
      days.push({ day, available });
    }

    return days;
  };

  const calendarDays = generateCalendar();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>방문 예약</h1>
      <p className={styles.subtitle}>서울어린이대공원 방문 날짜와 인원을 선택해주세요</p>

      <div className={styles.content}>
        {/* 캘린더 섹션 */}
        <div className={styles.calendarSection}>
          <h2 className={styles.sectionTitle}>📅 방문 날짜 선택</h2>
          <div className={styles.calendarHeader}>
            <h3>2025년 12월</h3>
          </div>

          <div className={styles.calendar}>
            <div className={styles.weekdays}>
              {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
                <div key={day} className={styles.weekday}>{day}</div>
              ))}
            </div>

            <div className={styles.days}>
              {calendarDays.map((item, index) => (
                <div
                  key={index}
                  className={`${styles.day} ${
                    !item.available || !item.day ? styles.disabled : ''
                  } ${selectedDate === `2025-12-${item.day}` ? styles.selected : ''}`}
                  onClick={() => item.available && item.day && handleDateClick(`2025-12-${item.day}`)}
                >
                  {item.day}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 인원 및 요금 섹션 */}
        <div className={styles.summarySection}>
          <h2 className={styles.sectionTitle}>👥 인원 선택</h2>

          {/* 성인 */}
          <div className={styles.countControl}>
            <div className={styles.countInfo}>
              <span className={styles.countLabel}>성인</span>
              <span className={styles.countPrice}>{prices.adult.toLocaleString()}원</span>
            </div>
            <div className={styles.countButtons}>
              <button
                className={styles.countBtn}
                onClick={() => adjustCount('adults', 'decrease')}
                disabled={adults <= 1}
              >
                −
              </button>
              <span className={styles.countValue}>{adults}</span>
              <button
                className={styles.countBtn}
                onClick={() => adjustCount('adults', 'increase')}
              >
                +
              </button>
            </div>
          </div>

          {/* 어린이 */}
          <div className={styles.countControl}>
            <div className={styles.countInfo}>
              <span className={styles.countLabel}>어린이 (3-12세)</span>
              <span className={styles.countPrice}>{prices.child.toLocaleString()}원</span>
            </div>
            <div className={styles.countButtons}>
              <button
                className={styles.countBtn}
                onClick={() => adjustCount('children', 'decrease')}
                disabled={children <= 0}
              >
                −
              </button>
              <span className={styles.countValue}>{children}</span>
              <button
                className={styles.countBtn}
                onClick={() => adjustCount('children', 'increase')}
              >
                +
              </button>
            </div>
          </div>

          {/* 유아 */}
          <div className={styles.countControl}>
            <div className={styles.countInfo}>
              <span className={styles.countLabel}>유아 (0-2세)</span>
              <span className={styles.countPrice}>무료</span>
            </div>
            <div className={styles.countButtons}>
              <button
                className={styles.countBtn}
                onClick={() => adjustCount('infants', 'decrease')}
                disabled={infants <= 0}
              >
                −
              </button>
              <span className={styles.countValue}>{infants}</span>
              <button
                className={styles.countBtn}
                onClick={() => adjustCount('infants', 'increase')}
              >
                +
              </button>
            </div>
          </div>

          {/* 총 금액 */}
          <div className={styles.totalSection}>
            <div className={styles.totalRow}>
              <span>총 인원</span>
              <span>{adults + children + infants}명</span>
            </div>
            <div className={styles.totalRow}>
              <span className={styles.totalLabel}>총 금액</span>
              <span className={styles.totalAmount}>{totalAmount.toLocaleString()}원</span>
            </div>
          </div>

          {/* 예약 버튼 */}
          <button className={styles.reserveBtn} onClick={handleReservation}>
            예약 정보 확인 및 결제
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;
