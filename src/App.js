import './App.css';
import styled from "styled-components";
import Data from "./data.json"
import Main from './pages/main';
import PageCards from './pages/pageCards';
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
          <Route path="/pagecards">
            <PageCards />
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
