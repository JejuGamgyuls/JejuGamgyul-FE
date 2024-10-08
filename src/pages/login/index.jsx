import * as authApi from '@apis/auth';
import { userIdState, userNameState } from '@atoms/navigationBarState';
import SubmitButton from '@components/Buttons/SubmitButton';
import Input from '@components/Input';
import axios from 'axios';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import * as S from './styles';

function LoginPage() {
  const idRef = useRef();
  const pwdRef = useRef();
  const [, setUser] = useRecoilState(userNameState);
  const [, setUserId] = useRecoilState(userIdState);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const id = idRef.current.value;
    const pwd = pwdRef.current.value;
    try {
      const res = await authApi.loginInUser(id, pwd);

      if (res.status === 202) {
        alert('로그인 성공');
        localStorage.setItem('token', res.data.jwt);
        setUser(res.data.name);
        setUserId(res.data.userId);
        navigate('/');
      }
    } catch (e) {
      alert('로그인에 실패했습니다. 아이디와 비밀번호를 확인해 주세요.');
      idRef.current.value = '';
      pwdRef.current.value = '';
      throw new Error(e);
    }
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>로그인</S.Title>
      </S.Header>
      <S.Body>
        <S.InputsWrapper>
          <Input ref={idRef} placeholder="아이디를 입력해주세요" />
          <Input ref={pwdRef} type="password" placeholder="비밀번호를 입력해주세요" />
        </S.InputsWrapper>
        <S.ButtonsWrapper>
          <SubmitButton text="로그인" handleClick={handleLogin} />
          <SubmitButton
            text="회원가입"
            background="#fff"
            border="#fd825b 1px solid"
            color="#fd825b"
            handleClick={() => navigate('/signUp')}
          />
        </S.ButtonsWrapper>
      </S.Body>
    </S.Wrapper>
  );
}

export default LoginPage;
