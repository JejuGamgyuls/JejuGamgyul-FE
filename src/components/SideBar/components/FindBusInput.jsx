import FindIcon from '@assets/svg/SearchIcon.svg?react';
import { navigationBarState } from '@atoms/navigationBarState';
import { CATEGORY } from '@constants/const';
import { ROUTE } from '@constants/route';
import axios from 'axios';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
function FindBusInput() {
  const inputRef = useRef();
  const navigate = useNavigate();
  const [, setCategory] = useRecoilState(navigationBarState);

  const handleSearchInfo = async () => {
    const inputValue = inputRef.current.value;
    if (!isNaN(Number(inputValue))) {
      const busRoute = ROUTE.BUSFIND.replace(':busNumber', inputValue); // 버스 검색
      navigate(busRoute);
      setCategory(CATEGORY.BUSDETAILINFO);
    } else {
      const stopRoute = ROUTE.BUSSTOP.replace(':busStop', inputValue); // 정류장 검색
      navigate(stopRoute);
      setCategory(CATEGORY.BUSSTOPINFO);
    }
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
        onKeyDown={handleKeyDown}
        autoFocus
        ref={inputRef}
        placeholder="버스 또는 정류장을 검색해보세요"
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
  align-items: center;
`;
