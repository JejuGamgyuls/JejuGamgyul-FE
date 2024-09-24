import NavigationBar from '@components/NavigationBar';
import SideBar from '@components/SideBar';
import axios from 'axios';
import { NavermapsProvider } from 'react-naver-maps';

import NaverMapContainer from './NaverMapContainer';
import * as S from './styles';
function Mainpage() {
  const naverMapClientId = import.meta.env.VITE_NAVER_MAP_CLIENT_ID;
  const apitest = async () => {
    const response = await axios.get('/getRouteInfo', {});
    const data = response;
    console.log(data);
  };
  return (
    <>
      <S.SideWrapper>
        <button onClick={apitest}>api test</button>
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
