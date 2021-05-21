import { useContext } from 'react';
import { CounterContext } from './CounterContext';

export const CounterButton = () => {
    const { numberOfClicks, increment, reset } = useContext(CounterContext);

    return (
        <div>
            {/* <input
                type="number"
                value={incrementBy}
                onChange={e => setIncrementBy(Number(e.target.value))} /> */}
            <h3>You have clicked the button {numberOfClicks} times</h3>
            <button onClick={increment}>Click here</button>
            <button onClick={reset}>Reset Count</button>
        </div>
    );
}