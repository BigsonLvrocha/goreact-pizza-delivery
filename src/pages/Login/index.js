import React from 'react';
import PizzaLayout from '../../components/Layouts/Pizza';
import Logo from '../../Assets/logo@3x.png';
import { Container } from './styles';

const Login = () => (
  <PizzaLayout>
    <Container>
      <img src={Logo} alt="pizza logo" />
      <form>
        <input placeholder="Seu e-mail" type="email" />
        <input placeholder="Senha secreta" type="password" />
        <button type="submit">Entrar</button>
      </form>
    </Container>
  </PizzaLayout>
);

export default Login;
