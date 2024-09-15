import BlackBusIcon from '@assets/svg/BlackBusIcon.svg?react';
import GrayBlankStarIcon from '@assets/svg/GrayBlankStarIcon.svg?react';
import { STYLE } from '@constants/const';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  const { busNumber } = useParams();
  return (
    <Wrapper>
      <BusInfo>
        <BlackBusIcon fill="black" width={30} height={30} />
        <BusNumber>{busNumber}</BusNumber>
      </BusInfo>
      <GrayBlankStarIcon width={24} height={24} />
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  height: ${STYLE.CURRENT_LOCATION_HEADER_HEIGHT}px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: end;
  background-color: white;
  padding: 0 20px;
  margin-top: 40px;
  box-sizing: border-box;
  position: relative;
  z-index: 10;
`;

const BusNumber = styled.div`
  color: #242424;
  font-family: Pretendard;
  font-size: 21px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const BusInfo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  gap: 12px;
`;
