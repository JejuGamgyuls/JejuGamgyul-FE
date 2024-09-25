import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import './index.css';
import App from './App.jsx';
import { GlobalStyle } from '../globalStyle';
import { worker } from '../mocks/browser';

// 비동기 함수로 정의
// async function startWorkerAndRender() {
//   await worker.start(); // worker를 비동기적으로 시작
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <RecoilRoot>
        <GlobalStyle />
        <App />
      </RecoilRoot>
    </StrictMode>
  </BrowserRouter>,
);
// }

// // 비동기 함수 호출
// startWorkerAndRender();
