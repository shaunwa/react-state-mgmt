import { useState } from 'react';

export const CounterButton = () => {
    const [numberOfClicks, setNumberOfClicks] = useState(0);
    const [incrementBy, setIncrementBy] = useState(1);

    return (
        <div>
            <input
                type="number"
                value={incrementBy}
                onChange={e => setIncrementBy(Number(e.target.value))} />
            <h3>You have clicked the button {numberOfClicks} times</h3>
            <button onClick={() => setNumberOfClicks(numberOfClicks + incrementBy)}>Click here</button>
        </div>
    );
}