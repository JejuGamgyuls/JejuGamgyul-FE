import DownArrowLineIcon from '@assets/svg/DownArrowLineIcon.svg?react';
import TurnIcon from '@assets/svg/TurnIcon.svg?react';
import { scrollByDirectionState } from '@atoms/navigationBarState';
import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import theme from '../../../../theme';
import { busDirectionState } from '../atoms/busDirectionState';
// nextStatus 0: 원활, 1: 보통, 2: 혼잡, 3: 매우혼잡
// const mock = [
//   { name: '흥안운수사계4동종점', id: 11491, nextStatus: '0' },
//   { name: '하계역', id: 11491, nextStatus: '0' },
//   { name: '하계역', id: 11491, nextStatus: '1' },
//   { name: '하계역', id: 11491, nextStatus: '2' },
//   { name: '하계역', id: 11491, nextStatus: '3' },
//   { name: '하계역', id: 11491, nextStatus: '2' },
//   { name: '하계역', id: 11491, nextStatus: '1' },
//   { name: '하계역', id: 11491, nextStatus: '1' },
//   { name: '하계역', id: 11491, nextStatus: '0' },
//   { name: '하계역', id: 11491, nextStatus: '0' },
//   { name: '하계역', id: 11491, nextStatus: '1' },
//   { name: '하계역', id: 11491, nextStatus: '2' },
//   { name: '하계역', id: 11491, nextStatus: '2' },
//   { name: '하계역', id: 11491, nextStatus: '2' },
//   { name: '하계역', id: 11491, nextStatus: '3' },
//   { name: '하계역', id: 11491, nextStatus: '3' },
//   { name: '하계역', id: 11491, nextStatus: '2' },
//   { name: '하계역', id: 11491, nextStatus: '1' },
//   { name: '하계역', id: 11491, nextStatus: '0' },
//   { name: '하계역', id: 11491, nextStatus: '0' },
//   { name: '하계역', id: 11491, nextStatus: '2' },
//   { name: '하계역', id: 11491, nextStatus: '0' },
//   { name: '하계역', id: 11491, nextStatus: '1' },
//   { name: '노원우체국', id: 11491, nextStatus: null },
// ];

function nextStatusColor(status) {
  switch (status) {
    case '0':
      return theme.busRouteStatus.gray;
    case '1':
      return theme.busRouteStatus.orange;
    case '2':
      return theme.busRouteStatus.red;
    case '3':
      return theme.busRouteStatus.gray;
    default:
      return 'black';
  }
}

function BusRoute({ stations }) {
  const [direction] = useRecoilState(busDirectionState);
  const [, setSelectedDirection] = useRecoilState(scrollByDirectionState);
  const itemRefs = useRef([]);
  useEffect(() => {
    const matchingStationIndex = stations.findIndex((station) => station.direction === direction);

    if (matchingStationIndex == 0) {
      setSelectedDirection('end');
    } else if (
      matchingStationIndex !== -1 &&
      matchingStationIndex > 1 &&
      itemRefs.current[matchingStationIndex - 2]
    ) {
      itemRefs.current[matchingStationIndex - 2].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setSelectedDirection('start');
    }
  }, [direction, stations]);

  return (
    <Wrapper>
      {stations.map((item, index) => (
        <BusItemWrapper
          key={index}
          ref={(el) => (itemRefs.current[index] = el)}
          style={{ position: 'relative', width: '100%', height: '80px' }}
        >
          <StatusWrapper>
            <IconWrapper>
              <DownArrowLineIcon />
              {item.transYn == 'Y' && (
                <RoundingPointWrapper>
                  <RoundingPointText>회차</RoundingPointText>
                  <TurnIcon style={{ width: '12px', height: '12px' }} />
                </RoundingPointWrapper>
              )}
            </IconWrapper>
            <NextStatus status={item.nextStatus} index={index} mockLen={stations.length} />
          </StatusWrapper>
          <BusStopItem>
            <BusStopText index={index} mockLen={stations.length}>
              <BusStopName>
                {item.stationNm}
                {index == 0 && <EndPoint>기점</EndPoint>}
                {index === stations.length - 1 && <EndPoint>종점</EndPoint>}
              </BusStopName>
              <BusStopId> {item.arsId}</BusStopId>
            </BusStopText>
          </BusStopItem>
        </BusItemWrapper>
      ))}
    </Wrapper>
  );
}

export default BusRoute;
const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;
  box-sizing: border-box;
`;

const BusItemWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
`;
const StatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  position: absolute;
  left: 30px;
  top: 25%;
`;

const NextStatus = styled.div`
  width: 3px;
  height: 150%;
  background-color: ${(props) =>
    props.index === props.mockLen - 1 ? 'white' : nextStatusColor(props.status)};
`;
const BusStopText = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 6px;
  width: 100%;
  border-bottom: ${(props) => (props.index === props.mockLen - 1 ? 'none' : '0.5px solid #b3b3b3')};
  padding-left: 40px;
`;
const BusStopItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 65px;
  width: 90%;
  box-sizing: border-box;
  padding-left: 40px;
`;

export const BusStopName = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const BusStopId = styled.div`
  color: var(--Gray07, #595959);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 15px;
`;

export const EndPoint = styled.div`
  border: 1px solid var(--Blue, #386de8);
  color: var(--Blue, #386de8);
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 2px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
export const RoundingPointWrapper = styled.div`
  width: 50px;
  border-radius: 14px;
  background: #868c94;
  display: flex;
  justify-content: space-around;
  padding: 4px 8px;
  align-items: center;
  position: absolute;
`;
export const RoundingPointText = styled.div`
  width: 40px;
  color: #fff;
`;
