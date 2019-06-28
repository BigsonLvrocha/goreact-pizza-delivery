import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dots } from 'react-activity';
import Immutable from 'seamless-immutable';
import { Creators as OrderActions } from '../../store/ducks/order';
import Layout from '../../components/Layouts/Main';
import { Container } from './styles';
import OrderItem from './OrderItem';

class Orders extends Component {
  static propTypes = {
    fetchOrdersRequest: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      }),
    ).isRequired,
  };

  componentDidMount() {
    const { fetchOrdersRequest } = this.props;
    fetchOrdersRequest();
  }

  render() {
    const { data, isLoading, error } = this.props;
    return (
      <Layout>
        <Container>
          <span className="title">Últimos pedidos</span>
          {error && <span className="erroText">{error}</span>}
          {isLoading ? (
            <Dots />
          ) : (
            <ul>
              {data.map(item => (
                <OrderItem order={item} key={item.id} />
              ))}
            </ul>
          )}
        </Container>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  order: state.order,
  isLoading: state.order.isLoading,
  error: state.order.error,
  data: Immutable.asMutable(state.order.data.slice()).sort((a, b) => {
    if (Date.parse(a.created_at) < Date.parse(b.created_at)) {
      return 1;
    }
    if (Date.parse(a.created_at) > Date.parse(b.created_at)) {
      return -1;
    }
    return 0;
  }),
});

const mapDispatchToProps = dispatch => bindActionCreators(OrderActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Orders);
