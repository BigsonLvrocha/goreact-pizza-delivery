import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
`;

export const BackImage = styled.img`
  position: absolute;
  top: 0;
  height: 100%;
  min-width: 100%;
  z-index: -1;
  overflow: hidden;
`;
