import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import BusDetail from './BusDetail';
import BusDetailDirection from './BusDetailDirection';
import BusRoute from './BusRoute';
import Header from './Header';

function BusDetailInfo() {
  const [direction, setDirection] = useState('');
  const { busNumber } = useParams();
  const [busInfo, setBusInfo] = useState(null);

  useEffect(() => {
    const fetchBusInfo = async () => {
      try {
        const response = await axios.get('/getRouteInfo', {});
        const data = response.data.msgBody.itemList[0];
        console.log(data);
        setBusInfo(data);
      } catch (err) {
        console.log('API 호출에 실패했습니다.');
      }
    };
    fetchBusInfo();
  }, [busNumber]);

  if (!busInfo) {
    return <div>Loading...</div>; // 데이터 로딩 중 처리
  }
  return (
    <div>
      <Header busInfo={busInfo} />
      <BusDetail busInfo={busInfo} />
      <BusDetailDirection busInfo={busInfo} setDirection={setDirection} />
      <BusRoute />
    </div>
  );
}

export default BusDetailInfo;
