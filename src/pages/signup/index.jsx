import DupCheckButton from '@components/Buttons/DupCheckButton';
import SubmitButton from '@components/Buttons/SubmitButton';
import Input from '@components/Input';

import * as S from './styles';

function SignUpPage() {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>회원가입</S.Title>
      </S.Header>
      <S.Body>
        <S.InputsWrapper>
          <S.InputContainer>
            <S.InputTitle>아이디</S.InputTitle>
            <Input placeholder="아이디를 입력해주세요" />
            <DupCheckButton />
          </S.InputContainer>
          <S.InputContainer>
            <S.InputTitle>비밀번호</S.InputTitle>
            <Input placeholder="비밀번호를 입력해주세요" />
            <S.EmptyButtonSpace />
          </S.InputContainer>
          <S.InputContainer>
            <S.InputTitle>비밀번호 확인</S.InputTitle>
            <Input placeholder="비밀번호를 한 번 더 입력해주세요" />
            <S.EmptyButtonSpace />
          </S.InputContainer>
          <S.InputContainer>
            <S.InputTitle>이름</S.InputTitle>
            <Input placeholder="이름을 입력해주세요" />
            <S.EmptyButtonSpace />
          </S.InputContainer>
          <S.InputContainer>
            <S.InputTitle>이메일</S.InputTitle>
            <Input placeholder="Gamkyul@example.com" />
            <DupCheckButton />
          </S.InputContainer>
        </S.InputsWrapper>
        <SubmitButton text="가입하기" />
      </S.Body>
    </S.Wrapper>
  );
}

export default SignUpPage;
