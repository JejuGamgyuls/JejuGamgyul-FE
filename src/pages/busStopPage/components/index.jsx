import { useEffect, useState } from 'react';

import BusInfoItem from './BusInfoItem';
import BusStopHeader from './BusStopHeader';
import { getLowArrInfoByStId } from '../api';

function BusStopInfo({ busStopId }) {
  const [busInfoList, setBusInfoList] = useState([]);
  const [reloadTime, setReloadTime] = useState(new Date());

  const fetchBusInfo = async () => {
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
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

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
