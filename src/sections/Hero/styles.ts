import styled from 'styled-components';
import Lottie from 'lottie-react';
import { breakpoints } from '../../style';
import Tilt from 'react-parallax-tilt';

export const SectionHero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.background1};
  padding-bottom: 64px;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 64px 0;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column-reverse;
  }
`;

export const LottieIcon = styled(Lottie)`
  width: 125px;
  height: 125px;
  background-color: #fff;
`;

export const TextHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.mainColor};

  > p {
    font-size: 64px;
    line-height: 50px;
    font-family: 'Aldrich', sans-serif;
    line-height: 50px;
    user-select: none;
  }

  > p:nth-of-type(2) {
    text-align: end;
  }

  span {
    color: ${({ theme }) => theme.mainTextColor};
  }

  ul {
    display: flex;
    justify-content: center;
    width: 100%;

    li:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
    li:nth-child(2) {
      border-radius: 50%;
    }

    li {
      margin: 0 10px;
      height: 64px;
      width: 64px;
      overflow: hidden;
    }

    a {
      display: block;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    align-items: center;
    justify-content: start;

    > p {
      font-size: 44px;
      text-align: center;

      span {
        display: none;
      }
    }
    > p:nth-of-type(2) {
      text-align: center;
    }

    ul {
      li {
        height: 44px;
        width: 44px;
      }
    }
  }
`;

export const ImageHero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const TiltImg = styled(Tilt).attrs({
  tiltReverse: true,
  scale: 1.05,
  glareEnable: true,
  glareMaxOpacity: 0.4,
  glareColor: 'lightblue',
  glarePosition: 'top',
  glareBorderRadius: '200px',
})`
  overflow: hidden;
  width: 80%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: ridge 5px ${({ theme }) => theme.mainTextColor};
  z-index: 1;

  @media (max-width: ${breakpoints.mobile}) {
    width: 75%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Shadow = styled.div`
  width: 65%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  box-shadow: 0px 0px 50px 20px ${({ theme }) => theme.mainTextColor};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: ${breakpoints.mobile}) {
    width: 50%;
  }
`;
