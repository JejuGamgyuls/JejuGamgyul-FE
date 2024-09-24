import NavigationBar from '@components/NavigationBar';
import SideBar from '@components/SideBar';
import { NavermapsProvider } from 'react-naver-maps';

import NaverMapContainer from './NaverMapContainer';
import * as S from './styles';
function Mainpage() {
  const naverMapClientId = import.meta.env.VITE_NAVER_MAP_CLIENT_ID;

  return (
    <>
      <S.SideWrapper>
        <NavigationBar />
        <SideBar />
      </S.SideWrapper>
      <NavermapsProvider ncpClientId={naverMapClientId}>
        <NaverMapContainer />
      </NavermapsProvider>
    </>
  );
}

export default Mainpage;
