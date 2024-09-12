import NavigationBar from '@components/NavigationBar/NavigationBar';
import { NavermapsProvider } from 'react-naver-maps';

import NaverMapContainer from './NaverMapContainer';

function Mainpage() {
  const naverMapClientId = import.meta.env.VITE_NAVER_MAP_CLIENT_ID;

  return (
    <>
      <NavigationBar />
      <NavermapsProvider ncpClientId={naverMapClientId}>
        <NaverMapContainer />
      </NavermapsProvider>
    </>
  );
}

export default Mainpage;
