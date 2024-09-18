import SubmitButton from '@components/Buttons/SubmitButton';
import Input from '@components/Input';

import * as S from './styles';

function LoginPage() {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>로그인</S.Title>
      </S.Header>
      <S.Body>
        <S.InputsWrapper>
          <Input placeholder="아이디를 입력해주세요" />
          <Input type="password" placeholder="비밀번호를 입력해주세요" />
        </S.InputsWrapper>
        <S.ButtonsWrapper>
          <SubmitButton text="로그인" />
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
