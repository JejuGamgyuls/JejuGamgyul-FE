import { getAddressFromCoordinates } from '@apis/kakao/kakaoService';
import { geolocationOptions } from '@constants/const';
import { useEffect, useState } from 'react';

import useCurrentLocation from './useCurrentLocation';

const useAddress = () => {
  const [address, setAddress] = useState(null);
  const [error, setError] = useState(null);

  const { location: currentLocation } = useCurrentLocation(geolocationOptions);

  useEffect(() => {
    const fetchAddress = async (lat, lng) => {
      try {
        const result = await getAddressFromCoordinates(lat, lng);
        console.log(result);
        setAddress(result);
      } catch (err) {
        setError(err);
      }
    };

    if (currentLocation?.latitude && currentLocation?.longitude) {
      fetchAddress(currentLocation.latitude, currentLocation.longitude); // 비동기 호출
    }
  }, [currentLocation]);

  return { address, error };
};

export default useAddress;
