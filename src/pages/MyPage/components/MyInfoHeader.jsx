import { userNameState } from '@atoms/navigationBarState';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

function MyInfoHeader() {
  const user = useRecoilValue(userNameState);

  console.log(user);
  return (
    <Wrapper>
      <UserNameWrapper>
        <UserName>
          <span style={{ fontWeight: '600' }}>{user}</span>님
        </UserName>
      </UserNameWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 332px;
  padding-left: 26px;
`;
const UserNameWrapper = styled.div``;
const UserName = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
`;
export default MyInfoHeader;
