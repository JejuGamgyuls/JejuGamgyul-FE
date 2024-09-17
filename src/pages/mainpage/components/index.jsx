import BusStopItem from './BusStopItem';
import CurrentLocationHeader from './CurrentLocationHeader';

function BusStopsAround() {
  const busStopList = [
    {
      busStopName: '서울역',
      busStopNumber: '1234',
      busDirection: '서울역 방향',
    },
    {
      busStopName: '서울역',
      busStopNumber: '1234',
      busDirection: '서울역 방향',
    },
    {
      busStopName: '서울역',
      busStopNumber: '1234',
      busDirection: '서울역 방향',
    },
    {
      busStopName: '서울역',
      busStopNumber: '1234',
      busDirection: '서울역 방향',
    },
    {
      busStopName: '서울역',
      busStopNumber: '1234',
      busDirection: '서울역 방향',
    },
    {
      busStopName: '서울역',
      busStopNumber: '1234',
      busDirection: '서울역 방향',
    },
    {
      busStopName: '서울역',
      busStopNumber: '1234',
      busDirection: '서울역 방향',
    },
    {
      busStopName: '서울역',
      busStopNumber: '1234',
      busDirection: '서울역 방향',
    },
    {
      busStopName: '서울역',
      busStopNumber: '1234',
      busDirection: '서울역 방향',
    },
    {
      busStopName: '서울역',
      busStopNumber: '1234',
      busDirection: '서울역 방향',
    },
  ];
  return (
    <div>
      <CurrentLocationHeader />
      {busStopList.map((busStop, index) => (
        <BusStopItem
          key={index}
          busStopName={busStop.busStopName}
          busStopNumber={busStop.busStopNumber}
          busDirection={busStop.busDirection}
        />
      ))}
    </div>
  );
}

export default BusStopsAround;
