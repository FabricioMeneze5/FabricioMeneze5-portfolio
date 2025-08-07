import styled, { keyframes } from 'styled-components';
import { breakpoints } from '../../style';

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
  height: 54px;
  display: flex;
  overflow-x: hidden;
  position: absolute;
  bottom: 4px;

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
    height: 100%;
    margin: 0 5px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 40px;
  }
`;
