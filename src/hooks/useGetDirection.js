import axios from 'axios';
import { useState, useEffect } from 'react';

const useGetDirection = (busRouteId) => {
  const [direction, setDirection] = useState({ from: '', to: '' });
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDirection = async () => {
      try {
        const res = await axios.get('http://localhost:8080/getRouteInfo', {
          params: {
            busRouteId: busRouteId,
          },
        });

        setDirection({
          from: res.data.msgBody.itemList[0].stStationNm,
          to: res.data.msgBody.itemList[0].edStationNm,
        });
      } catch (e) {
        setError(e);
      }
    };
    getDirection();
  }, [busRouteId]);

  return { direction, error };
};

export default useGetDirection;
