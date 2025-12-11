import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

/* -------------------------------------- */
/* [R 6.3] 모바일 웹 재구성 마스터 룰: 키보드 포커스 자동 스크롤 */
/* -------------------------------------- */
document.addEventListener('focusin', (e) => {
  // input, textarea, select 요소에 포커스가 잡혔을 때만 작동
  if (e.target instanceof HTMLElement && e.target.matches('input, textarea, select')) {
    const viewportHeight = window.innerHeight;
    const targetElement = e.target;
    const targetRect = targetElement.getBoundingClientRect();

    // 요소가 화면의 60% 이상 아래에 있을 때 스크롤 (키보드 영역 회피)
    if (targetRect.top > viewportHeight * 0.6) {
      window.scrollBy({
        top: targetRect.bottom - viewportHeight + 100, // 100px 여유 공간
        behavior: 'smooth'
      });
    }
  }
});

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
