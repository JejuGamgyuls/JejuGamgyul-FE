import { ROUTE } from '@constants/route';
import BusFindPage from '@pages/busFindpage';
import BusStopFindPage from '@pages/busStopPage';
import FavoritesPage from '@pages/FavoritesPage';
import LoginPage from '@pages/login';
import Mainpage from '@pages/mainpage';
import SignUpPage from '@pages/signup';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

export const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={ROUTE.ROOT} element={<Mainpage />} />
        <Route path={ROUTE.SIGNUP} element={<SignUpPage />} />
        <Route path={ROUTE.LOGIN} element={<LoginPage />} />
        <Route path={ROUTE.BUSFIND} element={<BusFindPage />} />
        <Route path={ROUTE.BUSSTOP} element={<BusStopFindPage />} />
        <Route path={ROUTE.FAVORITE} element={<FavoritesPage />} />
      </Routes>
    </Suspense>
  );
};
