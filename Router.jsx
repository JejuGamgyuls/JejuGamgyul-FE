import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTE } from './src/constants';
import Mainpage from './src/pages/mainpage';
export const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={ROUTE.ROOT} element={<Mainpage />} />
      </Routes>
    </Suspense>
  );
};
