import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import './index.css';
import App from './App.jsx';
import { GlobalStyle } from '../globalStyle';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <RecoilRoot>
      <GlobalStyle />
      <App />
    </RecoilRoot>
  </BrowserRouter>,
);
