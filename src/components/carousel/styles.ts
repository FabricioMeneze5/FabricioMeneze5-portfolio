import styled from 'styled-components';

export const ContainerCarousel = styled.div`
  width: 100%;
  height: 74px;
  overflow-x: hidden;
  position: absolute;
  bottom: 0;

  div {
    display: flex;
    align-items: center;
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin: 0 5px;
  }
`;
