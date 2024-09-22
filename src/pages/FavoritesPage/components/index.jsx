import FavoriteItem from './FavoriteItem';
import Header from './Header';

function Favorites() {
  const favoritesList = [
    {
      stationName: '강남역12번출구',
      stationNum: '23284',
      busDirection: '포스코빌딩 방면',
      routeType: '간선',
      busNum: 146,
      arrMsg1: '3분',
      stopsLeft1: '2정류장',
      arrMsg2: '11분',
      stopsLeft2: '5정류장',
    },
    {
      stationName: '강남역12번출구',
      stationNum: '23284',
      busDirection: '포스코빌딩 방면',
      routeType: '간선',
      busNum: 146,
      arrMsg1: '3분',
      stopsLeft1: '2정류장',
      arrMsg2: '11분',
      stopsLeft2: '5정류장',
    },
    {
      stationName: '강남역12번출구',
      stationNum: '23284',
      busDirection: '포스코빌딩 방면',
      routeType: '간선',
      busNum: 146,
      arrMsg1: '3분',
      stopsLeft1: '2정류장',
      arrMsg2: '11분',
      stopsLeft2: '5정류장',
    },
    {
      stationName: '강남역12번출구',
      stationNum: '23284',
      busDirection: '포스코빌딩 방면',
      routeType: '간선',
      busNum: 146,
      arrMsg1: '3분',
      stopsLeft1: '2정류장',
      arrMsg2: '11분',
      stopsLeft2: '5정류장',
    },
    {
      stationName: '강남역12번출구',
      stationNum: '23284',
      busDirection: '포스코빌딩 방면',
      routeType: '간선',
      busNum: 146,
      arrMsg1: '3분',
      stopsLeft1: '2정류장',
      arrMsg2: '11분',
      stopsLeft2: '5정류장',
    },
  ];
  return (
    <div>
      <Header />
      {favoritesList.map((favoriteItem, index) => (
        <FavoriteItem key={index} {...favoriteItem} />
      ))}
    </div>
  );
}

export default Favorites;
