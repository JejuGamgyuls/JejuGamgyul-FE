import BusInfoItem from './BusInfoItem';
import BusStopHeader from './BusStopHeader';

function BusStopInfo() {
  const busInfoList = [
    {
      busNumber: 146,
      busDirection: '포스코빌딩 방면',
      loc: '서울',
      route: '상계주공7단지<->강남역',
      arrMsg1: '3분',
      stopsLeft1: '2정류장',
      arrMsg2: '11분',
      stopsLeft2: '5정류장',
    },
    {
      busNumber: 146,
      busDirection: '포스코빌딩 방면',
      loc: '서울',
      route: '상계주공7단지<->강남역',
      arrMsg1: '3분',
      stopsLeft1: '2정류장',
      arrMsg2: '11분',
      stopsLeft2: '5정류장',
    },
    {
      busNumber: 146,
      busDirection: '포스코빌딩 방면',
      loc: '서울',
      route: '상계주공7단지<->강남역',
      arrMsg1: '3분',
      stopsLeft1: '2정류장',
      arrMsg2: '11분',
      stopsLeft2: '5정류장',
    },
    {
      busNumber: 146,
      busDirection: '포스코빌딩 방면',
      loc: '서울',
      route: '상계주공7단지<->강남역',
      arrMsg1: '3분',
      stopsLeft1: '2정류장',
      arrMsg2: '11분',
      stopsLeft2: '5정류장',
    },
    {
      busNumber: 146,
      busDirection: '포스코빌딩 방면',
      loc: '서울',
      route: '상계주공7단지<->강남역',
      arrMsg1: '3분',
      stopsLeft1: '2정류장',
      arrMsg2: '11분',
      stopsLeft2: '5정류장',
    },
    {
      busNumber: 146,
      busDirection: '포스코빌딩 방면',
      loc: '서울',
      route: '상계주공7단지<->강남역',
      arrMsg1: '3분',
      stopsLeft1: '2정류장',
      arrMsg2: '11분',
      stopsLeft2: '5정류장',
    },
  ];
  return (
    <div>
      <BusStopHeader />
      {busInfoList.map((busInfo, index) => (
        <BusInfoItem key={index} {...busInfo} />
      ))}
    </div>
  );
}

export default BusStopInfo;
