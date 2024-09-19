import { Container as MapDiv } from 'react-naver-maps';

import Map from './Map';

function NaverMapContainer() {
  return (
    <MapDiv
      style={{
        width: 'calc(100vw - 450px)',
        height: '100vh',
        position: 'absolute',
        right: 0,
      }}
    >
      <Map />
    </MapDiv>
  );
}

export default NaverMapContainer;
