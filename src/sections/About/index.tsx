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
          <b>$ carreira --path</b>
          <p>
            Iniciei em administração, restauração e posteriormente em um negócio próprio. Em
            Portugal retomei minha paixão na área de tecnologia e, desde junho de 2023, estudo
            programação. Hoje atuo como Supervisor de TI há 2 anos e busco direcionar minha carreira
            em desenvolvimento de software, unindo minha experiência em gestão com meu conhecimento
            em programação.
          </p>

          <b>$ cursos --list</b>
          <p>
            Dev Backend Java (EBAC) <b>|</b> Dev Front-end JavaScript (EBAC) <b>|</b> Auxiliar
            Administrativo (Casa da Moeda do Brasil) <b>|</b> Adm de Sistemas GNU/Linux (Udemy){' '}
            <b>|</b> ITSM - Gestão de serviços de TI (Udemy)
          </p>

          <b>$ tecnologias --list</b>
          <p>
            React, TypeScript, Java <b>|</b> Vue, jQuery, Redux <b>|</b> SASS, Bootstrap, Cypress
          </p>

          <b>$ interesses</b>
          <p>Café ☕, League of Legends, Café ☕, Animes, Café ☕, *One Piece*, Café ☕. </p>

          <b>$ contato --email</b>
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
