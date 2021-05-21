import { useState } from 'react';
import { observer } from 'mobx-react';

export const CounterButton = observer(({ counter }) => {
    const [incrementBy, setIncrementBy] = useState(1);

    return (
        <div>
            {counter.shouldShowCongratulationsMessage && <p>Congrats!</p>}
            <input
                type="number"
                value={incrementBy}
                onChange={e => setIncrementBy(Number(e.target.value))} />
            <h3>You have clicked the button {counter.numberOfClicks} times</h3>
            <button onClick={() => counter.increment(incrementBy)}>Click here</button>
            <button onClick={() => counter.reset()}>Reset</button>
        </div>
    );
})