import styled from 'styled-components';

export const NavigationBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 63px;
  height: 100vh;
  border-right: 1px solid rgba(6, 6, 6, 0.5);

  padding: 0;
  position: fixed;
  z-index: 1;
`;

export const NavIcon = styled.div`
  width: 24px;
  height: 24px;
  &:hover {
    background-color: #f5f5f5;
  }
`;
