import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignUpPage.module.css';

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [agreeTerms, setAgreeTerms] = useState<boolean>(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert('모든 필드를 입력해주세요.');
      return;
    }

    if (!validateEmail(email)) {
      alert('올바른 이메일 형식을 입력해주세요.');
      return;
    }

    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    if (password.length < 8) {
      alert('비밀번호는 8자 이상이어야 합니다.');
      return;
    }

    if (!agreeTerms) {
      alert('약관에 동의해주세요.');
      return;
    }

    // 임시 회원가입 처리
    alert('회원가입이 완료되었습니다!');
    navigate('/login');
  };

  return (
    <div className={styles.container}>
      <div className={styles.signUpBox}>
        <h1 className={styles.title}>회원가입</h1>
        <p className={styles.subtitle}>서울어린이대공원 회원이 되어보세요</p>

        <form className={styles.form} onSubmit={handleSignUp}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>이름 *</label>
            <input
              type="text"
              className={styles.input}
              placeholder="이름을 입력하세요"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>이메일 *</label>
            <input
              type="email"
              className={styles.input}
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>비밀번호 * (8자 이상)</label>
            <input
              type="password"
              className={styles.input}
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>비밀번호 확인 *</label>
            <input
              type="password"
              className={styles.input}
              placeholder="비밀번호를 다시 입력하세요"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className={styles.termsGroup}>
            <label className={styles.termsLabel}>
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
              />
              <span>서비스 이용약관 및 개인정보 처리방침에 동의합니다 *</span>
            </label>
          </div>

          <button type="submit" className={styles.signUpBtn}>
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
