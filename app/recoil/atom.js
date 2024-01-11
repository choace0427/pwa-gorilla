'use client';

import { atom, selector } from 'recoil';

const nameState = atom({
  key: 'name',
  default: '',
});

const nameSelector = selector({
  key: 'nameSelState',
  get: ({ get }) => {
    const name = get(nameState);
    return `My name is ${name}`;
  },
});

export { nameState, nameSelector };
