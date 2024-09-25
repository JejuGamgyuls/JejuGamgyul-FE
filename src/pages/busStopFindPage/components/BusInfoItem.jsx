import BlueBusIcon from '@assets/svg/BlueBusIcon.svg?react';
import BothArrow from '@assets/svg/BothArrow.svg?react';
import useGetDirection from '@hooks/useGetDirection';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

function BusInfoItem({ busRouteId, rtNm, exps1, exps2 }) {
  const { direction } = useGetDirection(busRouteId);
  const [left1, setLeft1] = useState(exps1);
  const [left2, setLeft2] = useState(exps2);

  useEffect(() => {
    const interval = setInterval(() => {
      setLeft1((prev) => (prev > 0 ? prev - 1 : 0));
      setLeft2((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (minutes <= 0) {
      return '곧 도착';
    } else if (minutes >= 10 || seconds === 0) {
      return `${minutes}분`;
    } else if (minutes < 10 && minutes > 0) {
      return `${minutes}분 ${secs}초`;
    }
  };

  return (
    <Wrapper>
      <BusInfoWrapper>
        <IconWrapper>
          <BlueBusIcon style={{ width: '24px', height: '24px' }} />
        </IconWrapper>
        <BusInfo>
          <BusDetails>
            <BusNumber>{rtNm}</BusNumber>
          </BusDetails>
          <RouteDetails>
            <Route>
              {direction.from}
              <BothArrow />
              {direction.to}
            </Route>
          </RouteDetails>
          <ArrivalDetails>
            <ArrivalMessage>{formatTime(left1)}</ArrivalMessage>
            <ArrivalMessage>{formatTime(left2)}</ArrivalMessage>
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
const Route = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const ArrivalMessage = styled.div`
  white-space: nowrap;
  color: #f35252;
`;
const StopsLeft = styled.div`
  color: #767676;
  padding-right: 5px;
`;
export default BusInfoItem;
