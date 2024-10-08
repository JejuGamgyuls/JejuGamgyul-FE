import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { busDirectionState } from '../atoms/busDirectionState';

function BusDetailDirection({ busInfo }) {
  const dirList = [busInfo.edStationNm, busInfo.stStationNm];
  const [direction, setDirection] = useRecoilState(busDirectionState);

  useEffect(() => {
    setDirection(dirList[0]);
  }, [busInfo]);

  const handleDirection = (dir) => {
    setDirection(dir);
  };

  return (
    <Wrapper>
      <RoutePath>
        <RoutePathText
          isSelected={direction === dirList[0]}
          onClick={() => handleDirection(dirList[0])}
        >
          {dirList[0]}
        </RoutePathText>
        <RoutePathText
          isSelected={direction === dirList[1]}
          onClick={() => handleDirection(dirList[1])}
        >
          {dirList[1]}
        </RoutePathText>
      </RoutePath>
    </Wrapper>
  );
}

export default BusDetailDirection;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;
const RoutePath = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 100px;
  margin-top: 20px;
  height: 50px;
  width: 90%;
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
`;

const RoutePathText = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  line-height: normal;
  min-width: 75px;
  height: auto;
  text-align: center;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => (props.isSelected ? '20px' : '0')};
  color: ${(props) => (props.isSelected ? 'var(--Gray08, #fff)' : 'var(--Gray01, #404040)')};
  background-color: ${(props) => (props.isSelected ? 'var(--Orange, #FD825B)' : ' #fff')};
  font-weight: ${(props) => (props.isSelected ? '600' : '500')};
  &:hover {
    cursor: pointer;
  }
  padding: 5px;
`;
