import { useState } from 'react';
import AppRouter from './Router';
import SearchModal from './components/SearchModal/SearchModal';
import './App.css';

function App() {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  // 전역 검색 모달 상태를 제공
  (window as any).openSearchModal = () => setIsSearchModalOpen(true);
  (window as any).closeSearchModal = () => setIsSearchModalOpen(false);

  return (
    <>
      <AppRouter />
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
      />
    </>
  );
}

export default App;
