import { CATEGORY } from '@constants/const';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'navigationBarState',
  storage: localStorage,
});

export const navigationBarState = atom({
  key: 'navigationBarState',
  default: CATEGORY.HOME,
  effects_UNSTABLE: [persistAtom],
});
export const selectedState = atom({
  key: 'selectedState',
  default: 0,
});
export const scrollByDirectionState = atom({
  key: 'scrollByDirectionState',
  default: 'end',
});
export const userState = atom({
  key: 'userState',
  default: null,
});
