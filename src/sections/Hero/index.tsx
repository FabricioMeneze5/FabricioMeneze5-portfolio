import * as S from './styles';
import Typewriter from '../../components/Typewriter';

import avatar from '../../assets/img/eu.jpg';
import Slide from '../../components/Slide';
import github from '../../assets/svg/github.svg';
import linkedin from '../../assets/svg/linkedin.svg';
import downloadAnimation from '../../assets/animations/download-animation.json';

const Hero = () => {
  return (
    <S.SectionHero id="hero">
      <S.HeroContent className="container">
        <S.TextHero>
          <p>
            <span>{'<'}</span>Fabricio
          </p>
          <p>
            Menezes<span>{'/>'}</span>
          </p>
          <Typewriter />
          <ul>
            <li>
              <a href="downloads/download-test.txt" download>
                <S.LottieIcon animationData={downloadAnimation} />
              </a>
            </li>
            <li>
              <a href="https://github.com/FabricioMeneze5" target="_blank" rel="noreferrer">
                <img src={github} alt="github" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/fabricio-meneze5/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
            </li>
          </ul>
        </S.TextHero>
        <S.ImageHero>
          <S.TiltImg>
            <img src={avatar} alt="FabricioMeneze5 img" />
          </S.TiltImg>
          <S.Shadow />
        </S.ImageHero>
      </S.HeroContent>
      <Slide />
    </S.SectionHero>
  );
};

export default Hero;
