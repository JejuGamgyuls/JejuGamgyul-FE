import styled from 'styled-components';

function Input({ type = 'text', placeholder, onChange }) {
  return <TextInput type={type} placeholder={placeholder} onChange={onChange} />;
}

const TextInput = styled.input`
  flex: 1;
  box-sizing: border-box;
  min-width: 360px;
  height: 66px;
  border-radius: 5px;
  border: 1px solid #5e5e5e;
  background: #fff;
  font-family: Inter;
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 0 27px;
  color: #595959;
  &::placeholder {
    color: #767373;
  }
  &:focus {
    outline: none;
  }
`;

export default Input;
