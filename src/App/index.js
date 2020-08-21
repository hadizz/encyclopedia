import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from '../Search';
import Countries from '../Countries';
import CountryPage from '../CountryPage';
import AppBar from './AppBar';
import Nav from './Nav';

import Wrapper from './Components';

const App = () => {
  return (
    <Wrapper>
      <Router>
        <Nav />
        <Switch>
          <Route path="/country/:code">
            <CountryPage />
          </Route>

          <Route path="/country">
            <Countries />
          </Route>

          <Route path="/">
            <Search />
          </Route>
        </Switch>
        <AppBar />
      </Router>
    </Wrapper>
  );
};

export default App;
