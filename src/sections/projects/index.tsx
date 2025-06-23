import * as S from './styles';

import Section from '../../components/Section';

import Tags from '../../components/Tags';

const Projects = () => {
  return (
    <Section title="Projects">
      <S.Cards>
        <div>
          <S.Card>
            <img src="https://picsum.photos/500?random=1" alt="img" />
            <div>
              <h3>Fitle</h3>
              <Tags />
              <div className="btns">
                <button type="button">View</button>
                <button type="button">Code</button>
              </div>
            </div>
          </S.Card>
          <S.Card>
            <img src="https://picsum.photos/500?random=2" alt="img" />
            <div>
              <h3>Fitle</h3>
              <Tags />
              <div className="btns">
                <button type="button">View</button>
                <button type="button">Code</button>
              </div>
            </div>
          </S.Card>
          <S.Card>
            <img src="https://picsum.photos/500?random=3" alt="img" />
            <div>
              <h3>Fitle</h3>
              <Tags />
              <div className="btns">
                <button type="button">View</button>
                <button type="button">Code</button>
              </div>
            </div>
          </S.Card>
          <S.Card>
            <img src="https://picsum.photos/500?random=4" alt="img" />
            <div>
              <h3>Fitle</h3>
              <Tags />
              <div className="btns">
                <button type="button">View</button>
                <button type="button">Code</button>
              </div>
            </div>
          </S.Card>
          <S.Card>
            <img src="https://picsum.photos/500?random=5" alt="img" />
            <div>
              <h3>Fitle</h3>
              <Tags />
              <div className="btns">
                <button type="button">View</button>
                <button type="button">Code</button>
              </div>
            </div>
          </S.Card>
          <S.Card>
            <img src="https://picsum.photos/500?random=6" alt="img" />
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
