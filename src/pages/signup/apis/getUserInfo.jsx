import instance from '@apis/axiosInstance';
import { ROUTE } from '@constants/route';

export const handleSignUp = (data, isFormValid, navigate) => {
  if (isFormValid) {
    instance
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

export const checkId = (userId, setIsIdValid, setIdCheckMsg, setIdMsg) => {
  instance.post('http://localhost:8080/api/auth/check-id', { userId }).then((res) => {
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

export const checkEmail = (email, setIsEmailValid, setEmailCheckMsg, setEmailMsg) => {
  instance.post('http://localhost:8080/api/auth/check-email', { email }).then((res) => {
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
