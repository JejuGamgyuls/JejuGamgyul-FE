import * as authApi from '@apis/auth';
import { ROUTE } from '@constants/route';

export const handleSignUp = async (data, isFormValid, navigate) => {
  if (isFormValid) {
    try {
      const res = await authApi.signUpUser(data);
      if (res.status === 200) {
        alert('회원가입이 완료되었습니다.');
        navigate(ROUTE.LOGIN);
      }
    } catch (err) {
      console.log(`${err} :: 회원가입 실패`);
    }
  } else {
    alert('모든 정보를 입력하고 중복 확인 후 회원가입이 가능합니다.');
  }
};

export const checkId = async (userId, setIsIdValid, setIdCheckMsg, setIdMsg) => {
  setIdMsg('');
  try {
    const res = await authApi.checkUserId(userId);
    if (res.data.result) {
      setIsIdValid(true);
      setIdCheckMsg(<span style={{ color: '#FD825B' }}>* 사용 가능한 아이디입니다</span>);
    } else {
      setIsIdValid(false);
      setIdCheckMsg(<span style={{ color: '#F35252' }}>* 이미 가입한 아이디입니다</span>);
    }
  } catch (err) {
    throw new Error('이메일 체크 오류:', err);
  }
};

export const checkEmail = async (email, setIsEmailValid, setEmailCheckMsg, setEmailMsg) => {
  setEmailMsg('');
  try {
    const res = await authApi.checkUserEmail(email);
    if (res.data.result) {
      setIsEmailValid(true);
      setEmailCheckMsg(<span style={{ color: '#FD825B' }}>* 사용 가능한 이메일 주소입니다</span>);
    } else {
      setIsEmailValid(false);
      setEmailCheckMsg(<span style={{ color: '#F35252' }}>* 이미 가입한 이메일 주소입니다</span>);
    }
  } catch (err) {
    throw new Error('이메일 체크 오류:', err);
  }
};
