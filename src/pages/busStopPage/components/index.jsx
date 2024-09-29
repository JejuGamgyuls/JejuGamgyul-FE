import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import BusInfoItem from './BusInfoItem';
import BusStopHeader from './BusStopHeader';
import { getLowArrInfoByStId } from '../api';

function BusStopInfo() {
  const location = useLocation();
  const [busInfoList, setBusInfoList] = useState([]);
  const [reloadTime, setReloadTime] = useState(new Date());

  const queryParams = new URLSearchParams(location.search);
  const busStopId = queryParams.get('busStopId');

  const fetchBusInfo = async () => {
    if (!busStopId) return;
    try {
      const busData = await getLowArrInfoByStId(busStopId); // 예시 stId 사용
      setBusInfoList(busData);
    } catch (error) {
      console.error('Error fetching bus info:', error);
    }
  };

  useEffect(() => {
    fetchBusInfo();

    const intervalId = setInterval(() => {
      setReloadTime(new Date());
      fetchBusInfo();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [busStopId]);

  return (
    <div>
      <BusStopHeader reloadTime={reloadTime} />
      {busInfoList.map((busInfo, index) => (
        <BusInfoItem key={index} {...busInfo} />
      ))}
    </div>
  );
}

export default BusStopInfo;
