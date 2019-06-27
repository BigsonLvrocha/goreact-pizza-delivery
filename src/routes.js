import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import Login from './pages/Login';
import Orders from './pages/Orders';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/order" exact component={Orders} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
