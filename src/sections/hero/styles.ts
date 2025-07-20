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
  background-color: ${(props) => props.theme.background1};
  position: relative;
  padding-bottom: 64px;
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
  color: ${(props) => props.theme.mainColor};
  background-color: chartreuse;

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
    color: ${(props) => props.theme.mainTextColor};
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
      font-size: 52px;
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
  background-color: aquamarine;

  .shadow {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    box-shadow: 0px 0px 30px 15px ${(props) => props.theme.mainTextColor};
    position: relative;
    top: 0;
    right: 0;

    @media (max-width: ${breakpoints.mobile}) {
      width: 250px;
      height: 250px;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding-top: 64px;
  }
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  border: ridge 5px ${(props) => props.theme.background1};
  position: absolute;
  overflow: hidden;
  background-color: blue;

  @media (max-width: ${breakpoints.mobile}) {
    width: 300px;
    height: 300px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
