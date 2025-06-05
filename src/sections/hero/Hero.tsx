import * as S from './styles';
// import avatar from '../../assets/img/eu (2).jpg';

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
          <img src="https://picsum.photos/400/400" alt="FabricioMeneze5 imagem" />
          {/* <img src={avatar} alt="FabricioMeneze5 imagem" /> */}
        </S.ImageHero>
      </S.HeroContent>
      <S.Carrossel>
        <img src="https://picsum.photos/64" alt="imagem" title="React" />
        <img src="https://picsum.photos/64" alt="imagem" title="React" />
        <img src="https://picsum.photos/64" alt="imagem" title="React" />
        <img src="https://picsum.photos/64" alt="imagem" title="React" />
        <img src="https://picsum.photos/64" alt="imagem" title="React" />
        <img src="https://picsum.photos/64" alt="imagem" title="React" />
        <img src="https://picsum.photos/64" alt="imagem" title="React" />
        <img src="https://picsum.photos/64" alt="imagem" title="React" />
        <img src="https://picsum.photos/64" alt="imagem" title="React" />
        <img src="https://picsum.photos/64" alt="imagem" title="React" />
        <img src="https://picsum.photos/64" alt="imagem" title="React" />
        <img src="https://picsum.photos/64" alt="imagem" title="React" />
        <img src="https://picsum.photos/64" alt="imagem" title="React" />
        <img src="https://picsum.photos/64" alt="imagem" title="React" />
        <img src="https://picsum.photos/64" alt="imagem" title="React" />
      </S.Carrossel>
    </S.SectionHero>
  );
};

export default Hero;
