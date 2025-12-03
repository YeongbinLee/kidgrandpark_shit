import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MyProfile.module.css';

const MyProfile: React.FC = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  // 알림 설정
  const [emailConsent, setEmailConsent] = useState<boolean>(true);
  const [smsConsent, setSmsConsent] = useState<boolean>(true);

  useEffect(() => {
    const email = localStorage.getItem('userEmail') || '';
    setUserEmail(email);
    setUserName(email.split('@')[0]);
    setPhone('010-1234-5678'); // 더미 데이터
  }, []);

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();

    if (!userName) {
      alert('이름을 입력해주세요.');
      return;
    }

    if (newPassword && newPassword !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    if (newPassword && newPassword.length < 8) {
      alert('비밀번호는 8자 이상이어야 합니다.');
      return;
    }

    alert('회원 정보가 업데이트되었습니다.');
    setNewPassword('');
    setConfirmPassword('');
  };

  const handleSaveNotifications = () => {
    alert('알림 설정이 저장되었습니다.');
  };

  const handleLogout = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userEmail');
      alert('로그아웃 되었습니다.');
      navigate('/');
    }
  };

  const handleWithdraw = () => {
    if (window.confirm('정말 회원 탈퇴하시겠습니까? 모든 정보가 삭제되며 복구할 수 없습니다.')) {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userEmail');
      alert('회원 탈퇴가 완료되었습니다.');
      navigate('/');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.pageTitle}>회원 정보 관리</h2>

      {/* 개인 정보 수정 */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>개인 정보 수정</h3>
        <form className={styles.form} onSubmit={handleUpdateProfile}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>이메일</label>
            <input
              type="email"
              className={styles.input}
              value={userEmail}
              disabled
            />
            <span className={styles.helperText}>이메일은 변경할 수 없습니다.</span>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>이름</label>
            <input
              type="text"
              className={styles.input}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="이름을 입력하세요"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>휴대폰 번호</label>
            <input
              type="tel"
              className={styles.input}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="010-0000-0000"
            />
          </div>

          <div className={styles.divider}></div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>새 비밀번호 (선택사항)</label>
            <input
              type="password"
              className={styles.input}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="새 비밀번호를 입력하세요 (8자 이상)"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>비밀번호 확인</label>
            <input
              type="password"
              className={styles.input}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="비밀번호를 다시 입력하세요"
            />
          </div>

          <button type="submit" className={styles.saveBtn}>
            정보 저장
          </button>
        </form>
      </section>

      {/* 알림 설정 */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>알림 설정</h3>
        <div className={styles.notificationSettings}>
          <div className={styles.settingItem}>
            <div className={styles.settingInfo}>
              <span className={styles.settingLabel}>이메일 수신 동의</span>
              <span className={styles.settingDesc}>이벤트 및 프로모션 정보를 이메일로 받습니다.</span>
            </div>
            <label className={styles.switch}>
              <input
                type="checkbox"
                checked={emailConsent}
                onChange={(e) => setEmailConsent(e.target.checked)}
              />
              <span className={styles.slider}></span>
            </label>
          </div>

          <div className={styles.settingItem}>
            <div className={styles.settingInfo}>
              <span className={styles.settingLabel}>SMS 수신 동의</span>
              <span className={styles.settingDesc}>예약 알림 및 중요 공지를 문자로 받습니다.</span>
            </div>
            <label className={styles.switch}>
              <input
                type="checkbox"
                checked={smsConsent}
                onChange={(e) => setSmsConsent(e.target.checked)}
              />
              <span className={styles.slider}></span>
            </label>
          </div>

          <button className={styles.saveNotificationBtn} onClick={handleSaveNotifications}>
            설정 저장
          </button>
        </div>
      </section>

      {/* 기타 */}
      <section className={styles.section}>
        <div className={styles.actionButtons}>
          <button className={styles.logoutBtn} onClick={handleLogout}>
            로그아웃
          </button>
          <button className={styles.withdrawBtn} onClick={handleWithdraw}>
            회원 탈퇴
          </button>
        </div>
      </section>
    </div>
  );
};

export default MyProfile;
