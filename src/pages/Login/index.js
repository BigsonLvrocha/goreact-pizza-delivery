import React, { Component } from 'react';
import PizzaLayout from '../../components/Layouts/Pizza';
import Logo from '../../Assets/logo@3x.png';
import { Container } from './styles';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  render() {
    const { email, password } = this.state;
    return (
      <PizzaLayout>
        <Container>
          <img src={Logo} alt="pizza logo" />
          <form>
            <input
              value={email}
              onChange={event => this.setState({ email: event.target.value })}
              placeholder="Seu e-mail"
              type="email"
            />
            <input
              value={password}
              onChange={event => this.setState({ password: event.target.value })}
              placeholder="Senha secreta"
              type="password"
            />
            <button type="submit" disabled={!email || !password}>
              Entrar
            </button>
          </form>
        </Container>
      </PizzaLayout>
    );
  }
}

export default Login;
