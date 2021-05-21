import { INCREMENTED, RESET } from './actions';

export const numberOfClicksReducer = (numberOfClicks = 0, action) => {
    const { type } = action;

    switch (type) {
        case INCREMENTED: {
            const { incrementBy } = action.payload;
            return numberOfClicks + incrementBy;
        }
        case RESET: {
            return 0;
        }
        default:
            return numberOfClicks;
    }
}