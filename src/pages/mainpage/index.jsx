import { NavermapsProvider } from 'react-naver-maps';

<<<<<<< HEAD
import NaverMapContainer from './NaverMapContainer';
=======
import { Wrapper } from './style';
import UserIcon from '../../assets/svg/UserIcon.svg?react';
>>>>>>> 51ae5cc (JG-18 Fix: svg 폴더 위치 변경)

function Mainpage() {
  const naverMapClientId = import.meta.env.VITE_NAVER_MAP_CLIENT_ID;

  return (
<<<<<<< HEAD
    <>
      <NavermapsProvider ncpClientId={naverMapClientId}>
        <NaverMapContainer />
      </NavermapsProvider>
    </>
=======
    <Wrapper>
      <UserIcon />
      <NavigationBar />
    </Wrapper>
>>>>>>> 51ae5cc (JG-18 Fix: svg 폴더 위치 변경)
  );
}

export default Mainpage;
