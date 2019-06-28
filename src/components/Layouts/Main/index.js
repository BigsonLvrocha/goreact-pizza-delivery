import React from 'react';
import { Container } from './styles';
import Logo from '../../../Assets/logo.png';
import Bag from '../../../Assets/DC71C255-1647-4C11-A43D-857455429624@1x.png';

const Main = () => (
  <Container>
    <nav>
      <div className="logo">
        <img className="logo" src={Logo} alt="Logo pizza" />
        <span className="logo">Pizzaria Don Juan</span>
      </div>
      <div className="actions">
        <div className="account-actions">
          <span className="username">Luiz Victor</span>
          <button className="leave" type="button">
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

export default Main;
