import { useState } from 'react';

import BusDetail from './BusDetail';
import BusDetailDirection from './BusDetailDirection';
import BusRoute from './BusRoute';
import Header from './Header';

function BusDetailInfo() {
  const [direction, setDirection] = useState('청량리 방면');

  return (
    <div>
      <Header />
      <BusDetail />
      <BusDetailDirection direction={direction} setDirection={setDirection} />
      <BusRoute />
    </div>
  );
}

export default BusDetailInfo;
