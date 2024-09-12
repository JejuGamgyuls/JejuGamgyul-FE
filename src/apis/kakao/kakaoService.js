import axios from 'axios';

export const getAddressFromCoordinates = async (lat, lng) => {
  try {
    const response = await axios.get(
      `https://dapi.kakao.com/v2/local/geo/coord2address.json?input_coord=WGS84&x=${lng}&y=${lat}`,
      {
        headers: {
          Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_API_KEY}`,
        },
      },
    );
    const location = response.data.documents[0];
    const address = {
      si: location.address.region_1depth_name,
      gu: location.address.region_2depth_name,
      dong: location.address.region_3depth_name,
    };
    return address;
  } catch (err) {
    console.log(err.message);
  }
};
