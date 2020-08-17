import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Search from '../Search';
import Countries from '../Countries';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Search</Link>
            </li>
            <li>
              <Link to="/countries">All Countries</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/countries">
            <Countries />
          </Route>
          <Route path="/">
            <Search />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
