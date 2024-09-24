import BlueBusIcon from '@assets/svg/BlueBusIcon.svg?react';
import useGetDirection from '@hooks/useGetDirection';
import styled from 'styled-components';
function BusInfoItem({ busRouteId, arrmsg1, arrmsg2, rtNm, exps1, exps2 }) {
  const { direction } = useGetDirection(busRouteId);
  return (
    <Wrapper>
      <BusInfoWrapper>
        <IconWrapper>
          <BlueBusIcon style={{ width: '24px', height: '24px' }} />
        </IconWrapper>
        <BusInfo>
          <BusDetails>
            <BusNumber>{rtNm}</BusNumber>
            {/* <BusDirection>{busDirection}</BusDirection> */}
          </BusDetails>
          <RouteDetails>
            {/* <Loc>{loc}</Loc> */}
            <Route>
              {direction.from}
              {' <-> '}
              {direction.to}
            </Route>
          </RouteDetails>
          <ArrivalDetails>
            <ArrivalMessage>{arrmsg1}</ArrivalMessage>
            <StopsLeft>{exps1}</StopsLeft>
            <ArrivalMessage>{arrmsg2}</ArrivalMessage>
            <StopsLeft>{exps2}</StopsLeft>
          </ArrivalDetails>
        </BusInfo>
      </BusInfoWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  height: 110px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BusInfoWrapper = styled.div`
  width: 332px;
  height: 71px;
  display: flex;
  gap: 22px;
`;
const IconWrapper = styled.div`
  width: 29px;
`;
const BusInfo = styled.div`
  width: 304px;
`;
const BusDetails = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  gap: 22px;
`;
const RouteDetails = styled.div`
  width: 100%;
  height: 16px;
  display: flex;
  gap: 34px;
  padding-top: 8px;
  color: #000;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const ArrivalDetails = styled.div`
  width: 100%;
  height: 16px;
  display: flex;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  gap: 5px;
  padding-top: 5px;
`;
const BusNumber = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 21px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  align-items: flex-end;
`;
const BusDirection = styled.div`
  color: #777;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: flex-end;
`;
const Loc = styled.div``;
const Route = styled.div``;
const ArrivalMessage = styled.div`
  color: #f35252;
`;
const StopsLeft = styled.div`
  color: #767676;
  padding-right: 5px;
`;
export default BusInfoItem;
