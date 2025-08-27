import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import * as S from './styles';

import Section from '../../components/Section';
import imgLandingPages from '../../assets/img/landing.png';
import imgEcommerce from '../../assets/img/ecommerce.png';
import imgApp from '../../assets/img/App.png';
import imgMaintaince from '../../assets/img/maintaince.png';

const Stacks = () => {
  useEffect(() => {
    AOS.init({
      duration: 8000,
      easing: 'ease',
    });
    AOS.refresh();
  }, []);

  return (
    <Section title="Stacks" id="stacks" $bgColor="bg1">
      <S.ServicesCont>
        <S.ServiceCard data-aos="fade-right">
          <h3>📱 Landing Pages</h3>
          <div>
            <img src={imgLandingPages} alt="img" />
            <p>
              Páginas rápidas, responsivas e com foco em destacar seu serviço ou produto com clareza
              e impacto.
            </p>
          </div>
        </S.ServiceCard>

        <S.ServiceCard data-aos="fade-left">
          <h3>🛒 E-commerce</h3>
          <div>
            <img src={imgEcommerce} alt="img" />
            <p>
              Lojas virtuais completas, prontas pra vender: carrinho, pagamento, cadastro de
              produtos e layout adaptado ao seu negócio.
            </p>
          </div>
        </S.ServiceCard>

        <S.ServiceCard data-aos="fade-right">
          <h3>🧩 Web Apps Interativas</h3>
          <div>
            <img src={imgApp} alt="img" />
            <p>
              Ferramentas e interfaces dinâmicas sob medida pro seu negócio, pensadas para engajar e
              proporcionar interações ricas.
            </p>
          </div>
        </S.ServiceCard>

        <S.ServiceCard data-aos="fade-left">
          <h3>🛠️ Manutenção de Sites</h3>
          <div>
            <img src={imgMaintaince} alt="img" />
            <p>
              Atualização de textos, imagens, preços, seções e funcionalidades. Seu site sempre em
              dia, sem complicação.
            </p>
          </div>
        </S.ServiceCard>
      </S.ServicesCont>
    </Section>
  );
};

export default Stacks;
