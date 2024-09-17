import { navigationBarState } from '@atoms/navigationBarState';
import { CATEGORY } from '@constants/const';
import BusDetailInfo from '@pages/busFindpage/components';
import BusStopsAround from '@pages/mainpage/components';
import { useRecoilState } from 'recoil';

import FindBusInput from './components/FindBusInput';
import * as S from './styles';

const SIDE_BAR_MAP = {
  [CATEGORY.HOME]: BusStopsAround,
  [CATEGORY.FAVORITE]: () => <div>즐겨찾기</div>,
  [CATEGORY.TIMETABLE]: () => <div>시간표</div>,
  [CATEGORY.MYINFO]: () => <div>내 정보</div>,
  [CATEGORY.BUSDETAILINFO]: BusDetailInfo,
};

function SideBar() {
  const [category] = useRecoilState(navigationBarState);
  return (
    <S.Wrapper>
      <FindBusInput />
      <S.BusStopItemWrapper>{SIDE_BAR_MAP[category]()}</S.BusStopItemWrapper>
    </S.Wrapper>
  );
}

export default SideBar;
