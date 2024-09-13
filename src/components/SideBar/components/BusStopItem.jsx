import BlueBusIcon from '@assets/svg/BlueBusIcon.svg?react';
import FavoriteIcon from '@assets/svg/FavoriteIcon.svg?react';
import { STYLE } from '@constants/const';
import styled from 'styled-components';
function BusStopItem() {
  return (
    <Wrapper>
      <BusItemWrapper>
        <NameWrapper>
          <BlueBusIcon width={30} height={30} />
          <BusStopName>선릉역</BusStopName>
        </NameWrapper>
        <BusStopInfo>
          <BusStopNumber>23259</BusStopNumber>
          <BusDirection> 포스코빌딩 방면</BusDirection>
        </BusStopInfo>
      </BusItemWrapper>
      <IconWrapper>
        <FavoriteIcon width={20} height={20} fill="black" />
      </IconWrapper>
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
  line-height: normal;
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
