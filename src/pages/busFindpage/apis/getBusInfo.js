import instance from '@apis/axiosInstance';
import { parseStringPromise } from 'xml2js';

// 버스 번호에 대한 상세 정보를 가져오는 API
export const getBusRouteInfo = async () => {
  const key = import.meta.env.VITE_ENCODED;
  try {
    const res = await instance
      .get(`http://localhost:8080/bus-route?ServiceKey=${key}&busRouteId=100100181`)
      .then((res) => {
        parseStringPromise(res.data).then((result) => {
          console.log(result);
        });
      });
    console.log(res);
  } catch (e) {
    throw new Error('API 호출에 실패했습니다.');
  }
};

// 전체 정보를 가져오는 API
export const getLowBusInfo = async () => {
  try {
    const res = await instance.get(`http://ws.bus.go.kr/api/rest/arrive/getArrInfoByRouteAll`);
    console.log(res);
  } catch (e) {
    throw new Error('API 호출에 실패했습니다.');
  }
};
