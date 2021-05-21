import { selector } from 'recoil';
import { numberOfClicksState } from './numberOfClicksState';
import { thresholdState } from './thresholdState';

export const shouldShowCongratsState = selector({
    key: 'shouldShowCongrats',
    get: ({ get }) => {
        const numberOfClicks = get(numberOfClicksState);
        return numberOfClicks >= get(thresholdState);
    },
    set: ({ set, get }, value) => {
        set(numberOfClicksState, get(thresholdState));
    },
});