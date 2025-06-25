import styled from 'styled-components';
import Lottie from 'lottie-react';

export const SectionHero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 64px);
  background-color: ${(props) => props.theme.background1};
  position: relative;
`;

export const HeroContent = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 74px;
`;

export const LottieIcon = styled(Lottie)`
  width: 125px;
  height: 125px;
  background-color: #fff;
`;

export const TextHero = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  color: ${(props) => props.theme.mainColor};

  > p {
    font-size: 64px;
    line-height: 50px;
    font-family: 'Aldrich', sans-serif;
    font-size: 64px;
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
`;

export const ImageHero = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;

  .shadow {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    box-shadow: 0px 0px 30px 15px ${(props) => props.theme.mainTextColor};

    img {
      width: 350px;
      height: 350px;
      border-radius: 50%;
      object-fit: cover;
      border: ridge 5px ${(props) => props.theme.background1};
    }
  }
`;
