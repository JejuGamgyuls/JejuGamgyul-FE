import styled from 'styled-components';

function DupCheckButton({ checkEmail }) {
  return <StyledButton onClick={checkEmail}>중복확인</StyledButton>;
}
const StyledButton = styled.button`
  min-width: 100px;
  height: 66px;
  border-radius: 5px;
  border: 1.5px solid #fd825b;
  background: #fff;
  color: #fd825b;
  font-family: Inter;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  &:hover {
    cursor: pointer;
    color: #fff;
    background: #fd825b;
  }
`;
export default DupCheckButton;
