import { useState } from 'react';

import * as S from './styles';

import Typewriter from '../../components/Typewriter';

import avatar from '../../assets/img/eu.jpg';
import Slide from '../../components/Slide';
import github from '../../assets/svg/github.svg';
import linkedin from '../../assets/svg/linkedin.svg';
import downloadAnimation from '../../assets/animations/download-animation.json';

const Hero = () => {
  const [$showDownload, setShowDownload] = useState(false);

  const toggleDownload = () => {
    setShowDownload(!$showDownload);
  };

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

          <S.IconsList $showDownload={$showDownload}>
            <li>
              <button onClick={toggleDownload}>
                <div className="lottieContainer">
                  <S.LottieIcon animationData={downloadAnimation} />
                </div>
              </button>
              <div className="downloadBox">
                <a
                  href="downloads/Cv-Fabricio-Menezes-Portugues-v2.pdf"
                  download
                  onClick={toggleDownload}
                >
                  CV Português
                </a>
                <a
                  href="downloads/Cv-Fabricio-Menezes-English-v2.pdf"
                  download
                  onClick={toggleDownload}
                >
                  CV English
                </a>
              </div>
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
          </S.IconsList>
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
