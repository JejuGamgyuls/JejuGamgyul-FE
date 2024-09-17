import ReloadIcon from '@assets/svg/ReloadIcon.svg?react';
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

function BusDetail() {
  const [rotate, setRotate] = useState(false);
  const reload = () => {
    setRotate(true);
    setTimeout(() => {
      setRotate(false);
    }, 500);
  };
  return (
    <Wrapper>
      <Menu>
        <MenuItem>운행 지역</MenuItem>
        <MenuItem>서울</MenuItem>
      </Menu>
      <Menu>
        <MenuItem>운행 시간 </MenuItem>
        <MenuItem>첫차 05:00 / 막차 23:00</MenuItem>
      </Menu>
      <Menu>
        <MenuItem>배차 간격</MenuItem>
        <MenuItem> 10분</MenuItem>
      </Menu>
      <Menu>
        <MenuItem>저상예약 </MenuItem>
        <MenuItem>02-1234-5678</MenuItem>
      </Menu>
      <Menu
        style={{
          gap: '10px',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingRight: '30px',
        }}
      >
        <MenuItem>오전 07:05 기준</MenuItem>
        <IconWrapper rotate={rotate} onClick={reload}>
          <ReloadIcon />
        </IconWrapper>
      </Menu>
    </Wrapper>
  );
}

export default BusDetail;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  padding-top: 24px;
  gap: 10px;
  background-color: white;
`;

const Menu = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 16px;
`;

const MenuItem = styled.div`
  color: var(--Gray06, #767676);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
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
