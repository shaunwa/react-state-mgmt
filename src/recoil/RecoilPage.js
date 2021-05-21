import { RecoilRoot } from 'recoil';
import { RegularExample } from './RegularExample';

export const RecoilPage = () => {
    return (
        <RecoilRoot>
            <h1>Recoil Page</h1>
            <RegularExample />
        </RecoilRoot>
    );
}