import { navigationBarState } from '@atoms/navigationBarState';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import BusInfoItem from './BusInfoItem';
import BusStopHeader from './BusStopHeader';
import { getLowArrInfoByStId } from '../api';

function BusStopInfo({ busStopId }) {
  const [busInfoList, setBusInfoList] = useState([]);
  const fetchBusInfo = async () => {
    try {
      const busData = await getLowArrInfoByStId(busStopId); // 예시 stId 사용
      setBusInfoList(busData);
    } catch (error) {
      console.error('Error fetching bus info:', error);
    }
  };
  // setInterval(() => {
  //   console.log('render');
  //   fetchBusInfo();
  // }, 60000);

  useEffect(() => {
    fetchBusInfo();
  }, []);

  return (
    <div>
      <BusStopHeader />
      {busInfoList.map((busInfo, index) => (
        <BusInfoItem key={index} {...busInfo} />
      ))}
    </div>
  );
}

export default BusStopInfo;
