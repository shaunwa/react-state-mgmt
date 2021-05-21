import { useRecoilValue } from 'recoil';
import { shouldShowCongratsState } from './shouldShowCongratsState';
import { CounterButton } from './CounterButton';

export const RegularExample = () => {
    console.log('Rendering Regular Example');
    const shouldShowCongrats = useRecoilValue(shouldShowCongratsState);

    return (
        <>
        <h2>This is the regular example:</h2>
        <CounterButton />
        {shouldShowCongrats && <h1>Congratulations! You've reached 10 clicks!</h1>}
        </>
    );
}