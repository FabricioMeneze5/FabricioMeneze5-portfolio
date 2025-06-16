import * as S from './styles';

import Section from '../../components/Section';

import imagem from '../../assets/img/landingPages.jpeg';

const Projects = () => {
  return (
    <Section title="Projects">
      <S.Cards>
        <S.Card>
          <img src={imagem} alt="img" />
          <h3>title</h3>
          <div>tags</div>
          <div className="btns">
            <button type="button">View</button>
            <button type="button">Code</button>
          </div>
        </S.Card>
        <S.Card>
          <img src={imagem} alt="img" />
          <h3>title</h3>
          <div>tags</div>
          <div className="btns">
            <button type="button">View</button>
            <button type="button">Code</button>
          </div>
        </S.Card>
        <S.Card>
          <img src={imagem} alt="img" />
          <h3>title</h3>
          <div>tags</div>
          <div className="btns">
            <button type="button">View</button>
            <button type="button">Code</button>
          </div>
        </S.Card>
        <S.Card>
          <img src={imagem} alt="img" />
          <h3>title</h3>
          <div>tags</div>
          <div className="btns">
            <button type="button">View</button>
            <button type="button">Code</button>
          </div>
        </S.Card>
        <S.Card>
          <img src={imagem} alt="img" />
          <h3>title</h3>
          <div>tags</div>
          <div className="btns">
            <button type="button">View</button>
            <button type="button">Code</button>
          </div>
        </S.Card>
      </S.Cards>
    </Section>
  );
};

export default Projects;
