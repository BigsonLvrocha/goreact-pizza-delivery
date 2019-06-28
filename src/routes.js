import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from './pages/Loading';
import Login from './pages/Login';
import Orders from './pages/Orders';

const Routes = ({ isUserLogged, userChecked }) => (userChecked ? (
  <BrowserRouter>
    <Switch>
      <Route
        path="/"
        exact
        render={() => (isUserLogged ? <Redirect to="/order" /> : <Login />)}
      />
      <Route
        path="/order"
        exact
        render={() => (isUserLogged ? <Orders /> : <Redirect to="/" />)}
      />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  </BrowserRouter>
) : (
  <Loading />
));

Routes.propTypes = {
  isUserLogged: PropTypes.bool.isRequired,
  userChecked: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isUserLogged: !(state.session.adminData === null || state.session.adminToken === null),
  userChecked: state.session.userChecked,
});

export default connect(mapStateToProps)(Routes);
