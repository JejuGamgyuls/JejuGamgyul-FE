import ChevronLeft from '@assets/svg/ChevronLeft.svg?react';
import FavoriteIcon from '@assets/svg/FavoriteIcon.svg?react';
import LocationIcon from '@assets/svg/LocationIcon.svg?react';
import ReloadIcon from '@assets/svg/ReloadIcon.svg?react';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import 'dayjs/locale/ko';

import convertTo12HourFormat from '../utils/convertTo12HourFormat';

dayjs.locale('ko');
function BusStopHeader({ reloadTime }) {
  const { busStop } = useParams();
  const [shouldRotate, setShouldRotate] = useState(false);
  const formatedTime = convertTo12HourFormat({
    hours: dayjs(reloadTime.toISOString()).hour(),
    minutes: dayjs(reloadTime.toISOString()).minute(),
  });
  useEffect(() => {
    if (reloadTime) {
      setShouldRotate(true);
      const timer = setTimeout(() => setShouldRotate(false), 1000); // 1초 후에 회전 멈춤
      return () => clearTimeout(timer);
    }
  }, [reloadTime]);

  return (
    <Wrapper>
      <InfoWrapper>
        <BusStopInfo>
          <BusStopName>
            <ChevronLeft style={{ width: '16px', height: '16px' }} /> {busStop}
          </BusStopName>
          <IconWrapper>
            <LocationIcon style={{ width: '24px', height: '24px' }} />
            <FavoriteIcon style={{ width: '24px', height: '24px', cursor: 'pointer' }} />
          </IconWrapper>
        </BusStopInfo>
        <ReloadZone>
          {formatedTime} 기준
          <Icon shouldRotate={shouldRotate}>
            <ReloadIcon width={14} height={14} />
          </Icon>
        </ReloadZone>
        <BusArrivalInfo>
          <ArrivalInfo>곧 도착</ArrivalInfo>
          <BusNumber>333</BusNumber>
        </BusArrivalInfo>
      </InfoWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`;
const InfoWrapper = styled.div`
  width: 332px;
  height: 130px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-left: 26px;
  color: #000;
  font-family: Pretendard;
`;
const BusStopInfo = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  gap: 5px;
  font-size: 21px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-top: 26px;
`;
const BusStopName = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  gap: 10px;
`;
const IconWrapper = styled.div`
  width: calc(100% - 88px);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const BusArrivalInfo = styled.div`
  width: 100%;
  height: 27px;
  border-radius: 3px;
  background: #f5f6f6;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-left: 16px;
`;
const ArrivalInfo = styled.div`
  color: #f35252;
`;
const BusNumber = styled.div`
  color: #555;
`;
const ReloadZone = styled.div`
  display: flex;
  gap: 5px;
  justify-content: flex-end;
  align-items: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
`;
const Icon = styled.div`
  width: 14px;
  height: 14px;
  cursor: pointer;
  animation: ${({ shouldRotate }) => (shouldRotate ? 'rotate_image 1s linear infinite' : 'none')};

  @keyframes rotate_image {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default BusStopHeader;
