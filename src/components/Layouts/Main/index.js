import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Creators as SessionActions } from '../../../store/ducks/session';
import { Container } from './styles';
import Logo from '../../../Assets/logo.png';
import Bag from '../../../Assets/DC71C255-1647-4C11-A43D-857455429624@1x.png';

const Main = ({ loggedUserName, logout }) => (
  <Container>
    <nav>
      <div className="logo">
        <img className="logo" src={Logo} alt="Logo pizza" />
        <span className="logo">Pizzaria Don Juan</span>
      </div>
      <div className="actions">
        <div className="account-actions">
          <span className="username">{loggedUserName}</span>
          <button className="leave" type="button" onClick={() => logout()}>
            Sair do app
          </button>
        </div>
        <div className="cart-logo">
          <div className="cart-badge" />
          <img src={Bag} alt="shopping bag" />
        </div>
      </div>
    </nav>
  </Container>
);

Main.propTypes = {
  loggedUserName: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loggedUserName: state.session.adminData.username,
});

const mapDispatchToProps = dispatch => bindActionCreators(SessionActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
