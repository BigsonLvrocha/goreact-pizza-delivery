import styled from 'styled-components';
import { metrics } from '../../../styles';

export const Container = styled.div`
  border-radius: ${metrics.baseRadius}px;
  display: flex;
  flex-direction: column;
  padding: ${metrics.basePadding}px;
  elevation: 5;
  -webkit-box-shadow: 0px 0px 20px -9px #000000;
  box-shadow: 0px 0px 20px -9px #000000;
  width: 650;
  margin-top: ${metrics.baseMargin}px;
`;
