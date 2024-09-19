import LocationIcon from '@assets/svg/LocationIcon.svg?react';
import SideBarHeader from '@components/SideBar/components/SideBarHeader';
import { STYLE } from '@constants/const';
import useAddress from '@hooks/useAddress';
function CurrentLocationHeader() {
  const { address } = useAddress();
  return (
    <SideBarHeader height={STYLE.CURRENT_LOCATION_HEADER_HEIGHT}>
      <LocationIcon />
      {address ? address.gu + ' ' + address.dong : '위치 정보를 불러오는 중입니다'}
    </SideBarHeader>
  );
}

export default CurrentLocationHeader;
