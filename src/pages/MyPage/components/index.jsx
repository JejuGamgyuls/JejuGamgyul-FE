import styled from 'styled-components';

import MyInfoHeader from './MyInfoHeader';
import MyInfoItem from './MyInfoItem';

function MyInfo() {
  return (
    <Wrapper>
      <MyInfoHeader />
      <MyInfoItem></MyInfoItem>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 332px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 30px;
  padding: 30px 0px;
  box-sizing: border-box;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const ItemWrapper = styled.div`
width: 100%:
`;
export default MyInfo;
