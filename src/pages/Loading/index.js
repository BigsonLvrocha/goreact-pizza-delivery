import React from 'react';
import { Dots } from 'react-activity';
import Layout from '../../components/Layouts/Pizza';
import { Container } from './styles';

const Loading = () => (
  <Layout>
    <Container>
      <h1>Validating user...</h1>
      <Dots />
    </Container>
  </Layout>
);

export default Loading;
