import ChevronLeft from '@assets/svg/ChevronLeft.svg?react';
import ReloadIcon from '@assets/svg/ReloadIcon.svg?react';
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
function Header() {
  const [rotate, setRotate] = useState(false);
  const reload = () => {
    setRotate(true);
    setTimeout(() => {
      setRotate(false);
    }, 500);
  };
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>
          <ChevronLeft /> 즐겨찾기
        </Title>
      </TitleWrapper>
      <CountsWrapper>
        <TotalCounts>
          전체 <span style={{ color: 'var(--NavOrange, #E37653)' }}>5</span>개
        </TotalCounts>
        <CurrentTime>
          <TimeMarker>오전 07 : 05 기준</TimeMarker>
          <IconWrapper rotate={rotate} onClick={reload}>
            <ReloadIcon />
          </IconWrapper>
        </CurrentTime>
      </CountsWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: absolute;
  top: 0;
  background-color: var(--Gray01, red);
  width: 100%;
  z-index: 1;
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
  gap: 10px;
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
const CurrentTime = styled.div`
  display: flex;
  gap: 5px;
`;
const TimeMarker = styled.div`
  color: var(--Gray06, #767676);
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
