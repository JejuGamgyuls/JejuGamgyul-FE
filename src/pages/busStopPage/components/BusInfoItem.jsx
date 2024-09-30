import BlueBusIcon from '@assets/svg/BlueBusIcon.svg?react';
import BothArrow from '@assets/svg/BothArrow.svg?react';
import FavoriteIcon from '@assets/svg/FavoriteIcon.svg?react';
import FilledStarIcon from '@assets/svg/FilledStarIcon.svg?react';
import { navigationBarState } from '@atoms/navigationBarState';
import { CATEGORY } from '@constants/const';
import { ROUTE } from '@constants/route';
import useGetDirection from '@hooks/useGetDirection';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { formatTime } from '../utils/formatTime';

function BusInfoItem({ arrmsg1, busRouteId, rtNm, exps1, exps2, arrmsg2 }) {
  const { direction } = useGetDirection(busRouteId);
  const [left1, setLeft1] = useState(exps1);
  const [left2, setLeft2] = useState(exps2);

  const [isFavorite, setIsFavorite] = useState(false);
  const { busStopName } = useParams();
  const busStopId = new URLSearchParams(window.location.search).get('busStopId');
  const [, setCategory] = useRecoilState(navigationBarState);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setLeft1((prev) => (prev > 0 ? prev - 1 : 0));
      setLeft2((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleAddFavorite = async (e) => {
    e.stopPropagation();
    try {
      const res = await axios.post(
        'http://localhost:8080/favorites/add',
        {
          busStopId: busStopId,
          busStopName: busStopName,
          routeName: rtNm,
          routeId: busRouteId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      );
      if (res.status === 201) {
        alert('즐겨찾기에 추가되었습니다.');
        handleGetFavorites();
      }
    } catch (e) {
      throw new Error(e);
    }
  };

  const handleGetFavorites = async () => {
    try {
      const res = await axios.get('http://localhost:8080/favorites/getByUserToken', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      setIsFavorite(res.data.some((item) => item.routeId === busRouteId));
    } catch (e) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    handleGetFavorites();
  }, []);

  const handleCancelFavorite = async (e) => {
    e.stopPropagation();
    try {
      const res = await axios.delete('http://localhost:8080/favorites/delete', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        params: {
          busStopId: busStopId,
          routeid: busRouteId,
        },
      });
      if (res.status === 200) {
        alert('즐겨찾기에서 삭제되었습니다.');
        handleGetFavorites();
      }
    } catch (e) {
      throw new Error(e);
    }
  };

  const navigateToBusDetail = (rtNm) => {
    const url = ROUTE.BUSFIND.replace(':busNumber', rtNm);
    navigate(url);
    setCategory(CATEGORY.BUSDETAILINFO);
  };
  return (
    <Wrapper onClick={() => navigateToBusDetail(rtNm)}>
      <BusInfoWrapper>
        <IconWrapper>
          <BlueBusIcon style={{ width: '24px', height: '24px' }} />
        </IconWrapper>
        <BusInfo>
          <BusDetails>
            <BusNumber>{rtNm}</BusNumber>
            {isFavorite ? (
              <IconWrapper onClick={handleCancelFavorite}>
                <FilledStarIcon style={{ width: '16px', height: '16px', cursor: 'pointer' }} />
              </IconWrapper>
            ) : (
              <IconWrapper onClick={handleAddFavorite}>
                <FavoriteIcon style={{ width: '16px', height: '16px', cursor: 'pointer' }} />
              </IconWrapper>
            )}
          </BusDetails>
          <RouteDetails>
            {direction.from.length > 0 && (
              <Route>
                {direction.from}
                <BothArrow />
                {direction.to}
              </Route>
            )}
          </RouteDetails>
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
        </BusInfo>
      </BusInfoWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 110px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BusInfoWrapper = styled.div`
  width: 332px;
  height: 71px;
  display: flex;
  gap: 22px;
`;
const IconWrapper = styled.div`
  width: 12px;
`;
const BusInfo = styled.div`
  width: 304px;
`;
const BusDetails = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  gap: 22px;
  justify-content: space-between;
  align-items: center;
`;
const RouteDetails = styled.div`
  width: 100%;
  height: 16px;
  display: flex;
  gap: 34px;
  padding-top: 8px;
  color: #000;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const ArrivalDetails = styled.div`
  width: 100%;
  height: 16px;
  display: flex;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  gap: 5px;
  padding-top: 5px;
`;
const BusNumber = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 21px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  align-items: flex-end;
`;
const BusDirection = styled.div`
  color: #777;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: flex-end;
`;
const Route = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  word-break: break-word; /* white-space: nowrap; */
`;
const ArrivalMessage = styled.div`
  white-space: nowrap;
  color: #f35252;
`;
const StopsLeft = styled.div`
  color: #767676;
  padding-right: 5px;
`;
export default BusInfoItem;
