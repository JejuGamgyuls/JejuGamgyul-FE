import styled from 'styled-components';

function MyInfoItem() {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>즐겨찾기</Title>
      </TitleWrapper>
      <FavoriteCnt>7개</FavoriteCnt>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding-left: 26px;
  display: flex;
  gap: 10px;
`;
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
  color: #767373;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const FavoriteCnt = styled.div`
  color: #e37653;
  text-align: center;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  &:hover {
    cursor: pointer;
  }
`;
export default MyInfoItem;
