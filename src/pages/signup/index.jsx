import DupCheckButton from '@components/Buttons/DupCheckButton';
import SubmitButton from '@components/Buttons/SubmitButton';
import Input from '@components/Input';
import { ROUTE } from '@constants/route';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './styles';

function SignUpPage() {
  const [userId, setUserId] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwdCheck, setPwdCheck] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [idMsg, setIdMsg] = useState('');
  const [IdCheckMsg, setIdCheckMsg] = useState('');
  const [pwdMsg, setPwdMsg] = useState('');
  const [emailMsg, setEmailMsg] = useState('');
  const [emailCheckMsg, setEmailCheckMsg] = useState('');

  const [isIdValid, setIsIdValid] = useState(false); // Track if ID duplication check passed
  const [isEmailValid, setIsEmailValid] = useState(false); // Track if email duplication check passed
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();

  const data = {
    email,
    userId,
    pwd,
    name,
  };

  const handleSignUp = () => {
    if (isFormValid) {
      axios
        .post('http://localhost:8080/api/auth/signUp', data)
        .then((res) => {
          console.log(res);
          navigate(ROUTE.LOGIN);
        })
        .catch((err) => {
          console.log(`${err} :: 회원가입 실패`);
        });
    } else {
      alert('모든 정보를 입력하고 중복 확인 후 회원가입이 가능합니다.');
    }
  };

  const checkId = () => {
    axios.post('http://localhost:8080/api/auth/check-id', { userId }).then((res) => {
      if (res.data.result) {
        setIsIdValid(true);
        setIdCheckMsg(<span style={{ color: '#FD825B' }}>* 사용 가능한 아이디입니다</span>);
      } else {
        setIsIdValid(false);
        setIdCheckMsg(<span style={{ color: '#F35252' }}>* 이미 가입한 아이디입니다</span>);
      }
    });
    setIdMsg('');
  };
  const checkEmail = () => {
    axios.post('http://localhost:8080/api/auth/check-email', { email }).then((res) => {
      if (res.data.result) {
        setIsEmailValid(true);
        setEmailCheckMsg(<span style={{ color: '#FD825B' }}>* 사용 가능한 이메일 주소입니다</span>);
      } else {
        setIsEmailValid(false);
        setEmailCheckMsg(<span style={{ color: '#F35252' }}>* 이미 가입한 이메일 주소입니다</span>);
      }
    });
    setEmailMsg('');
  };

  // id 유효성 검사
  useEffect(() => {
    const idPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!userId) {
      setIdMsg('');
    } else if (idPattern.test(userId)) {
      setIdMsg(<span style={{ color: '#FD825B' }}>* 올바른 아이디 형식입니다</span>);
    } else {
      setIdMsg(
        <span style={{ color: '#F35252' }}>* 영문, 숫자를 포함한 6자 이상이어야 합니다</span>,
      );
    }
  }, [userId]);

  // 비밀번호 유효성 검사
  useEffect(() => {
    if (pwdCheck && pwd !== pwdCheck) {
      setPwdMsg(<span style={{ color: '#F35252' }}>* 비밀번호가 일치하지 않습니다</span>);
    } else if (pwdCheck && pwd === pwdCheck) {
      setPwdMsg(<span style={{ color: '#FD825B' }}>* 비밀번호가 일치합니다</span>);
    } else {
      setPwdMsg('');
    }
  }, [pwd, pwdCheck]);

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

  useEffect(() => {
    if (userId && pwd && pwdCheck && email && name && isIdValid && isEmailValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [userId, pwd, pwdCheck, email, name, isIdValid, isEmailValid]);

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
              onChange={(e) => {
                setUserId(e.target.value);
                setIdCheckMsg('');
              }}
            />
            <DupCheckButton check={checkId} />
          </S.InputContainer>
          <S.MessageWrapper>
            <S.Message>
              <div>{idMsg}</div>
              <div>{IdCheckMsg}</div>
            </S.Message>
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
              onChange={(e) => setPwdCheck(e.target.value)}
            />
            <S.EmptyButtonSpace />
          </S.InputContainer>
          <S.MessageWrapper>
            <S.Message>{pwdMsg}</S.Message>
          </S.MessageWrapper>
          <S.InputContainer>
            <S.InputTitle>이름</S.InputTitle>
            <Input placeholder="이름을 입력해주세요" onChange={(e) => setName(e.target.value)} />
            <S.EmptyButtonSpace />
          </S.InputContainer>
          <S.MessageWrapper />
          <S.InputContainer>
            <S.InputTitle>이메일</S.InputTitle>
            <Input
              placeholder="Gamkyul@example.com"
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailCheckMsg('');
              }}
            />
            <DupCheckButton check={checkEmail} />
          </S.InputContainer>
          <S.MessageWrapper>
            <S.Message>
              <div>{emailMsg}</div>
              <div>{emailCheckMsg}</div>
            </S.Message>
          </S.MessageWrapper>
          <S.ButtonWrapper>
            <SubmitButton text="가입하기" handleSignUp={handleSignUp} />
          </S.ButtonWrapper>
        </S.InputsWrapper>
      </S.Body>
    </S.Wrapper>
  );
}

export default SignUpPage;
