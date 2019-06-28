import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

const OrderSizeItem = ({ index, size }) => (
  <Container className={index % 3 === 1 ? 'middle' : ''}>
    <span className="image-container">
      <img
        src={size.cart_image_display === 'size' ? size.file.url : size.productType.file.url}
        alt={size.productType.cart_name}
        height="60"
      />
    </span>
    <div className="content">
      <span className="title">
        {size.pivot.amount > 1 && (
        <b>
          {size.pivot.amount}
x
          {' '}
        </b>
        )}
        {size.productType.cart_name}
      </span>
      <span className="size">{size.cart_name}</span>
    </div>
  </Container>
);

OrderSizeItem.propTypes = {
  index: PropTypes.number.isRequired,
  size: PropTypes.shape({
    cart_name: PropTypes.string.isRequired,
    cart_image_display: PropTypes.string.isRequired,
    file: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
    productType: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
      cart_name: PropTypes.string.isRequired,
    }).isRequired,
    pivot: PropTypes.shape({
      amount: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default OrderSizeItem;
