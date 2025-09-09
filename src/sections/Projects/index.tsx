import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';

import * as S from './styles';

import Section from '../../components/Section';
import Tags from '../../components/Tags';
import Button from '../../components/Button';

import { fetchProjects, Project } from '../../Service/api';

const Projects = () => {
  const [getRepo, setRepo] = useState<Project[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    fetchProjects()
      .then((data) => setRepo(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 8000,
      easing: 'ease',
    });
    AOS.refresh();
  }, [getRepo]);

  return (
    <Section title={t('header.l1')} id="projects" $bgColor="bg2">
      <S.Cards>
        {getRepo.map((res) => (
          <S.Card key={res.name} data-aos="flip-right">
            <img src={res.image} alt="img" />
            <div>
              <h3>{res.title}</h3>
              <Tags langKey={res.name} languages={res.languages} />
              <div className="btns">
                <Button type="link" url={res.homepage}>
                  {t('button.t1')}
                </Button>
                <Button type="link" url={res.html_url}>
                  {t('button.t2')}
                </Button>
              </div>
            </div>
          </S.Card>
        ))}
      </S.Cards>
    </Section>
  );
};

export default Projects;
