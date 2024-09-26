import { navigationBarState, scrollByDirectionState } from '@atoms/NavigationBarState';
import { CATEGORY } from '@constants/const';
import BusDetailInfo from '@pages/busFindpage/components';
import BusStopFindPage from '@pages/busStopPage';
import BusStopInfo from '@pages/busStopPage/components';
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
  [CATEGORY.BUSSTOPFIND]: () => <BusStopFindPage />,
};

function SideBar() {
  const [category] = useRecoilState(navigationBarState);
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

  const Component = SIDE_BAR_MAP[category];
  const busStopId = new URLSearchParams(window.location.search).get('busStopId');

  return (
    <S.Wrapper>
      {category !== CATEGORY.FAVORITE && <FindBusInput />}
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
    </S.Wrapper>
  );
}
export default SideBar;
