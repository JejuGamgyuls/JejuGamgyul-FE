import { geolocationOptions } from '@constants/const';
import useCurrentLocation from '@hooks/useCurrentLocation.js';
import { Marker, NaverMap, useNavermaps } from 'react-naver-maps';

function Map() {
  const navermaps = useNavermaps();
  const { location: currentLocation, error: currentError } = useCurrentLocation(geolocationOptions);
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
