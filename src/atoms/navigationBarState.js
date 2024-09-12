import { CATEGORY } from '@constants/const';
import { atom } from 'recoil';

export const navigationBarState = atom({
  key: 'navigationBarState',
  default: CATEGORY.HOME,
});
