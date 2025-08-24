import Lottie from 'lottie-react';
import styled from 'styled-components';
import { breakpoints } from '../../style';

export const BgFooter = styled.div`
  width: 100%;
  height: 96px;
  background-color: ${({ theme }) => theme.secundaryColor};

  @media (max-width: ${breakpoints.mobile}) {
    height: auto;
    padding: 10px 0;
  }
`;

export const ContainerFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 96px;

  div:nth-child(2) {
    height: 100%;
    text-align: center;

    p {
      margin: 10px 0;
      font-weight: bold;
      color: ${(porps) => porps.theme.mainTextColor};

      @media (max-width: ${breakpoints.mobile}) {
        font-size: 12px;
        margin: 10px 15px;
      }
    }
  }
  button {
    width: 60px;
    font-weight: bolder;
  }
`;

export const LottieWrapper = styled.div`
  width: 60px;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

export const LottieIcon = styled(Lottie)`
  width: 140px;
  aspect-ratio: 1/1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: ${breakpoints.mobile}) {
    width: 110px;
  }
`;
