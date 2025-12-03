import React, { useState } from 'react';
import styles from './CalendarPage.module.css';

interface Event {
  id: number;
  day: number;
  date: string;
  name: string;
  description: string;
  time: string;
  location: string;
}

const CalendarPage: React.FC = () => {
  const [currentMonth] = useState('2025년 12월');
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const events: Event[] = [
    {
      id: 1,
      day: 7,
      date: '12월 7일 (토)',
      name: '겨울 동물 관찰 프로그램',
      description: '겨울을 나는 동물들의 생활을 관찰하고 배우는 특별 프로그램',
      time: '오전 10:00 - 12:00',
      location: '동물원 구역',
    },
    {
      id: 2,
      day: 14,
      date: '12월 14일 (토)',
      name: '크리스마스 특별 이벤트',
      description: '산타와 함께하는 동물원 투어 및 선물 증정',
      time: '오후 2:00 - 5:00',
      location: '정문 광장',
    },
    {
      id: 3,
      day: 21,
      date: '12월 21일 (토)',
      name: '가족 사진 촬영 이벤트',
      description: '전문 사진작가와 함께하는 가족 사진 촬영',
      time: '오전 10:00 - 오후 4:00',
      location: '식물원 앞',
    },
    {
      id: 4,
      day: 24,
      date: '12월 24일 (화)',
      name: '크리스마스 이브 특별 개장',
      description: '저녁 8시까지 연장 운영 및 조명 쇼',
      time: '오후 6:00 - 8:00',
      location: '중앙 광장',
    },
    {
      id: 5,
      day: 31,
      date: '12월 31일 (화)',
      name: '송년 음악회',
      description: '야외 무대에서 펼쳐지는 가족 음악회',
      time: '오후 7:00 - 9:00',
      location: '야외 공연장',
    },
  ];

  // 12월 달력 생성 (2025년 12월 1일은 월요일)
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const firstDayOfMonth = 1; // 월요일 (0=일요일, 1=월요일)
  const daysInMonth = 31;

  const eventDates = [7, 14, 21, 24, 31]; // 이벤트가 있는 날짜

  const calendarDays = [];

  // 빈 칸 추가 (월요일부터 시작하므로 일요일 1칸 비움)
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push({ day: null, hasEvent: false });
  }

  // 날짜 추가
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push({
      day,
      hasEvent: eventDates.includes(day),
    });
  }

  const selectedDayEvents = selectedDay
    ? events.filter((event) => event.day === selectedDay)
    : [];

  const handleDayClick = (day: number | null) => {
    if (day && eventDates.includes(day)) {
      setSelectedDay(day);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>이벤트 일정</h1>
      <p className={styles.subtitle}>
        {selectedDay
          ? `${currentMonth} ${selectedDay}일의 이벤트`
          : '날짜를 클릭하여 이벤트를 확인하세요'}
      </p>

      <div className={styles.content}>
        <div className={styles.calendarSection}>
          <div className={styles.calendarHeader}>
            <h2 className={styles.currentMonth}>{currentMonth}</h2>
            <div className={styles.monthNavigation}>
              <button className={styles.navButton}>◀</button>
              <button className={styles.navButton}>▶</button>
            </div>
          </div>

          <div className={styles.calendarGrid}>
            {daysOfWeek.map((day, index) => (
              <div
                key={`header-${day}`}
                className={`${styles.dayHeader} ${
                  index === 0 ? styles.sunday : index === 6 ? styles.saturday : ''
                }`}
              >
                {day}
              </div>
            ))}
            {calendarDays.map((item, index) => (
              <div
                key={`day-${index}`}
                className={`${styles.dayCell} ${
                  item.day === null ? styles.empty : ''
                } ${item.hasEvent ? styles.hasEvent : ''} ${
                  selectedDay === item.day ? styles.selected : ''
                }`}
                onClick={() => handleDayClick(item.day)}
                style={{ cursor: item.hasEvent ? 'pointer' : 'default' }}
              >
                {item.day && (
                  <>
                    <span className={styles.dayNumber}>{item.day}</span>
                    {item.hasEvent && <span className={styles.eventDot}></span>}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {selectedDay && selectedDayEvents.length > 0 && (
          <div className={styles.eventsSection}>
            <div className={styles.eventDetails}>
              <div className={styles.eventHeader}>
                <h3 className={styles.eventsTitle}>
                  <span>🎉</span>
                  {selectedDay}일 이벤트
                </h3>
                <button
                  className={styles.closeButton}
                  onClick={() => setSelectedDay(null)}
                >
                  ✕
                </button>
              </div>
              <div className={styles.eventsList}>
                {selectedDayEvents.map((event) => (
                  <div key={event.id} className={styles.eventCard}>
                    <div className={styles.eventName}>{event.name}</div>
                    <div className={styles.eventInfo}>
                      <div className={styles.eventInfoItem}>
                        <span className={styles.infoIcon}>🕐</span>
                        <span>{event.time}</span>
                      </div>
                      <div className={styles.eventInfoItem}>
                        <span className={styles.infoIcon}>📍</span>
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <div className={styles.eventDescription}>
                      {event.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarPage;
