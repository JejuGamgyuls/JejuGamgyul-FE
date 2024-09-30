import * as authApi from '@apis/auth';
import * as busApi from '@apis/favorite';
import { navigationBarState, userIdState } from '@atoms/navigationBarState';
import SubmitButton from '@components/Buttons/SubmitButton';
import { CATEGORY } from '@constants/const';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

import MyInfoHeader from './MyInfoHeader';
import MyInfoItem from './MyInfoItem';

function MyInfo() {
  const [favoriteCnt, setFavoriteCnt] = useState(0);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const userId = useRecoilValue(userIdState);
  const [, setCategory] = useRecoilState(navigationBarState);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);

    if (storedToken) {
      const getFavoritesCounts = async () => {
        try {
          const data = await busApi.getAllFavorites();
          setFavoriteCnt(data.length);
        } catch (e) {
          throw new Error(e);
        } finally {
          setLoading(false);
        }
      };
      getFavoritesCounts();
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('로그아웃 되었습니다.');
    window.location.href = '/';
  };

  const handleSignOut = async () => {
    const confirmSignOut = window.confirm('정말로 회원탈퇴 하시겠습니까?');
    if (confirmSignOut) {
      try {
        authApi.deleteUserAccount(userId);
        alert('회원탈퇴가 완료되었습니다.');
        localStorage.removeItem('token');
        navigate('/');
        setCategory(CATEGORY.HOME);
      } catch (e) {
        throw new Error(e);
      }
    }
  };
  return (
    <>
      {token ? (
        <Wrapper>
          <MyInfoHeader />
          <MyInfoItem favoriteCnt={favoriteCnt}></MyInfoItem>
        </Wrapper>
      ) : (
        <div></div>
      )}
      {token ? (
        <ButtonWrapper>
          <SubmitButton text="로그아웃" handleClick={handleLogout} width="332px" height="50px" />
          <SubmitButton
            text="회원탈퇴"
            handleClick={handleSignOut}
            width="332px"
            height="50px"
            background="#fff"
            color="#fd825b"
            border="1px solid #fd825b"
          />
        </ButtonWrapper>
      ) : null}
    </>
  );
}
const Wrapper = styled.div`
  width: 332px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px;
  padding: 30px 0px;
  box-sizing: border-box;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const ButtonWrapper = styled.div`
  width: 332px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export default MyInfo;
