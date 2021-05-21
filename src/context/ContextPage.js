import { CounterButton } from './CounterButton';
import { CounterProvider } from './CounterProvider';

export const ContextPage = () => {
    return (
        <>
        <h1>Context Page</h1>
        <CounterProvider>
            <CounterButton />
        </CounterProvider>
        </>
    );
}