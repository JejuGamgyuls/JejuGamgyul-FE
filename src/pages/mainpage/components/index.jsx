import filtered_stops from '@assets/busLocationInfo/filtered_stops.json';

import BusStopItem from './BusStopItem';
import CurrentLocationHeader from './CurrentLocationHeader';
function BusStopsAround() {
  return (
    <div>
      <CurrentLocationHeader />
      {filtered_stops.map((busStop, index) => (
        <BusStopItem
          key={index}
          busStopName={busStop.stopsNm}
          busStopNumber={busStop.stopsNo}
          busDirection={busStop.direction}
        />
      ))}
    </div>
  );
}

export default BusStopsAround;
