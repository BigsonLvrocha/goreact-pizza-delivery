import styled from 'styled-components';
import { metrics, colors } from '../../../styles';

export const Container = styled.div`
  border-radius: ${metrics.baseRadius * 2}px;
  display: flex;
  flex-direction: column;
  padding: ${metrics.basePadding}px;
  -webkit-box-shadow: 0px 0px 20px -9px #000000;
  box-shadow: 0px 0px 20px -9px #000000;
  width: 650;
  margin-top: ${metrics.baseMargin}px;

  span.title {
    font-family: Helvetica;
    font-size: 18px;
    color: #0b2031;
    letter-spacing: 0;
    text-align: left;
  }

  span.time-text {
    font-family: Helvetica;
    font-size: 11px;
    color: #706e7b;
    letter-spacing: 0;
    line-height: 14px;
    text-align: left;
    margin-top: ${metrics.baseMargin / 2}px;
  }

  span.price-text {
    font-family: Helvetica;
    font-size: 16px;
    color: #0b2031;
    letter-spacing: 0;
    text-align: left;
    font-weight: bold;
    margin-top: ${metrics.baseMargin / 2}px;
  }

  div.size-list {
    margin-top: ${metrics.basePadding}px;
    padding: ${metrics.basePadding}px 0;
    border-top: 1px solid ${colors.lighter};
    border-bottom: 1px solid ${colors.lighter};
  }

  span.observations {
    font-family: Helvetica;
    font-size: 14px;
    color: #706e7b;
    letter-spacing: 0;
    text-align: left;
    margin-top: ${metrics.basePadding}px;
  }
`;
