import React from 'react';
import Layout from '../../components/Layouts/Main';
import data from './mockedData';
import { Container } from './styles';
import OrderItem from './OrderItem';

const Orders = () => (
  <Layout>
    <Container>
      <span className="title">Hello from orders page</span>
      <ul>
        {data.map(item => (
          <OrderItem order={item} key={item.id} />
        ))}
      </ul>
    </Container>
  </Layout>
);

export default Orders;
