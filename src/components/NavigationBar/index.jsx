import { Gyul } from '@assets/png';
import FilledStarIcon from '@assets/svg/filledStarIcon.svg?react';
import HomeIcon from '@assets/svg/homeIcon.svg?react';
import TimeIcon from '@assets/svg/timeIcon.svg?react';
import UserIcon from '@assets/svg/userIcon.svg?react';
import { navigationBarState } from '@atoms/NavigationBarState';
import { CATEGORY } from '@constants/const';
import { useRecoilState } from 'recoil';

import * as S from './styles';
function NavigationBar() {
  const [, setCategory] = useRecoilState(navigationBarState);
  const handleCategory = (category) => {
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
        <S.NavIcon onClick={() => handleCategory(CATEGORY.TIMETABLE)}>
          <TimeIcon width={36} height={36} />
          시간표
        </S.NavIcon>
      </S.NavIconList>
    </S.Wrapper>
  );
}

export default NavigationBar;
