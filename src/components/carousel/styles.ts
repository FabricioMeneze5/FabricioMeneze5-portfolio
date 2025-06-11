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
    width: 52px;
    height: 52px;
    border-radius: 50%;
    margin: 0 5px;
  }
`;
