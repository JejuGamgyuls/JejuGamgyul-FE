export const CATEGORY = {
  HOME: 'HOME',
  FAVORITE: 'FAVORITE',
  MYINFO: 'MYINFO',
  BUSDETAILINFO: 'BUSDETAILINFO',
  BUSSTOPINFO: 'BUSSTOPINFO',
  BUSSTOPFIND: 'BUSSTOPFIND',
};

export const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 60 * 1, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
  maximumAge: 1000 * 3600 * 24, // 24 hour
};

export const STYLE = {
  BUS_STOP_ITEM_HEIGHT: 110,
  CURRENT_LOCATION_HEADER_HEIGHT: 60,
  FIND_BUS_INPUT_HEIGHT: 45,
};

export const ROUTETYPETAG = {
  1: '공항',
  2: '마을',
  3: '간선',
  4: '지선',
  5: '순환',
  6: '광역',
  7: '인천',
  8: '경기',
  9: '폐지',
  0: '공용',
};

export const ROUTETYPECOLORS = {
  1: '#000',
  2: '#000',
  3: '#4086F4',
  4: '#4086F4',
  5: '#FBC02D',
  6: '#F44336',
  7: '#386de8',
  8: '#000',
  9: '#000',
  0: '#000',
};
