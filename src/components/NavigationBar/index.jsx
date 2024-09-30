import { Gyul } from '@assets/png';
import FilledStarIcon from '@assets/svg/filledStarIcon.svg?react';
import HomeIcon from '@assets/svg/homeIcon.svg?react';
import UserIcon from '@assets/svg/userIcon.svg?react';
import { navigationBarState } from '@atoms/navigationBarState';
import { CATEGORY } from '@constants/const';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import * as S from './styles';
function NavigationBar() {
  const [, setCategory] = useRecoilState(navigationBarState);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleCategory = (category) => {
    if (!token) {
      alert('로그인이 필요합니다.');
      navigate('/login');
      return;
    }
    setCategory(category);
  };

  return (
    <S.Wrapper>
      <img src={Gyul} alt="logo" width={48} height={48} />
      <S.NavIconList>
        <S.NavIcon onClick={() => handleCategory(CATEGORY.MYINFO)}>
          <UserIcon width={36} height={36} />내 정보
        </S.NavIcon>
        <S.NavIcon onClick={() => handleCategory(CATEGORY.HOME)}>
          <HomeIcon width={36} height={36} />홈
        </S.NavIcon>
        <S.NavIcon onClick={() => handleCategory(CATEGORY.FAVORITE)}>
          <FilledStarIcon width={36} height={36} />
          즐겨찾기
        </S.NavIcon>
      </S.NavIconList>
    </S.Wrapper>
  );
}

export default NavigationBar;
