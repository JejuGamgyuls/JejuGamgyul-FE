import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 750px;
  transform: translate(-50%, -50%);
  margin: 0 auto;
`;
export const Header = styled.div`
  width: 100%;
  height: 100px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const InputsWrapper = styled.div`
  padding-top: 44px;
  height: 132px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const ButtonsWrapper = styled.div`
  padding-top: 98px;
  height: 146px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
