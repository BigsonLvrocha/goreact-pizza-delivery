import React from 'react';
import PropTypes from 'prop-types';
import { Container, BackImage } from './styles';
import PizzaImage from '../../../Assets/fundo.jpg';

const Pizza = ({ children }) => (
  <Container>
    <BackImage src={PizzaImage} alt="Grande deliciosa pizza" />
    {children}
  </Container>
);

Pizza.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Pizza;
