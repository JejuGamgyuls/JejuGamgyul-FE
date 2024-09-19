export const CATEGORY = {
  HOME: 'HOME',
  FAVORITE: 'FAVORITE',
  TIMETABLE: 'TIMETABLE',
  MYINFO: 'MYINFO',
  BUSDETAILINFO: 'BUSDETAILINFO',
  BUSSTOPINFO: 'BUSSTOPINFO',
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
