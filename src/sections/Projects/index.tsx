import { useEffect, useState } from 'react';

import * as S from './styles';

import Section from '../../components/Section';
import Tags from '../../components/Tags';
import Button from '../../components/Button';

type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  url: string;
  homepage: string | null;
  languages_url: [];
};

type Project = GitHubRepo & {
  image: string;
  title: string;
};

const Projects = () => {
  const [getRepo, setRepo] = useState<Project[]>([]);

  const desiredRepos: { name: string; title: string; image: string }[] = [
    {
      name: 'agenda-de-contatos',
      title: 'Agenda de Contatos',
      image: 'https://picsum.photos/500?random=1',
    },
    {
      name: 'arithmetic-calculator',
      title: 'Arithmetic Calculator',
      image: 'https://picsum.photos/500?random=2',
    },
    { name: 'BMIcalculator', title: 'BMI Calculator', image: 'https://picsum.photos/500?random=4' },
    {
      name: 'contact-list-95',
      title: `Contact List '95`,
      image: 'https://picsum.photos/500?random=5',
    },
    {
      name: 'efood',
      title: 'E Food',
      image: 'https://picsum.photos/500?random=7',
    },
    {
      name: 'GameShop',
      title: 'GameShop',
      image: 'https://picsum.photos/500?random=8',
    },
    {
      name: 'jQuery-Photos-Gallery',
      title: 'Photos Gallery',
      image: 'https://picsum.photos/500?random=9',
    },
    {
      name: 'minhas-tarefas',
      title: 'Minhas Tarefas',
      image: 'https://picsum.photos/500?random=10',
    },
    {
      name: 'my_birthday',
      title: 'My Birthday',
      image: 'https://picsum.photos/500?random=11',
    },
    {
      name: 'Oasis-Hotel',
      title: 'Oasis Hotel',
      image: 'https://picsum.photos/500?random=112',
    },
  ];

  useEffect(() => {
    fetch('https://api.github.com/users/FabricioMeneze5/repos')
      .then((res) => res.json())
      .then((data: GitHubRepo[]) => {
        const filtered = data
          .filter((repo) => desiredRepos.some((d) => d.name === repo.name))
          .map((repo) => {
            const img = desiredRepos.find((d) => d.name === repo.name)?.image || '';
            const titl = desiredRepos.find((d) => d.name === repo.name)?.title || '';
            return { ...repo, title: titl, image: img };
          });
        setRepo(filtered);
      })
      .catch((err) => {
        console.log(`ERRO >>: ${err}`);
      });
  }, []);

  console.log(getRepo);

  return (
    <Section title="Projects" id="projects" background="bg2">
      <S.Cards>
        <div>
          {getRepo.map((res) => (
            <S.Card key={res.name}>
              <img src={res.image} alt="img" />
              <div>
                <h3>{res.title}</h3>
                <Tags />
                <div className="btns">
                  <Button disabled type="button">
                    View
                  </Button>
                  <Button
                    url="https://www.youtube.com/watch?v=Duh2XH2yJcU&ab_channel=UOL"
                    type="link"
                  >
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
