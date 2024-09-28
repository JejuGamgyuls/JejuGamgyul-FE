import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 390px;
  height: 100vh;
  background-color: white;
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  box-sizing: border-box;
`;

export const BusStopItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
  height: 100vh;
`;
