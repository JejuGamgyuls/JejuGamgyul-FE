import styled from 'styled-components';

function SideBarHeader({ children, height }) {
  return <Wrapper height={height}>{children}</Wrapper>;
}

export default SideBarHeader;

const Wrapper = styled.div`
  width: 100%;
  height: ${({ height }) => height + 'px'};
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  margin-top: 15px;
  border-bottom: 1px solid #e5e5e5;
  color: #000;
  font-family: Pretendard;
  font-size: 21px;
  font-style: normal;
  font-weight: 700;

  svg {
    width: 20px;
    height: 20px;
    margin: 0 9px 0 12px;
  }
`;
