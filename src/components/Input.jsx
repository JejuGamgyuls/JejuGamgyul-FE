import styled from 'styled-components';

function Input({ placeholder, onChange }) {
  return <TextInput placeholder={placeholder} onChange={onChange} />;
}

const TextInput = styled.input`
  width: 360px;
  height: 66px;
  border-radius: 5px;
  border: 1px solid #5e5e5e;
  background: #fff;
  font-family: Inter;
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-left: 27px;
  color: #595959;
  &::placeholder {
    color: #767373;
  }
  &:focus {
    outline: none;
  }
`;

export default Input;
