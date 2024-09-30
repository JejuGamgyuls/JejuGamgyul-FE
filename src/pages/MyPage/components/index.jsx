import * as busApi from '@apis/favorite';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import MyInfoHeader from './MyInfoHeader';
import MyInfoItem from './MyInfoItem';

function MyInfo() {
  const [favoriteCnt, setFavoriteCnt] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFavoritesCounts = async () => {
      try {
        const data = await busApi.getAllFavorites();
        setFavoriteCnt(data.length);
      } catch (e) {
        throw new Error(e);
      } finally {
        setLoading(false);
      }
    };
    getFavoritesCounts();
  }, []);

  if (loading) {
    return <div>로딩 중...</div>;
  }
  return (
    <Wrapper>
      <MyInfoHeader />
      <MyInfoItem favoriteCnt={favoriteCnt}></MyInfoItem>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 332px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px;
  padding: 30px 0px;
  box-sizing: border-box;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
export default MyInfo;
