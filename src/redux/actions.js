export const INCREMENTED = 'INCREMENTED';
export const incremented = (incrementBy) => ({
    type: INCREMENTED,
    payload: { incrementBy },
});

export const RESET = 'RESET';
export const reset = () => ({
    type: RESET,
});