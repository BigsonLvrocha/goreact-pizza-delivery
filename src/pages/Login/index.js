import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Dots } from 'react-activity';
import { Creators as SessionActions } from '../../store/ducks/session';
import PizzaLayout from '../../components/Layouts/Pizza';
import Logo from '../../Assets/logo@3x.png';
import { Container } from './styles';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  static propTypes = {
    loginRequest: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
  };

  handleSubmit = (event) => {
    const { loginRequest } = this.props;
    const { email, password } = this.state;
    event.preventDefault();
    loginRequest(email, password);
  };

  render() {
    const { email, password } = this.state;
    const { error, isLoading } = this.props;
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
              required
            />
            <input
              value={password}
              onChange={event => this.setState({ password: event.target.value })}
              placeholder="Senha secreta"
              type="password"
              required
            />
            {error && <span className="error">{error}</span>}
            <button onClick={this.handleSubmit} type="submit">
              {isLoading ? <Dots /> : <span>Entrar</span>}
            </button>
          </form>
        </Container>
      </PizzaLayout>
    );
  }
}

const mapStateToProps = state => ({
  error: state.session.error,
  isLoading: state.session.isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators(SessionActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
