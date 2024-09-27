import instance from '@apis/axiosInstance';
import axios from 'axios';

export const getLowArrInfoByStId = async (stId) => {
  try {
    const res = await axios.get('http://localhost:8080/getLowArrInfoByStId', {
      params: {
        stId: stId,
      },
    });
    const data = res.data.msgBody.itemList.filter(
      (item) => item.arrmsg1 !== '출발대기' && item.arrmsg1 !== '운행종료',
    );
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const handleGetFavorites = () => {
  return instance
    .get('/favorites/getByUserToken', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((res) => res.json());
};

export const handleAddFavorite = (busStopId, busStopName, rtNm, busRouteId) => {
  return instance
    .post(
      '/favorites/add',
      {
        busStopId: busStopId,
        busStopName: busStopName,
        routeName: rtNm,
        routeId: busRouteId,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      },
    )
    .then((res) => res.json());
};

export const handleCancelFavorite = (busStopId, busRouteId) => {
  return instance
    .delete('/favorites/delete', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      params: {
        busStopId: busStopId,
        routeid: busRouteId,
      },
    })
    .then((res) => res.json());
};

