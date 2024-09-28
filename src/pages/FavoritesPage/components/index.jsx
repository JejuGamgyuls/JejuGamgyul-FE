import * as busApi from '@pages/busStopPage/api';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import FavoriteItem from './FavoriteItem';
import Header from './Header';

function Favorites() {
  const [isLoading, setIsLoading] = useState(true);
  const [reloadTime, setReloadTime] = useState(new Date());
  const [favBusCnt, setFavBusCnt] = useState(0);
  const [busInfoList, setBusInfoList] = useState([]);

  const refreshFavoritBusInfo = async () => {
    try {
      setBusInfoList([]);
      setIsLoading(true);
      const data = await busApi.getAllFavorites();
      setFavBusCnt(data.length);
      await Promise.all(
        data.map(async ({ busStopId, routeId }) => {
          const busData = await busApi.getLowArrInfoByStId(busStopId);
          const newData = busData.filter((bus) => bus.busRouteId === routeId);
          setBusInfoList((prev) => [...prev, ...newData]);
        }),
      );
      setIsLoading(false);
    } catch (e) {
      throw new Error(e);
    }
  };
  useEffect(() => {
    setFavBusCnt(0);
    refreshFavoritBusInfo();

    const intervalId = setInterval(() => {
      setReloadTime(new Date());
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Wrapper>
      <Header favBusCnt={favBusCnt} reloadTime={reloadTime} />
      <BodyWrapper>
        {isLoading ? (
          <div>로딩중</div>
        ) : (
          <ItemWrapper>
            {busInfoList.map((busInfo, index) => (
              <FavoriteItem key={index} {...busInfo} />
            ))}
          </ItemWrapper>
        )}
      </BodyWrapper>
    </Wrapper>
  );
}

export default Favorites;
const Wrapper = styled.div`
  flex-direction: column;
  align-items: center;
  width: 390px;
  background-color: var(--Gray01, #fff);
`;
const BodyWrapper = styled.div`
  background-color: var(--Gray01, fff);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 390px;
  height: calc(100vh - 120px);
  overflow-y: auto;
  margin-top: 70px;
  background-color: var(--Gray01, #fff);
`;

const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0 20px;
  box-sizing: border-box;
  margin-top: 10px;
  background-color: var(--Gray01, #fff);
`;
