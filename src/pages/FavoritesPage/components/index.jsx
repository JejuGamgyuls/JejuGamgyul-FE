import * as busApi from '@pages/busStopPage/api';
import BusInfoItem from '@pages/busStopPage/components/BusInfoItem';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import FavoriteItem from './FavoriteItem';
import Header from './Header';

/**
 * @typedef {Object} busInfoList[]
 * @property {string} arsId
 * @property {string} busRouteId
 * @property {string} busRouteNm
 * @property {string} busType1
 * @property {string} busType2
 * @property {string} exps1
 * @property {string} exps2
 * @property {string} full1
 * @property {string} full2
 * @property {string} isArrive1
 * @property {string} isArrive2
 * @property {string} isLast1
 * @property {string} isLast2
 * @property {string} plainNo1
 * @property {string} plainNo2
 * @property {string} rtNm
 * @property {string} sectOrd1
 * @property {string} sectOrd2
 * @property {string} stId
 * @property {string} stNm
 * @property {string} staOrd
 * @property {string} stationNm1
 * @property {string} stationNm2
 * @property {string} term
 * @property {string} traSpd1
 * @property {string} traSpd2
 * @property {string} traTime1
 * @property {string} traTime2
 * @property {string} vehId1
 * @property {string} vehId2
 */
/**
 * @type {busInfoList[]}
 */

function Favorites() {
  const [isLoading, setIsLoading] = useState(true);

  /**
   * @typedef {Object} busInfoList[]
   * @property {string} arsId
   * @property {string} busRouteId
   * @property {string} busRouteNm
   * @property {string} busType1
   * @property {string} busType2
   * @property {string} exps1
   * @property {string} exps2
   * @property {string} full1
   * @property {string} full2
   * @property {string} isArrive1
   * @property {string} isArrive2
   * @property {string} isLast1
   * @property {string} isLast2
   * @property {string} plainNo1
   * @property {string} plainNo2
   * @property {string} rtNm
   * @property {string} sectOrd1
   * @property {string} sectOrd2
   * @property {string} stId
   * @property {string} stNm
   * @property {string} staOrd
   * @property {string} stationNm1
   * @property {string} stationNm2
   * @property {string} term
   * @property {string} traSpd1
   * @property {string} traSpd2
   * @property {string} traTime1
   * @property {string} traTime2
   * @property {string} vehId1
   * @property {string} vehId2
   */
  /**
   * @type {busInfoList[]}
   */

  const [busInfoList, setBusInfoList] = useState([]);

  /**
   * @typedef {Object} busData[]
   * @property {string} busStopId
   * @property {string} busStopName
   * @property {string} routeId
   * @property {string} routeName
   * @property {string} userId
   */
  const [busData, setBusData] = useState([]);
  const refreshFavoritBusInfo = async () => {
    try {
      setBusInfoList([]);
      setIsLoading(true);
      const data = await busApi.getAllFavorites();
      console.log('DATA', data); //debug
      setBusData(data);
      await Promise.all(
        data.map(async ({ busStopId, routeId }) => {
          const busData = await busApi.getLowArrInfoByStId(busStopId);
          const newData = busData.filter((bus) => bus.busRouteId === routeId);
          console.log('NEW DATA', newData); //debug
          setBusInfoList((prev) => [...prev, ...newData]);
        }),
      );
      setIsLoading(false);
    } catch (e) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    refreshFavoritBusInfo();
  }, []);

  useEffect(() => {
    if (busInfoList) {
      console.log(busInfoList); //debug
    }
  }, [busInfoList]);

  return (
    <Wrapper>
      <Header />
      <BodyWrapper>
        {isLoading ? (
          <div>로딩중</div>
        ) : (
          <div>
            {busInfoList.map(
              (busInfo, index) => (
                console.log(busInfo), (<FavoriteItem key={index} {...busInfo} />)
              ),
            )}
          </div>
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
  background-color: var(--Gray01, #fafafa);
`;
const BodyWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 390px;
  overflow-y: auto;
`;
