import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { numberOfClicksReducer } from './reducers';

const rootReducer = combineReducers({
    numberOfClicks: numberOfClicksReducer,
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(),
);