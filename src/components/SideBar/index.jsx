import CurrentLocationHeader from './components/CurrentLocationHeader';
import FindBusInput from './components/FindBusInput';
import * as S from './styles';
function SideBar() {
  return (
    <S.Wrapper>
      <FindBusInput />
      <CurrentLocationHeader />
    </S.Wrapper>
  );
}

export default SideBar;
