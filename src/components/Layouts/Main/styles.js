import styled from 'styled-components';
import { metrics, colors } from '../../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: ${metrics.basePadding}px 0;
    background: ${colors.navigation};
    width: 100%;

    div.logo {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      span.logo {
        font-family: Helvetica;
        font-size: 18px;
        color: #ffffff;
        letter-spacing: 0;
        text-align: left;
        font-weight: bolder;
        margin-left: ${metrics.basePadding}px;
      }
    }

    div.actions {
      display: flex;
      flex-direction: row;
      align-items: center;

      div.account-actions {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        padding: 0 ${metrics.basePadding}px;
        border-right: 1px solid ${colors.whiteTransparent};

        span.username {
          font-family: Helvetica;
          font-size: 16px;
          color: #ffffff;
          text-align: left;
          font-weight: bold;
        }

        button.leave {
          opacity: 0.6;
          font-family: Helvetica;
          font-size: 14px;
          color: #ffffff;
          text-align: right;
          background: ${colors.transparent};
          border-style: none;
        }
      }
      div.cart-logo {
        display: flex;
        margin-left: ${metrics.basePadding}px;
        height: 32px;
        width: 32px;
        border-radius: 50%;
        background: ${colors.primary};
        position: relative;
        align-items: center;
        justify-content: center;
        div.cart-badge {
          top: 0;
          right: 0;
          position: absolute;
          height: 10px;
          width: 10px;
          border-radius: 50%;
          background: ${colors.yellow};
        }
      }
    }
  }
`;
