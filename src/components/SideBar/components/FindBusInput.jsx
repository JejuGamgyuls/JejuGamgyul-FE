import FindIcon from '@assets/svg/SearchIcon.svg?react';
import { navigationBarState } from '@atoms/navigationBarState';
import { searchBusNumberState } from '@atoms/searchBusNumberState';
import { CATEGORY } from '@constants/const';
import { useRef } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
function FindBusInput() {
  const inputRef = useRef();

  const [, setSearchBusNumber] = useRecoilState(searchBusNumberState);
  const [, setCategory] = useRecoilState(navigationBarState);

  const handleSearchInfo = () => {
    setSearchBusNumber(parseInt(inputRef.current.value));
    setCategory(CATEGORY.BUSDETAILINFO);
  };

  const handleKeyDown = (e) => {
    if (e.nativeEvent.isComposing) {
      return;
    }
    if (e.key === 'Enter') {
      handleSearchInfo();
    }
  };

  return (
    <Wrapper>
      <StyledInput
        type="number"
        onKeyDown={handleKeyDown}
        autoFocus
        ref={inputRef}
        placeholder="버스 번호를 검색해보세요"
      />
      <IconWrapper onClick={handleSearchInfo}>
        <FindIcon width={25} height={25} />
      </IconWrapper>
    </Wrapper>
  );
}
export default FindBusInput;

const Wrapper = styled.div`
  width: 340px;
  height: 50px;
  border-radius: 5px;
  border: 2px solid #e37653;
  background: #fff;
  align-self: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  box-sizing: border-box;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

const IconWrapper = styled.div`
  cursor: pointer;
  width: 25px;
  height: 100%;
  align-self: center;
  display: flex;
  justify-content: center;
`;
