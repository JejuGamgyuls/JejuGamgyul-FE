import FavoriteIcon from '@assets/svg/FavoriteIcon.svg?react';
import LocationIcon from '@assets/svg/LocationIcon.svg?react';
import styled from 'styled-components';

function BusStopHeader() {
  return (
    <Wrapper>
      <InfoWrapper>
        <BusStopInfo>
          <BusStopName>&lt; 선릉역</BusStopName>
          <IconWrapper>
            <LocationIcon style={{ width: '24px', height: '24px' }} />
            <FavoriteIcon style={{ width: '24px', height: '24px', cursor: 'pointer' }} />
          </IconWrapper>
        </BusStopInfo>
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
  width: 88px;
  display: flex;
  align-items: center;
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
export default BusStopHeader;
