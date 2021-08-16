import './App.css';
import styled from "styled-components";
import Data from "./data.json"
import Main from './pages/main';
import SobreJogo from './pages/sobreJogo';
import Personagens from './pages/personagens';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/sobreJogo">
            <SobreJogo/>
          </Route>
          <Route path="/personagens">
            <Personagens />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
