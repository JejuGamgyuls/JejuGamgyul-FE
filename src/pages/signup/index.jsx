import DupCheckButton from '@components/Buttons/DupCheckButton';
import SubmitButton from '@components/Buttons/SubmitButton';
import Input from '@components/Input';
import { useEffect, useState } from 'react';

import * as S from './styles';

function SignUpPage() {
  const [userId, setUserId] = useState('');
  const [pwd, setPwd] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [email, setEmail] = useState('');
  const [idMsg, setIdMsg] = useState('');
  const [pwdMsg, setPwdMsg] = useState('');
  const [emailMsg, setEmailMsg] = useState('');

  // id 유효성 검사
  useEffect(() => {
    const idPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!userId) {
      setIdMsg('');
    } else if (idPattern.test(userId)) {
      setIdMsg(<span style={{ color: '#FD825B' }}>* 사용 가능한 아이디입니다</span>);
    } else {
      setIdMsg(
        <span style={{ color: '#F35252' }}>* 영문, 숫자를 포함한 6자 이상이어야 합니다</span>,
      );
    }
  }, [userId]);

  // 비밀번호 유효성 검사
  useEffect(() => {
    if (confirmPwd && pwd !== confirmPwd) {
      setPwdMsg(<span style={{ color: '#F35252' }}>* 비밀번호가 일치하지 않습니다</span>);
    } else if (confirmPwd && pwd === confirmPwd) {
      setPwdMsg(<span style={{ color: '#FD825B' }}>* 비밀번호가 일치합니다</span>);
    } else {
      setPwdMsg('');
    }
  }, [pwd, confirmPwd]);

  // 이메일 유효성 검사
  useEffect(() => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email) {
      setEmailMsg('');
    } else if (emailPattern.test(email)) {
      setEmailMsg(<span style={{ color: '#FD825B' }}>* 올바른 이메일 형식입니다</span>);
    } else {
      setEmailMsg(<span style={{ color: '#F35252' }}>* 이메일 형식이 잘못되었습니다</span>);
    }
  }, [email]);

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>회원가입</S.Title>
      </S.Header>
      <S.Body>
        <S.InputsWrapper>
          <S.InputContainer>
            <S.InputTitle>아이디</S.InputTitle>
            <Input
              placeholder="아이디를 입력해주세요"
              onChange={(e) => setUserId(e.target.value)}
            />
            <DupCheckButton />
          </S.InputContainer>
          <S.MessageWrapper>
            <S.Message>{idMsg}</S.Message>
          </S.MessageWrapper>
          <S.InputContainer>
            <S.InputTitle>비밀번호</S.InputTitle>
            <Input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={(e) => setPwd(e.target.value)}
            />
            <S.EmptyButtonSpace />
          </S.InputContainer>
          <S.MessageWrapper />
          <S.InputContainer>
            <S.InputTitle>비밀번호 확인</S.InputTitle>
            <Input
              type="password"
              placeholder="비밀번호를 한 번 더 입력해주세요"
              onChange={(e) => setConfirmPwd(e.target.value)}
            />
            <S.EmptyButtonSpace />
          </S.InputContainer>
          <S.MessageWrapper>
            <S.Message>{pwdMsg}</S.Message>
          </S.MessageWrapper>
          <S.InputContainer>
            <S.InputTitle>이름</S.InputTitle>
            <Input placeholder="이름을 입력해주세요" />
            <S.EmptyButtonSpace />
          </S.InputContainer>
          <S.MessageWrapper />
          <S.InputContainer>
            <S.InputTitle>이메일</S.InputTitle>
            <Input placeholder="Gamkyul@example.com" onChange={(e) => setEmail(e.target.value)} />
            <DupCheckButton />
          </S.InputContainer>
          <S.MessageWrapper>
            <S.Message>{emailMsg}</S.Message>
          </S.MessageWrapper>
          <S.ButtonWrapper>
            <SubmitButton text="가입하기" />
          </S.ButtonWrapper>
        </S.InputsWrapper>
      </S.Body>
    </S.Wrapper>
  );
}

export default SignUpPage;
