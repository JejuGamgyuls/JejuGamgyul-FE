import { Gyul } from '@assets/png';
import FilledStarIcon from '@assets/svg/filledStarIcon.svg?react';
import HomeIcon from '@assets/svg/homeIcon.svg?react';
import TimeIcon from '@assets/svg/timeIcon.svg?react';
import UserIcon from '@assets/svg/userIcon.svg?react';

import * as S from './styles';
function NavigationBar() {
  return (
    <S.Wrapper>
      <img src={Gyul} alt="logo" width={48} height={48} />
      <S.NavIcons>
        <S.NavIcon>
          <UserIcon width={36} height={36} />내 정보
        </S.NavIcon>
        <S.NavIcon>
          <HomeIcon width={36} height={36} />홈
        </S.NavIcon>
        <S.NavIcon>
          <FilledStarIcon width={36} height={36} />
          즐겨찾기
        </S.NavIcon>
        <S.NavIcon>
          <TimeIcon width={36} height={36} />
          시간표
        </S.NavIcon>
      </S.NavIcons>
    </S.Wrapper>
  );
}

export default NavigationBar;
