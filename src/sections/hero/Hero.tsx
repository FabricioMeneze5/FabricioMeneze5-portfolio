import * as S from './styles';
import avatar from '../../assets/img/eu (2).jpg';
import Carousel from '../../components/carousel/Carousel';
// import avatar from '../../assets/svg/bootstrap.svg';

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
              <img src="https://picsum.photos/64" alt="imagem" title="React" />
            </li>
            <li>
              <img src="https://picsum.photos/64" alt="imagem" title="React" />
            </li>
            <li>
              <img src="https://picsum.photos/64" alt="imagem" title="React" />
            </li>
            <li>
              <img src="https://picsum.photos/64" alt="imagem" title="React" />
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
