import { navigationBarState } from '@atoms/navigationBarState';
import { CATEGORY } from '@constants/const';
import BusDetailInfo from '@pages/busFindpage/components';
import BusStopInfo from '@pages/busStopFindPage/components';
import Favorites from '@pages/FavoritesPage/components';
import BusStopsAround from '@pages/mainpage/components';
import { useRecoilState } from 'recoil';

import FindBusInput from './components/FindBusInput';
import * as S from './styles';

const SIDE_BAR_MAP = {
  [CATEGORY.HOME]: () => <BusStopsAround />,
  [CATEGORY.FAVORITE]: () => <Favorites />,
  [CATEGORY.TIMETABLE]: () => <div>시간표</div>,
  [CATEGORY.MYINFO]: () => <div>내 정보</div>,
  [CATEGORY.BUSDETAILINFO]: () => <BusDetailInfo />,
  [CATEGORY.BUSSTOPINFO]: (busStopId) => <BusStopInfo busStopId={busStopId.busStopId} />,
};

function SideBar() {
  const [category] = useRecoilState(navigationBarState);

  const Component = SIDE_BAR_MAP[category];
  const busStopId = new URLSearchParams(window.location.search).get('busStopId');
  return (
    <S.Wrapper>
      {category !== CATEGORY.FAVORITE && <FindBusInput />}
      <S.BusStopItemWrapper>
        {Component ? (
          category === CATEGORY.BUSSTOPINFO ? (
            <Component busStopId={busStopId} />
          ) : (
            <Component />
          )
        ) : (
          <div>카테고리 없음</div>
        )}
      </S.BusStopItemWrapper>
    </S.Wrapper>
  );
}
export default SideBar;
