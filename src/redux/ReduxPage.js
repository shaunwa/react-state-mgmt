import { Provider } from 'react-redux';
import { RegularExample } from './RegularExample';
import { store } from './store';

export const ReduxPage = () => {
    return (
        <Provider store={store}>
            <h1>Redux Page</h1>
            <RegularExample />
        </Provider>
    );
}