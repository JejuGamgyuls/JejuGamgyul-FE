<<<<<<< HEAD
import { navigationBarState, scrollByDirectionState } from '@atoms/navigationBarState';
=======
import { navigationBarState, scrollByDirectionState } from '@atoms/NavigationBarState';
>>>>>>> 25e2279 (JG-23 Feat: 종점 방향 선택 시 SideBar 내에서 상단으로 이동)
import { CATEGORY } from '@constants/const';
import BusDetailInfo from '@pages/busFindpage/components';
import BusStopInfo from '@pages/busStopFindPage/components';
import Favorites from '@pages/FavoritesPage/components';
import BusStopsAround from '@pages/mainpage/components';
import { useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

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
<<<<<<< HEAD

  const Component = SIDE_BAR_MAP[category];
  const busStopId = new URLSearchParams(window.location.search).get('busStopId');

=======
>>>>>>> 25e2279 (JG-23 Feat: 종점 방향 선택 시 SideBar 내에서 상단으로 이동)
  const [, setScrollPosition] = useState(0);
  const selectedDirection = useRecoilValue(scrollByDirectionState);
  const scrollRef = useRef();

  const setScrollToPosition = (position) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: position,
        behavior: 'smooth',
      });
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setScrollPosition(scrollRef.current.scrollTop);
      }
    };

    const currentRef = scrollRef.current;

    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  useEffect(() => {
    if (selectedDirection == 'end') {
      setScrollToPosition(292);
    }
  }, [selectedDirection]);

  return (
    <S.Wrapper>
      {category !== CATEGORY.FAVORITE && <FindBusInput />}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 895f4c3 (Chore: 오타 수정)
      <S.BusStopItemWrapper ref={scrollRef}>
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

      {/* <S.Wrapper>
      {category !== CATEGORY.FAVORITE && <FindBusInput />}
      <S.BusStopItemWrapper ref={scrollRef}>{SIDE_BAR_MAP[category]()}</S.BusStopItemWrapper> */}
=======
      <S.BusStopItemWrapper ref={scrollRef}>{SIDE_BAR_MAP[category]()}</S.BusStopItemWrapper>
>>>>>>> 25e2279 (JG-23 Feat: 종점 방향 선택 시 SideBar 내에서 상단으로 이동)
    </S.Wrapper>
  );
}
export default SideBar;
