import { atom, selector } from 'recoil';

const _numberOfClicksState = atom({
    key: '_numberOfClicks',
    default: 0,
});

export const numberOfClicksState = selector({
    key: 'numberOfClicks',
    get: ({ get }) => get(_numberOfClicksState),
    set: ({ get, set }) => {
        set(_numberOfClicksState, get(_numberOfClicksState) + 1);
    }
})