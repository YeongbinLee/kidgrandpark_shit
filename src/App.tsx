import { useState } from 'react';
import AppRouter from './Router';
import SearchModal from './components/SearchModal/SearchModal';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import './App.css';

function App() {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // 전역 검색 모달 상태를 제공
  (window as any).openSearchModal = () => setIsSearchModalOpen(true);
  (window as any).closeSearchModal = () => setIsSearchModalOpen(false);

  return (
    <>
      {isLoading && (
        <LoadingScreen
          onLoadComplete={() => setIsLoading(false)}
          minLoadTime={1000}
        />
      )}
      <AppRouter />
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
      />
    </>
  );
}

export default App;
