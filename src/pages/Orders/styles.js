import styled from 'styled-components';
import { metrics } from '../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 650px;
  margin-top: ${metrics.basePadding}px;

  span.title {
    font-family: Helvetica;
    font-size: 18px;
    color: #333333;
    text-align: left;
    font-weight: bold;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
`;
