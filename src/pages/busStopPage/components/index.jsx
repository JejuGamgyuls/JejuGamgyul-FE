import loadingImage from '@assets/png/loading.png';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import BusInfoItem from './BusInfoItem';
import BusStopHeader from './BusStopHeader';
import { getLowArrInfoByStId } from '../../../apis/favorite';

function BusStopInfo() {
  const location = useLocation();
  const [busInfoList, setBusInfoList] = useState([]);
  const [reloadTime, setReloadTime] = useState(new Date());

  const queryParams = new URLSearchParams(location.search);
  const busStopId = queryParams.get('busStopId');

  const [soonArrivalBus, setSoonArrivalBus] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchBusInfo = async () => {
    if (!busStopId) return;
    try {
      setIsLoading(true);
      const busData = await getLowArrInfoByStId(busStopId); // 예시 stId 사용
      setBusInfoList(busData);
      if (busData.arrmsg1 === '곧 도착') {
        setSoonArrivalBus((prev) => [...prev, busData.busRouteAbrv]);
      }
      setIsLoading(false);
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
  }, [busStopId]);

  return (
    <Wrapper>
      <BusStopHeader soonArrivalBus={soonArrivalBus} reloadTime={reloadTime} />
      {isLoading ? (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      ) : (
        <ItemWrapper>
          {busInfoList.map((busInfo, index) => (
            <BusInfoItem key={index} {...busInfo} />
          ))}
        </ItemWrapper>
      )}
    </Wrapper>
  );
}

export default BusStopInfo;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: calc(100% - 40px);
  position: absolute;
`;
const Loading = styled.div`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 48px;
  height: 48px;
  background-image: url(${loadingImage});
  background-size: cover;
  background-position: center;
  animation: spin 1s infinite ease-in-out;

  @keyframes spin {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

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
