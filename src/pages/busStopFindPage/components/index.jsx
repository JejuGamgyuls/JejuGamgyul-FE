import filtered_stops from '@assets/busLocationInfo/filtered_stops.json';
import BusStopItem from '@pages/mainpage/components/BusStopItem';
import { useParams } from 'react-router-dom';
function BusStopFind() {
  const { busStopName } = useParams();
  const busStopFound = filtered_stops.filter((busStop) => {
    return busStop.stopsNm.includes(busStopName);
  });

  return (
    <div>
      {busStopFound.map((busStop, index) => (
        <BusStopItem
          key={index}
          busStopName={busStop.stopsNm}
          busStopNumber={busStop.stopsNo}
          busDirection={busStop.direction}
          busStopId={busStop.nodeId}
        />
      ))}
    </div>
  );
}

export default BusStopFind;
