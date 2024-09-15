import styled from 'styled-components';

function SubmitButton({ text }) {
  return <StyledButton>{text}</StyledButton>;
}
const StyledButton = styled.button`
  width: 360px;
  height: 66px;
  border-radius: 5px;
  background: #fd825b;
  border: none;
  color: #fff;
  font-family: Inter;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 15px;
`;
export default SubmitButton;
