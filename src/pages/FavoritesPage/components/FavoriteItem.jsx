import ThreeDot from '@assets/svg/ThreeDot.svg?react';
import styled from 'styled-components';

function FavoriteItem({
  stationName,
  stationNum,
  busDirection,
  routeType,
  busNum,
  arrMsg1,
  stopsLeft1,
  arrMsg2,
  stopsLeft2,
}) {
  return (
    <Wrapper>
      <ItemWrapper>
        <StationDetails>
          <StationInfo>
            <StationName>{stationName}</StationName>
            <StationId>{stationNum}</StationId>
          </StationInfo>
          <IconWrapper>
            <ThreeDot />
          </IconWrapper>
        </StationDetails>
        <DirectionDetails>{busDirection}</DirectionDetails>
        <MoreInfos>
          <BusInfo>
            <RouteTypeTag>{routeType}</RouteTypeTag>
            <BusNum>{busNum}</BusNum>
          </BusInfo>
          <ArrivalDetails>
            <ArrivalMessage>{arrMsg1}</ArrivalMessage>
            <StopsLeft>{stopsLeft1}</StopsLeft>
            <ArrivalMessage>{arrMsg2}</ArrivalMessage>
            <StopsLeft>{stopsLeft2}</StopsLeft>
          </ArrivalDetails>
        </MoreInfos>
      </ItemWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Pretendard;
  &:hover {
    background: var(--Gray01, #fafafa);
    cursor: pointer;
  }
`;
const ItemWrapper = styled.div`
  width: 332px;
  height: 71px;
  display: flex;
  flex-direction: column;
`;
const StationDetails = styled.div`
  width: 100%;
  height: 17px;
  display: flex;
  justify-content: space-between;
`;
const StationInfo = styled.div`
  display: flex;
  gap: 10px;
`;
const DirectionDetails = styled.div`
  width: 100%;
  height: 13px;
  padding-top: 6px;
  color: var(--Gray06, #767676);
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const MoreInfos = styled.div`
  width: 100%;
  height: 16px;
  padding-top: 17px;
  display: flex;
  justify-content: space-between;
`;
const StationName = styled.div`
  color: #000;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const StationId = styled.div`
  color: var(--Gray07, #595959);
  text-align: center;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;
`;
const IconWrapper = styled.div`
  width: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BusInfo = styled.div`
  width: 100px;
  display: flex;
  gap: 7px;
`;
const RouteTypeTag = styled.div`
  width: 32px;
  height: 16px;
  border-radius: 2px;
  background: var(--Blue, #386de8);
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 1px;
`;
const BusNum = styled.div`
  color: #000;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;
`;
const ArrivalDetails = styled.div`
  height: 16px;
  display: flex;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  gap: 5px;
  display: flex;
  align-items: center;
`;
const ArrivalMessage = styled.div`
  color: #f35252;
`;
const StopsLeft = styled.div`
  color: #767676;
  padding-right: 5px;
`;
export default FavoriteItem;
