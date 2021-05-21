import { RegularExample } from './RegularExample';
import { Counter } from './Counter';
import { CounterButton } from './CounterButton';

const counter = new Counter();

export const MobXPage = () => {
    return (
        <>
        <h1>MobX Page</h1>
        <CounterButton counter={counter} />
        </>
    );
}