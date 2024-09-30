import * as busApi from '@apis/favorite';
import loadingImage from '@assets/png/loading.png';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import FavoriteItem from './FavoriteItem';
import Header from './Header';

function Favorites() {
  const [isLoading, setIsLoading] = useState(true);
  const [reloadTime, setReloadTime] = useState(new Date());
  const [favBusCnt, setFavBusCnt] = useState(0);
  const [busInfoList, setBusInfoList] = useState([]);
  const [isCancelFavorite, setIsCancelFavorite] = useState(false);

  useEffect(() => {
    refreshFavoritBusInfo();
  }, [isCancelFavorite]);

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
          // setBusInfoList([]);
          setBusInfoList((prev) => [...prev, ...newData]);
        }),
      );
      setIsLoading(false);
      setIsCancelFavorite(false);
    } catch (e) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  useEffect(() => {
    setFavBusCnt(0);
    refreshFavoritBusInfo();

    const intervalId = setInterval(() => {
      setReloadTime(new Date());
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    console.log('busInfoList', busInfoList);
  }, [busInfoList]);

  return (
    <Wrapper>
      <Header favBusCnt={busInfoList.length} reloadTime={reloadTime} />
      <BodyWrapper>
        {isLoading ? (
          <LoadingWrapper>
            <Loading />
          </LoadingWrapper>
        ) : (
          <ItemWrapper>
            {busInfoList.map((busInfo, index) => (
              <FavoriteItem key={index} {...busInfo} setIsCancelFavorite={setIsCancelFavorite} />
            ))}
          </ItemWrapper>
        )}
      </BodyWrapper>
    </Wrapper>
  );
}

export default Favorites;
const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: relative;
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
