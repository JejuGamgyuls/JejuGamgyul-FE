import axios from 'axios';

export const getLowArrInfoByStId = async (stId) => {
  try {
    const res = await axios.get('/getLowArrInfoByStId', {
      params: {
        stId: stId,
      },
    });
    console.log(res.data);
    const data = res.data.msgBody.itemList.filter(
      (item) => item.arrmsg1 !== '출발대기' && item.arrmsg1 !== '운행종료',
    );
    return data;
  } catch (e) {
    throw new Error(e);
  }
};
