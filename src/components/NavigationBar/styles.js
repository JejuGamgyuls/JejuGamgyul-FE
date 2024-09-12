import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 63px;
  height: 100vh;
  border-right: 1px solid rgba(6, 6, 6, 0.5);
  background-color: white;
  padding: 0;
  position: fixed;
  z-index: 1;
  padding-top: 16px;
`;

export const NavIconList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  gap: 24px;
`;

export const NavIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: black;
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
