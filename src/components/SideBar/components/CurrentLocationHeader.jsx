import LocationIcon from '@assets/svg/LocationIcon.svg?react';
import useAddress from '@hooks/useAddress';
import styled from 'styled-components';
function CurrentLocationHeader() {
  const { address } = useAddress();
  return (
    <Wrapper>
      <LocationIcon />
      {address ? address.gu + ' ' + address.dong : '위치 정보를 불러오는 중입니다'}
    </Wrapper>
  );
}

export default CurrentLocationHeader;

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  margin-top: 15px;

  color: #000;
  font-family: Pretendard;
  font-size: 21px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  svg {
    width: 20px;
    height: 20px;
    margin: 0 9px 0 12px;
  }
`;
