import instance from '@apis/axiosInstance';
import axios from 'axios';

export const getLowArrInfoByStId = async (stId) => {
  try {
    const res = await axios.get('http://localhost:8080/getLowArrInfoByStId', {
      params: {
        stId: stId,
      },
    });

    const data = res.data.msgBody.itemList;
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

/**
 * @typedef {Object} FavoritBusInfo
 * @property {string} busStopId
 * @property {string} busStopName
 * @property {string} routeId
 * @property {string} routeName
 * @property {string} userId
 */

/**
 *
 * @returns {FavoritBusInfo[]}
 */
export const getAllFavorites = async () =>
  (
    await axios.get('http://localhost:8080/favorites/getByUserToken', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
  ).data;
