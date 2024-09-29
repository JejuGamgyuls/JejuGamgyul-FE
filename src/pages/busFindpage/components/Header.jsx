import BlackBusIcon from '@assets/svg/BlackBusIcon.svg?react';
import { STYLE } from '@constants/const';
import styled from 'styled-components';

function Header({ busInfo }) {
  if (!busInfo) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <BusInfo>
        <BusNumberWrapper>
          <BlackBusIcon fill="black" width={30} height={30} />
          <BusNumber>{busInfo.busRouteNm}</BusNumber>
        </BusNumberWrapper>
      </BusInfo>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  height: ${STYLE.CURRENT_LOCATION_HEADER_HEIGHT}px;
  width: 100%;
  display: flex;

  align-items: end;
  background-color: white;
  padding: 0 20px;
  margin-top: 40px;
  box-sizing: border-box;
  position: relative;
  z-index: 10;
`;
const BusNumberWrapper = styled.div`
  display: flex;
  gap: 10px;
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
  width: 100%;
  align-items: center;
  gap: 12px;
`;
const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
