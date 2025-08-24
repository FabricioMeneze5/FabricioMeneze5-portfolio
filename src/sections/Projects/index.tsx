import { useEffect, useState } from 'react';

import * as S from './styles';

import Section from '../../components/Section';
import Tags from '../../components/Tags';
import Button from '../../components/Button';
import { fetchProjects, Project } from '../../Service/api';

const Projects = () => {
  const [getRepo, setRepo] = useState<Project[]>([]);

  useEffect(() => {
    fetchProjects()
      .then((data) => setRepo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Section title="Projects" id="projects" $bgColor="bg2">
      <S.Cards>
        <div>
          {getRepo.map((res) => (
            <S.Card key={res.name}>
              <img src={res.image} alt="img" />
              <div>
                <h3>{res.title}</h3>
                <Tags langKey={res.name} languages={res.languages} />
                <div className="btns">
                  <Button type="link" url={res.homepage}>
                    View
                  </Button>
                  <Button type="link" url={res.html_url}>
                    Code
                  </Button>
                </div>
              </div>
            </S.Card>
          ))}
        </div>
      </S.Cards>
    </Section>
  );
};

export default Projects;
