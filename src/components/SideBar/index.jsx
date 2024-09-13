import BusStopItem from './components/BusStopItem';
import CurrentLocationHeader from './components/CurrentLocationHeader';
import FindBusInput from './components/FindBusInput';
import * as S from './styles';
function SideBar() {
  return (
    <S.Wrapper>
      <FindBusInput />
      <CurrentLocationHeader />
      <S.BusStopItemWrapper>
        <BusStopItem />
        <BusStopItem />
        <BusStopItem />
        <BusStopItem />
        <BusStopItem />
        <BusStopItem />
        <BusStopItem />
        <BusStopItem />
        <BusStopItem />
        <BusStopItem />
        <BusStopItem />
        <BusStopItem />
        <BusStopItem />
        <BusStopItem />
        <BusStopItem />
        <BusStopItem />
        <BusStopItem />
        <BusStopItem />
        <BusStopItem />
        <BusStopItem />
      </S.BusStopItemWrapper>
    </S.Wrapper>
  );
}

export default SideBar;
