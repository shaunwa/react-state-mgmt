import { useRecoilState } from 'recoil';
import { numberOfClicksState } from './numberOfClicksState';
import { shouldShowCongratsState } from './shouldShowCongratsState';

export const CounterButton = () => {
    const [numberOfClicks, increment] = useRecoilState(numberOfClicksState);
    const [,setShouldShowCongrats] = useRecoilState(shouldShowCongratsState);

    return (
        <div>
            {/* <input
                type="number"
                value={incrementBy}
                onChange={e => setIncrementBy(Number(e.target.value))} /> */}
            <h3>You have clicked the button {numberOfClicks} times</h3>
            <button onClick={increment}>Click here</button>
            <button onClick={() => setShouldShowCongrats(true)}>Just congratulate me!</button>
        </div>
    );
}