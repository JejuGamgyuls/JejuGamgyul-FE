import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import BusDetail from './BusDetail';
import BusDetailDirection from './BusDetailDirection';
import BusRoute from './BusRoute';
import Header from './Header';

function BusDetailInfo() {
  const { busNumber } = useParams();
  const [busInfo, setBusInfo] = useState(null);
  const [stations, setStations] = useState([]);

  const fetchBusInfo = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/getBusRouteList?strSrch=${busNumber}`,
      );
      const data = response.data.msgBody.itemList[0];
      setBusInfo(data);
    } catch (err) {
      console.log('API 호출에 실패했습니다.');
    }
  };

  const fetchStationsByRoute = async () => {
    if (!busInfo || !busInfo.busRouteId) return;
    try {
      const busRouteId = busInfo.busRouteId;
      const response = await axios.get(
        `http://localhost:8080/getStaionByRoute?busRouteId=${busRouteId}`,
        {},
      ); // 정류장 정보 호출
      const stationData = response.data.msgBody.itemList;
      setStations(stationData);
    } catch (err) {
      console.log('정류장 정보 API 호출에 실패했습니다.');
    }
  };
  useEffect(() => {
    fetchBusInfo();
  }, [busNumber]);

  useEffect(() => {
    if (busInfo && busInfo.busRouteId) {
      fetchStationsByRoute();
    }
  }, [busInfo]);

  if (!busInfo) {
    return <div>Loading...</div>; // 데이터 로딩 중 처리
  }
  return (
    <div>
      <Header busInfo={busInfo} />
      <BusDetail busInfo={busInfo} />
      <BusDetailDirection busInfo={busInfo} />
      <BusRoute stations={stations} />
    </div>
  );
}

export default BusDetailInfo;
