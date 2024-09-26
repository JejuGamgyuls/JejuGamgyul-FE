import filtered_stops from '@assets/busLocationInfo/filtered_stops.json';
import BusStopItem from '@pages/mainpage/components/BusStopItem';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
function BusStopFind() {
  const { busStopName } = useParams();
  const busStopFound = filtered_stops.filter((busStop) => {
    return busStop.stopsNm.includes(busStopName);
  });

  return (
    <Wrapper>
      {busStopFound.length !== 0 ? (
        busStopFound.map((busStop, index) => (
          <BusStopItem
            key={index}
            busStopName={busStop.stopsNm}
            busStopNumber={busStop.stopsNo}
            busDirection={busStop.direction}
            busStopId={busStop.nodeId}
          />
        ))
      ) : (
        <NoResult>검색 결과가 없습니다. {`:(`}</NoResult>
      )}
    </Wrapper>
  );
}

export default BusStopFind;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const NoResult = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
  font-size: 1.5rem;
  font-weight: 700;
`;
