import ThreeDotIcon from '@assets/svg/ThreeDotIcon.svg?react';
import TrashIcon from '@assets/svg/TrashIcon.svg?react';
import { navigationBarState } from '@atoms/NavigationBarState';
import { CATEGORY, ROUTETYPECOLORS, ROUTETYPETAG } from '@constants/const';
import { ROUTE } from '@constants/route';
import useGetDirection from '@hooks/useGetDirection';
import { formatTime } from '@pages/busStopPage/utils/formatTime';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

function FavoriteItem({
  arrmsg1,
  arrmsg2,
  stNm,
  exps1,
  exps2,
  rtNm,
  stId,
  busRouteId,
  routeType,
  setIsCancelFavorite,
}) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const { direction } = useGetDirection(busRouteId);
  const [left1, setLeft1] = useState(exps1);
  const [left2, setLeft2] = useState(exps2);
  const modalRef = useRef();
  const iconWrapperRef = useRef();

  const handleClickOutside = (event) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target) &&
      iconWrapperRef.current &&
      !iconWrapperRef.current.contains(event.target)
    ) {
      setIsDeleteModalOpen(false); // 모달 외부 클릭 시 모달 닫기
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLeft1((prev) => (prev > 0 ? prev - 1 : 0));
      setLeft2((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (isDeleteModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDeleteModalOpen]);

  const toggleDeleteModal = () => {
    setIsDeleteModalOpen((prev) => !prev);
  };

  const [, setCategory] = useRecoilState(navigationBarState);
  const navigate = useNavigate();
  const navigateToBusDetail = (rtNm) => {
    const url = ROUTE.BUSFIND.replace(':busNumber', rtNm);
    navigate(url);
    setCategory(CATEGORY.BUSDETAILINFO);
  };

  const handleCancelFavorite = async (stId) => {
    try {
      const res = await axios.delete('http://localhost:8080/favorites/delete', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        params: {
          busStopId: stId,
          routeid: busRouteId,
        },
      });
      if (res.status === 200) {
        alert('즐겨찾기에서 삭제되었습니다.');
        setIsDeleteModalOpen(false);
        setIsCancelFavorite(true);
      }
    } catch (e) {
      throw new Error(e);
    }
  };
  return (
    <>
      <Wrapper>
        <ItemWrapper>
          {isDeleteModalOpen && (
            <DeleteModal ref={modalRef}>
              <ModalText onClick={() => handleCancelFavorite(stId)}>삭제</ModalText>
              <DeleteIcon>
                <TrashIcon style={{ width: '24px', height: '24px' }} />
              </DeleteIcon>
            </DeleteModal>
          )}
          <StationDetails>
            <StationInfo>
              <StationName onClick={() => navigateToBusDetail(rtNm)}>{stNm}</StationName>
              <StationId>{stId}</StationId>
            </StationInfo>
            <IconWrapper ref={iconWrapperRef} onClick={toggleDeleteModal}>
              <ThreeDotIcon />
            </IconWrapper>
          </StationDetails>
          <DirectionDetails>
            {direction.length > 0 && <Route>{direction.to} 방면</Route>}
          </DirectionDetails>
          <MoreInfos>
            <BusInfo>
              <RouteTypeTag routetype={routeType}>{ROUTETYPETAG[routeType]}</RouteTypeTag>
              <BusNum>{rtNm}</BusNum>
            </BusInfo>
            <ArrivalDetails>
              {(arrmsg1 === '운행종료') | (arrmsg1 === '출발대기') ? (
                <ArrivalMessage>{arrmsg1}</ArrivalMessage>
              ) : (
                <ArrivalMessage>{formatTime(left1)}</ArrivalMessage>
              )}
              {(arrmsg2 === '운행종료') | (arrmsg2 === '출발대기') ? (
                <ArrivalMessage>{arrmsg2}</ArrivalMessage>
              ) : (
                <ArrivalMessage>{formatTime(left2)}</ArrivalMessage>
              )}
            </ArrivalDetails>
          </MoreInfos>
        </ItemWrapper>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Pretendard;
  &:hover {
    background: var(--Gray01, #fafafa);
    cursor: pointer;
  }
`;
const ItemWrapper = styled.div`
  width: 332px;
  height: 71px;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const StationDetails = styled.div`
  width: 100%;
  height: 17px;
  display: flex;
  justify-content: space-between;
`;
const StationInfo = styled.div`
  display: flex;
  gap: 10px;
`;
const Route = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const DirectionDetails = styled.div`
  width: 100%;
  height: 13px;
  padding-top: 6px;
  color: var(--Gray06, #767676);
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const MoreInfos = styled.div`
  width: 100%;
  height: 16px;
  padding-top: 17px;
  display: flex;
  justify-content: space-between;
`;
const StationName = styled.div`
  color: #000;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const StationId = styled.div`
  color: var(--Gray07, #595959);
  text-align: center;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;
`;
const IconWrapper = styled.div`
  width: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BusInfo = styled.div`
  display: flex;
  gap: 7px;
`;
const RouteTypeTag = styled.div`
  width: 32px;
  height: 16px;
  border-radius: 2px;
  background: ${({ routetype }) => ROUTETYPECOLORS[routetype]};
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BusNum = styled.div`
  color: #000;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;
`;
const ArrivalDetails = styled.div`
  height: 16px;
  display: flex;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  gap: 5px;
  display: flex;
  align-items: center;
`;
const ArrivalMessage = styled.div`
  color: #f35252;
`;
const StopsLeft = styled.div`
  color: #767676;
  padding-right: 5px;
`;
const DeleteModal = styled.div`
  display: flex;
  width: 108px;
  height: 38px;
  padding: 9px 16px;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  right: 0;
  top: 15px;
  box-sizing: border-box;
  color: var(--NavOrange, #e37653);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-radius: 2px;
  border: 0.5px solid var(--Gray06, #767676);
  background: #fff;
  box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.1);
`;
const ModalText = styled.div`
  width: 30px;
`;
const DeleteIcon = styled.div`
  width: 24px;
  height: 24px;
`;
export default FavoriteItem;
