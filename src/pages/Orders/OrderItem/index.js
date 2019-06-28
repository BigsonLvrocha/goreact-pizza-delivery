import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
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
    <span className="time-text">
      {formatDistanceToNow(Date.parse(order.created_at), {
        locale: ptBR,
        addSuffix: true,
      })}
    </span>
    <span className="price-text">
      {order.total.toLocaleString('ptBR', {
        style: 'currency',
        currency: 'BRL',
      })}
    </span>
    <div className="size-list">Size list</div>
    <span className="observations">
      <b>Observações: </b>
      {order.observations}
    </span>
  </Container>
);

OrderItem.propTypes = {
  order: PropTypes.shape({
    order_number: PropTypes.number.isRequired,
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
    created_at: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    observations: PropTypes.string,
  }).isRequired,
};

export default OrderItem;
