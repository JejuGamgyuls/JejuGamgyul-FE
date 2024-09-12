import { ROUTE } from '@constants/route';
import Mainpage from '@pages/mainpage';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

export const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={ROUTE.ROOT} element={<Mainpage />} />
      </Routes>
    </Suspense>
  );
};
