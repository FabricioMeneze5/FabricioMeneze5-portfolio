import styled, { keyframes } from 'styled-components';

const slideEffect = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const ContainerSlide = styled.div`
  width: 100%;
  height: 74px;
  display: flex;
  overflow-x: hidden;
  position: absolute;
  bottom: 0;

  .slide {
    display: flex;

    &:hover .images {
      animation-play-state: paused;
    }
    .images {
      display: flex;
      align-items: center;
      animation: 60s ${slideEffect} infinite linear;
    }
  }
  img {
    width: 52px;
    height: 52px;
    margin: 0 5px;
  }
`;
