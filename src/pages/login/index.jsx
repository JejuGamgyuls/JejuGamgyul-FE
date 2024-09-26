import SubmitButton from '@components/Buttons/SubmitButton';
import Input from '@components/Input';
import axios from 'axios';
import { useRef } from 'react';

import * as S from './styles';

function LoginPage() {
  const idRef = useRef();
  const pwdRef = useRef();

  const handleLogin = async () => {
    const id = idRef.current.value;
    const pwd = pwdRef.current.value;
    console.log(id, pwd);
    try {
      const res = await axios.post('http://localhost:8080/login', {
        userId: id,
        pwd,
      });

      if (res.status === 202) {
        alert('로그인 성공');
        localStorage.setItem('token', res.data.jwt);
        window.location.href = '/';
      }
    } catch (e) {
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
          />
        </S.ButtonsWrapper>
      </S.Body>
    </S.Wrapper>
  );
}

export default LoginPage;
