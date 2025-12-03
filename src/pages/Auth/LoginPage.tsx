import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert('이메일과 비밀번호를 입력해주세요.');
      return;
    }

    // 임시 로그인 처리
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);

    alert('로그인 되었습니다!');
    navigate('/mypage');
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h1 className={styles.title}>로그인</h1>
        <p className={styles.subtitle}>서울어린이대공원에 오신 것을 환영합니다</p>

        <form className={styles.form} onSubmit={handleLogin}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>이메일</label>
            <input
              type="email"
              className={styles.input}
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>비밀번호</label>
            <input
              type="password"
              className={styles.input}
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className={styles.loginBtn}>
            로그인
          </button>
        </form>

        <div className={styles.links}>
          <Link to="/signup" className={styles.link}>회원가입</Link>
          <span className={styles.divider}>|</span>
          <Link to="/find-password" className={styles.link}>비밀번호 찾기</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
