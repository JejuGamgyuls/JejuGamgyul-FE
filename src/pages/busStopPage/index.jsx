import NavigationBar from '@components/NavigationBar';
import SideBar from '@components/SideBar';
import NaverMapContainer from '@pages/mainpage/NaverMapContainer';
import { NavermapsProvider } from 'react-naver-maps';

import * as S from '../mainpage/styles';
function BusStopFindPage() {
  const naverMapClientId = import.meta.env.VITE_NAVER_MAP_CLIENT_ID;

  return (
    <div>
      <S.SideWrapper>
        <NavigationBar />
        <SideBar />
      </S.SideWrapper>
      <NavermapsProvider ncpClientId={naverMapClientId}>
        <NaverMapContainer />
      </NavermapsProvider>
    </div>
  );
}

export default BusStopFindPage;
