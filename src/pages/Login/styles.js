import styled from 'styled-components';
import { colors, metrics } from '../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    height: 72px;
    width: 72px;
    margin-bottom: ${metrics.basePadding}px;
  }

  form {
    display: flex;
    flex-direction: column;

    > input {
      background: ${colors.white};
      width: 200px;
      border-radius: ${metrics.baseRadius + 2}px;
      border-style: none;
      margin-top: ${metrics.baseMargin}px;
      padding: ${metrics.baseMargin}px ${metrics.basePadding}px;
    }

    > button {
      background: ${colors.primary};
      color: ${colors.white};
      width: 100%;
      margin-top: ${metrics.basePadding}px;
      border-radius: ${metrics.baseRadius + 2}px;
      padding: ${metrics.baseMargin}px ${metrics.basePadding}px;
      border-style: none;
    }

    > span {
      color: ${colors.danger};
      font-size: 15px;
      font-weight: bolder;
      text-align: center;
    }
  }
`;
