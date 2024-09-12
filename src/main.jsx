import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import './index.css';

import App from './App.jsx';
import { GlobalStyle } from '../globalStyle';

createRoot(document.getElementById('root')).render(
<<<<<<< HEAD
  <BrowserRouter>
    <StrictMode>
      <RecoilRoot>
        <GlobalStyle />
        <App />
      </RecoilRoot>
    </StrictMode>
  </BrowserRouter>,
=======
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
>>>>>>> cdba127 (Feat: Navigation UI 구현 및 아이콘 추가)
);
