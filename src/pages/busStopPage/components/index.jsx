import { useEffect, useState } from 'react';
import styled from 'styled-components';

import BusInfoItem from './BusInfoItem';
import BusStopHeader from './BusStopHeader';
import { getLowArrInfoByStId } from '../../../apis/favorite';

function BusStopInfo({ busStopId }) {
  const [busInfoList, setBusInfoList] = useState([]);
  const [reloadTime, setReloadTime] = useState(new Date());
  const [soonArrivalBus, setSoonArrivalBus] = useState([]);
  const fetchBusInfo = async () => {
    try {
      const busData = await getLowArrInfoByStId(busStopId); // 예시 stId 사용
      setBusInfoList(busData);
      if (busData.arrmsg1 === '곧 도착') {
        setSoonArrivalBus((prev) => [...prev, busData.busRouteAbrv]);
      }
    } catch (error) {
      console.error('Error fetching bus info:', error);
    }
  };

  useEffect(() => {
    setSoonArrivalBus([]);
    fetchBusInfo();

    const intervalId = setInterval(() => {
      setReloadTime(new Date());
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Wrapper>
      <BusStopHeader soonArrivalBus={soonArrivalBus} reloadTime={reloadTime} />
      <ItemWrapper>
        {busInfoList.map((busInfo, index) => (
          <BusInfoItem key={index} {...busInfo} />
        ))}
      </ItemWrapper>
    </Wrapper>
  );
}

export default BusStopInfo;
const Wrapper = styled.div`
  flex-direction: column;
  align-items: center;
  width: 390px;
  background-color: var(--Gray01, fff);
`;
const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0 20px;
  box-sizing: border-box;
  padding-top: 160px;
  overflow-y: scroll;
  background-color: #fff;
`;
