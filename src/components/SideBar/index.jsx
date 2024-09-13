import BusStopItem from './components/BusStopItem';
import CurrentLocationHeader from './components/CurrentLocationHeader';
import FindBusInput from './components/FindBusInput';
import * as S from './styles';
function SideBar() {
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
    <S.Wrapper>
      <FindBusInput />
      <CurrentLocationHeader />
      <S.BusStopItemWrapper>
        {busStopList.map((busStop, index) => (
          <BusStopItem
            key={index}
            busStopName={busStop.busStopName}
            busStopNumber={busStop.busStopNumber}
            busDirection={busStop.busDirection}
          />
        ))}
      </S.BusStopItemWrapper>
    </S.Wrapper>
  );
}

export default SideBar;
