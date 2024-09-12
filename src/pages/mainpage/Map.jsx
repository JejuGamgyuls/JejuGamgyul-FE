import { getAddressFromCoordinates } from '@apis/kakao/kakaoService.js';
import useCurrentLocation from '@hooks/useCurrentLocation.js';
import { useEffect, useState } from 'react';
import { Marker, NaverMap, useNavermaps } from 'react-naver-maps';

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 60 * 1, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
  maximumAge: 1000 * 3600 * 24, // 24 hour
};

function Map() {
  const [address, setAddress] = useState(null);
  const [error, setError] = useState(null);

  const navermaps = useNavermaps();
  const { location: currentLocation, error: currentError } = useCurrentLocation(geolocationOptions);

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

  if (currentError) {
    return <div>Error: {currentError.message}</div>;
  }

  if (!currentLocation) {
    return <div>Loading...</div>;
  }
  const { latitude, longitude } = currentLocation;

  return (
    <NaverMap defaultCenter={new navermaps.LatLng(latitude, longitude)} defaultZoom={16}>
      <Marker position={new navermaps.LatLng(latitude, longitude)} />
    </NaverMap>
  );
}

export default Map;
