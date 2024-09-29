import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import BusDetail from './BusDetail';
import BusDetailDirection from './BusDetailDirection';
import BusRoute from './BusRoute';
import Header from './Header';

function BusDetailInfo() {
  const [direction, setDirection] = useState('');

  const { busNumber } = useParams();
  const [busInfo, setBusInfo] = useState(null);
  const [stations, setStations] = useState([]);

  const fetchBusInfo = async (strSrch) => {
    try {
      const response = await axios.get('http://localhost:8080/getBusRouteList', {
        params: { strSrch },
      });
      const data = response.data.msgBody.itemList[0];
      setBusInfo(data);
    } catch (err) {
      console.log('API 호출에 실패했습니다.');
    }
  };

  const fetchStationsByRoute = async (busRouteId) => {
    if (!busInfo || !busInfo.busRouteId) return;
    try {
      const response = await axios.get('http://localhost:8080/getStaionByRoute', {
        params: { busRouteId },
      }); // 정류장 정보 호출
      const stationData = response.data.msgBody.itemList;
      setStations(stationData);
    } catch (err) {
      console.log('정류장 정보 API 호출에 실패했습니다.');
    }
  };

  const fetchBusPosition = async (busRouteId) => {
    try {
      const response = await axios.get('http://localhost:8080/getBusPosition', {
        params: { busRouteId },
      });
    } catch (err) {
      console.log('API 호출에 실패했습니다.');
    }
  };
  useEffect(() => {
    fetchBusInfo(busNumber);
  }, [busNumber]);

  useEffect(() => {
    if (busInfo && busInfo.busRouteId) {
      fetchStationsByRoute(busInfo.busRouteId);
      fetchBusPosition(busInfo.busRouteId);
    }
  }, [busInfo]);

  if (!busInfo) {
    return <div>Loading...</div>; // 데이터 로딩 중 처리
  }
  return (
    <div>
      <Header busInfo={busInfo} />
      <BusDetail busInfo={busInfo} />
      <StickyWrapper>
        <BusDetailDirection busInfo={busInfo} />
      </StickyWrapper>
      <BusRoute stations={stations} />
    </div>
  );
}

export default BusDetailInfo;

const StickyWrapper = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 100;
`;
