import * as S from './styles';

import Section from '../../components/Section';

import imagem from '../../assets/img/landingPages.jpeg';
import Tags from '../../components/Tags';

const Projects = () => {
  return (
    <Section title="Projects">
      <S.Cards>
        <div>
          <S.Card>
            <img src={imagem} alt="img" />
            <div>
              <h3>Fitle</h3>
              <Tags />
              <div className="btns">
                <button type="button">View</button>
                <button type="button">Code</button>
              </div>
            </div>
          </S.Card>
        </div>
      </S.Cards>
    </Section>
  );
};

export default Projects;
