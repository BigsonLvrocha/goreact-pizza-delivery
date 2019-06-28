import styled from 'styled-components';
import { metrics, colors } from '../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: ${230 - 2 - metrics.basePadding * 2}px;
  padding: ${metrics.baseMargin}px ${metrics.basePadding}px;
  border-radius: ${metrics.baseRadius * 2}px;
  justify-content: flex-start;
  border: 1px solid ${colors.lighter};
  margin-top: ${metrics.baseMargin}px;
  &.middle {
    margin-right: ${metrics.baseMargin}px;
    margin-left: ${metrics.baseMargin}px;
  }

  span.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 60px;
    width: 60px;
  }

  div.content {
    padding: ${metrics.baseMargin / 2}px ${metrics.basePadding / 2}px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    span.title {
      font-family: Helvetica;
      font-size: 13px;
      color: #0b2031;
      letter-spacing: 0;
      text-align: left;
      font-weight: normal;
    }

    span.size {
      font-family: Helvetica;
      font-size: 11px;
      color: #706e7b;
      letter-spacing: 0;
      line-height: 10.77px;
      text-align: left;
      margin-top: ${metrics.baseMargin / 2}px;
    }
  }
`;
