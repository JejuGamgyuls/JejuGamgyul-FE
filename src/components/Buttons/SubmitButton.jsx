import styled from 'styled-components';

function SubmitButton({ width, height, text, background, border, color, handleClick }) {
  return (
    <StyledButton
      onClick={handleClick}
      $width={width}
      $height={height}
      $background={background}
      $border={border}
      color={color}
    >
      {text}
    </StyledButton>
  );
}
const StyledButton = styled.button`
  width: ${({ $width }) => $width || '360px'};
  height: ${({ $height }) => $height || '66px'};
  border-radius: 5px;
  background: ${({ $background }) => $background || '#fd825b'};
  border: ${({ $border }) => $border || 'none'};
  color: ${({ color }) => color || '#fff'};
  font-family: Inter;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  &:hover {
    cursor: pointer;
  }
`;
export default SubmitButton;
