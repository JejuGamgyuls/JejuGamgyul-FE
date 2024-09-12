import FindIcon from '@assets/svg/SearchIcon.svg?react';
import styled from 'styled-components';
function FindBusInput() {
  return (
    <Wrapper>
      <StyledInput placeholder="버스 번호를 검색해보세요" />
      <IconWrapper>
        <FindIcon width={25} height={25} />
      </IconWrapper>
    </Wrapper>
  );
}
export default FindBusInput;

const Wrapper = styled.div`
  width: 340px;
  height: 45px;
  border-radius: 5px;
  border: 2px solid #e37653;
  background: #fff;
  align-self: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
`;

const StyledInput = styled.input`
  height: 100%;
  border: none;
  background: transparent;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

const IconWrapper = styled.div``;
