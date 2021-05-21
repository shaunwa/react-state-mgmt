import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UseStatePage } from './use-state/UseStatePage';
import { ContextPage } from './context/ContextPage';
import { RecoilPage } from './recoil/RecoilPage';
import { ReduxPage } from './redux/ReduxPage';
import { MobXPage } from './mobx/MobXPage';
import './App.css';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/use-state">
                    <UseStatePage />
                </Route>
                <Route path="/context">
                    <ContextPage />
                </Route>
                <Route path="/recoil">
                    <RecoilPage />
                </Route>
                <Route path="/redux">
                    <ReduxPage />
                </Route>
                <Route path="/mobx">
                    <MobXPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
