import * as S from './styles';
import avatar from '../../assets/img/eu (2).jpg';
import Carousel from '../../components/carousel/Carousel';
import github from '../../assets/svg/github.svg';
import linkedin from '../../assets/svg/linkedin.svg';

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
          <p>
            Solving problems <span>since</span> <br />
            <span>my first</span> Hello World.
          </p>
          <ul>
            <li>
              <a href="downloads/download-test.txt" download>
                <img src="https://picsum.photos/64" alt="Download CS" title="CV" />
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
          <img src={avatar} alt="FabricioMeneze5 img" />
        </S.ImageHero>
      </S.HeroContent>
      <Carousel />
    </S.SectionHero>
  );
};

export default Hero;
