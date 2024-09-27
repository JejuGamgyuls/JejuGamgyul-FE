import filtered_stops from '@assets/busLocationInfo/filtered_stops.json';
import CloseIcon from '@assets/svg/CloseIcon.svg?react';
import { geolocationOptions } from '@constants/const';
import useCurrentLocation from '@hooks/useCurrentLocation.js';
import { useState } from 'react';
import { Marker, NaverMap, useNavermaps } from 'react-naver-maps';
import styled from 'styled-components';
function Map() {
  const [selectedStop, setSelectedStop] = useState(null);
  const navermaps = useNavermaps();
  const { location: currentLocation, error: currentError } = useCurrentLocation(geolocationOptions);
  if (currentError) {
    return <div>Error: {currentError.message}</div>;
  }

  if (!currentLocation) {
    return <div>Loading...</div>;
  }
  const { latitude, longitude } = currentLocation;

  const handleMarkerClick = (stop) => {
    console.log(stop);
    setSelectedStop(stop);
  };
  const handleCloseModal = () => {
    setSelectedStop(null);
  };
  return (
    <NaverMap defaultCenter={new navermaps.LatLng(latitude, longitude)} defaultZoom={16}>
      <Marker position={new navermaps.LatLng(latitude, longitude)} />
      {selectedStop && (
        <BusStopInfoModal>
          <Wrapper>
            <NameWrapper>
              <BusStopName>{selectedStop.stopsNm}</BusStopName>
              <IconWrapper onClick={handleCloseModal}>
                <CloseIcon />
              </IconWrapper>
            </NameWrapper>
            <BusStopInfoWrapper>
              <BusStopNumber>{selectedStop.stopsNo}</BusStopNumber>
              <Bar />
              <Direction>{selectedStop.direction} 방면</Direction>
            </BusStopInfoWrapper>
          </Wrapper>
        </BusStopInfoModal>
      )}
      {filtered_stops.map((stop) => (
        <Marker
          key={stop.stopsNo}
          position={{ lat: parseFloat(stop.ycrd), lng: parseFloat(stop.xcrd) }}
          title={stop.stops_nm}
          onClick={() => handleMarkerClick(stop)}
        />
      ))}
    </NaverMap>
  );
}

const BusStopInfoModal = styled.div`
  width: 330px;
  background: #fff;
  position: absolute;
  padding: 17px 20px;
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Wrapper = styled.div`
  width: 280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const NameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 17px;
  font-weight: bold;
  color: #000;
`;
const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
const BusStopName = styled.div``;
const BusStopInfoWrapper = styled.div`
  display: flex;
  gap: 8px;
  font-size: 12px;
  color: #919191;
  align-items: center;
`;

const BusStopNumber = styled.div``;
const Bar = styled.div`
  width: 1px;
  height: 10px;
  background: #e2e2e2;
`;
const Direction = styled.div``;
export default Map;
