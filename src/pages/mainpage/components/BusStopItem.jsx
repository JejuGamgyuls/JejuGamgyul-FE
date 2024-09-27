import BlueBusIcon from '@assets/svg/BlueBusIcon.svg?react';
import { navigationBarState } from '@atoms/NavigationBarState';
import { CATEGORY, STYLE } from '@constants/const';
import { ROUTE } from '@constants/route';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

function BusStopItem({ busStopName, busStopNumber, busDirection, busStopId }) {
  const navigate = useNavigate();
  const [, setCategory] = useRecoilState(navigationBarState);
  const navToBusStop = (busStopId) => {
    const stopRoute = ROUTE.BUSSTOP.replace(':busStopName', busStopName); // 정류장 검색
    setCategory(CATEGORY.BUSSTOPINFO);
    navigate(stopRoute + '?busStopId=' + busStopId);
  };
  return (
    <Wrapper onClick={() => navToBusStop(busStopId)}>
      <BusItemWrapper>
        <NameWrapper>
          <BlueBusIcon width={30} height={30} />
          <BusStopName>{busStopName}</BusStopName>
        </NameWrapper>
        <BusStopInfo>
          <BusStopNumber>{busStopNumber}</BusStopNumber>
          <BusDirection> {busDirection}</BusDirection>
        </BusStopInfo>
      </BusItemWrapper>
    </Wrapper>
  );
}

export default BusStopItem;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const BusItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: ${STYLE.BUS_STOP_ITEM_HEIGHT}px;
  display: flex;
  padding: 25px 24px 25px 16px;
  box-sizing: border-box;
  border-bottom: 1px solid #e5e5e5;
  justify-content: space-between;
  background-color: white;
`;
const NameWrapper = styled.div`
  display: flex;
  gap: 11px;
  display: flex;
  align-items: center;
`;
const BusStopName = styled.div`
  color: var(--Gray10, #000);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
`;

const BusStopNumber = styled.div`
  color: var(--Gray09, #333);
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const BusDirection = styled.div`
  color: var(--Gray09, #333);
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const BusStopInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 27px;
  margin-left: 42px;
`;
