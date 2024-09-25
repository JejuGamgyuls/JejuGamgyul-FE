import { navigationBarState } from '@atoms/navigationBarState';
import NavigationBar from '@components/NavigationBar';
import SideBar from '@components/SideBar';
import { CATEGORY } from '@constants/const';
import { useEffect } from 'react';
import { NavermapsProvider } from 'react-naver-maps';
import { useRecoilState } from 'recoil';

import NaverMapContainer from './NaverMapContainer';
import * as S from './styles';
function Mainpage() {
  const naverMapClientId = import.meta.env.VITE_NAVER_MAP_CLIENT_ID;
  const [, setCategory] = useRecoilState(navigationBarState);
  
  useEffect(() => {
    if (location.pathname === '/') {
      setCategory(CATEGORY.HOME); // URL이 "/"일 때 category를 HOME으로 변경
    }
  }, [location.pathname, setCategory]);
  
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
