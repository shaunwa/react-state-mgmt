import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incremented, reset } from './actions';

export const CounterButton = () => {
    const numberOfClicks = useSelector(state => state.numberOfClicks);
    const dispatch = useDispatch();

    return (
        <div>
            {/* <input
                type="number"
                value={incrementBy}
                onChange={e => setIncrementBy(Number(e.target.value))} /> */}
            <h3>You have clicked the button {numberOfClicks} times</h3>
            <button onClick={() => dispatch(incremented(1))}>Click here</button>
            <button onClick={() => dispatch(reset())}>Reset Count</button>
        </div>
    );
}

