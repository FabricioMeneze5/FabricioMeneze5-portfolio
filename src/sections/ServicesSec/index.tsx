import * as S from './styles';

import Section from '../../components/Section';
import Img from '../../assets/img/ecommerce.jpeg';

const Services = () => {
  return (
    <Section title="Services">
      <S.ServicesCont>
        <S.ServiceCard>
          <h3>📱 Landing Pages</h3>
          <div>
            <img src={Img} alt="img" />
            <p>Criadas para converter visitantes em clientes, rápidas e responsivas.</p>
          </div>
        </S.ServiceCard>

        <S.ServiceCard>
          <h3>🛒 E-commerce</h3>
          <div>
            <img src={Img} alt="img" />
            <p>Venda seus produtos online com sistemas prontos e customizáveis.</p>
          </div>
        </S.ServiceCard>

        <S.ServiceCard>
          <h3>🐞 Apps</h3>
          <div>
            <img src={Img} alt="img" />
            <p>Seu site travado ou dando erro? Eu resolvo.</p>
          </div>
        </S.ServiceCard>

        <S.ServiceCard>
          <h3>🛠️ Manutenção de Sites</h3>
          <div>
            <img src={Img} alt="img" />
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
