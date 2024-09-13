// import UserIcon from '@assets/svg/UserIcon.svg';
import { useEffect } from 'react';

import { Router } from '../Router';

function App() {
  // vh 설정
  const setScreenHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  useEffect(() => {
    setScreenHeight();
    window.addEventListener('resize', setScreenHeight);
    return () => {
      window.removeEventListener('resize', setScreenHeight);
    };
  }, []);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
