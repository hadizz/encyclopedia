import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from '../Search';
import Countries from '../Countries';

import Wrapper from './Components';

const App = () => {
  return (
    <Wrapper>
      <Router>
        <Switch>
          <Route path="/countries">
            <Countries />
          </Route>
          <Route path="/">
            <Search />
          </Route>
        </Switch>
      </Router>
    </Wrapper>
  );
};

export default App;
