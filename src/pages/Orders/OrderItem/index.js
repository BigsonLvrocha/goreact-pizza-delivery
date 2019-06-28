import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

const OrderItem = ({ order }) => (
  <Container>
    <span className="title">
      Pedido #
      {order.order_number}
      {' '}
-
      {' '}
      {order.user.username}
    </span>
  </Container>
);

OrderItem.propTypes = {
  order: PropTypes.shape({
    order_number: PropTypes.number.isRequired,
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default OrderItem;
