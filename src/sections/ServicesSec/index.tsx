import * as S from './styles';

import Section from '../../components/Section';
import imgLandingPages from '../../assets/img/landingPages.jpeg';
import imgEcommerce from '../../assets/img/ecommerce.jpeg';
import imgApp from '../../assets/img/app.jpeg';
import imgMaintaince from '../../assets/img/maintaince2.jpeg';

const Services = () => {
  return (
    <Section title="Services" id="services" background="bg1">
      <S.ServicesCont>
        <S.ServiceCard>
          <h3>📱 Landing Pages</h3>
          <div>
            <img src={imgLandingPages} alt="img" />
            <p>Criadas para converter visitantes em clientes, rápidas e responsivas.</p>
          </div>
        </S.ServiceCard>

        <S.ServiceCard>
          <h3>🛒 E-commerce</h3>
          <div>
            <img src={imgEcommerce} alt="img" />
            <p>Venda seus produtos online com sistemas prontos e customizáveis.</p>
          </div>
        </S.ServiceCard>

        <S.ServiceCard>
          <h3>📲 Apps</h3>
          <div>
            <img src={imgApp} alt="img" />
            <p>Seu site travado ou dando erro? Eu resolvo.</p>
          </div>
        </S.ServiceCard>

        <S.ServiceCard>
          <h3>🛠️ Manutenção de Sites</h3>
          <div>
            <img src={imgMaintaince} alt="img" />
            <p>
              Atualização de textos, imagens, preços e informações no seu site sempre que você
              precisar.
            </p>
          </div>
        </S.ServiceCard>
      </S.ServicesCont>
    </Section>
  );
};

export default Services;
