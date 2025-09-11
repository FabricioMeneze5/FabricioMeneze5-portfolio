import { useTranslation } from 'react-i18next';

import Section from '../../components/Section';

import * as S from './styles';

import imgCommand from '../../assets/img/command-prompt.png';

const About = () => {
  const { t } = useTranslation();
  return (
    <Section title={t('about.title')} $bgColor="bg2" id="about">
      <S.AboutContainer>
        <S.HeaderAbout>
          <div>
            <img src={imgCommand} alt="prompt commands" />
            <div>Prompt Commands</div>
          </div>
          <div className="closeMenu">
            <div>━</div>
            <div>❐</div>
            <div>✖</div>
          </div>
        </S.HeaderAbout>
        <S.ContentAbout>
          <p>
            <small>Microsoft Windows [Version 00.0.0000]</small>
            <b>C:\Users\FabricioMeneze5{'>'}</b>
          </p>
          <b>{t('about.t1')}</b>
          <p>{t('about.p1')}</p>

          <b>{t('about.t2')}</b>
          <p>{t('about.p2')}</p>

          <b>{t('about.t3')}</b>
          <p>{t('about.p3')}</p>

          <b>{t('about.t4')}</b>
          <p>{t('about.p4')}</p>

          <b>{t('about.t5')}</b>
          <p>fabricio-menezes@live.com</p>
        </S.ContentAbout>
      </S.AboutContainer>
    </Section>
  );
};

export default About;
// $ carreira --path
// Minha jornada começou em administração e empreendedorismo, mas em Portugal redescobri minha paixão por tecnologia. Desde junho de 2023 estudo programação e hoje atuo como Supervisor de TI, mirando a transição para o desenvolvimento de software.
// ---------------------------------------------
// $ carreira --path
// Passei por administração, restauração e empreendedorismo até encontrar meu caminho na tecnologia em Portugal. Estudo programação desde 2023 e atuo como Supervisor de TI, buscando crescer como desenvolvedor de software.

// ---------------------------------------------
// $ carreira --path
// De administração e negócios próprios à tecnologia em Portugal, minha trajetória reflete busca por evolução. Desde 2023 estudo programação e atualmente sou Supervisor de TI, com o objetivo de consolidar minha carreira como desenvolvedor.

// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
