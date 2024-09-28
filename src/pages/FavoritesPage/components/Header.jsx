import ChevronLeft from '@assets/svg/ChevronLeft.svg?react';
import ReloadIcon from '@assets/svg/ReloadIcon.svg?react';
import convertTo12HourFormat from '@pages/busStopPage/utils/convertTo12HourFormat';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
function Header({ favBusCnt, reloadTime }) {
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
      <TitleWrapper>
        <Title>
          <ChevronLeft /> 즐겨찾기
        </Title>
      </TitleWrapper>
      <CountsWrapper>
        <TotalCounts>
          전체 <span style={{ color: 'var(--NavOrange, #E37653)' }}>{favBusCnt}</span>개
        </TotalCounts>
        <ReloadZone>
          {formatedTime} 기준
          <IconWrapper shouldRotate={shouldRotate}>
            <ReloadIcon width={14} height={14} />
          </IconWrapper>
        </ReloadZone>
      </CountsWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: absolute;
  top: 0;
  background-color: var(--Gray01, white);
  width: 390px;
  z-index: 1;
  padding: 20px;
  box-sizing: border-box;
  height: 120px;
`;
const TitleWrapper = styled.div`
  height: 52px;
  display: flex;
  align-items: center;
`;
const Title = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 21px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 15px;
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

const CountsWrapper = styled.div`
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TotalCounts = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const IconWrapper = styled.div`
  display: flex;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  :hover {
    cursor: pointer;
  }
  & > svg {
    animation: ${({ rotate }) => (rotate ? anim : 'none')} 0.5s linear;
  }
`;

const anim = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export default Header;
