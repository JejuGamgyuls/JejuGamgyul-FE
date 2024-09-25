import { http, HttpResponse } from 'msw';

import { getLowArrInfoByStIdList } from './responses/getLowArrInfoByRoute';
import { getRouteInfo } from './responses/getRouteInfo';
import { getStaionByRoute } from './responses/getStaionByRoute';

export const handlers = [
  http.get('/getRouteInfo', () => {
    return HttpResponse.json(getRouteInfo);
  }),

  http.get('/getStaionByRoute', () => {
    return HttpResponse.json(getStaionByRoute);
  }),

  http.get('/getLowArrInfoByStId', () => {
    return HttpResponse.json(getLowArrInfoByStIdList);
  }),
];
