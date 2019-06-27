import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Orders from './pages/Orders';

const Routes = () => (
  <BrowserRouter>
    <Route path="/" exact component={Login} />
    <Route path="/order" exact component={Orders} />
  </BrowserRouter>
);

export default Routes;
