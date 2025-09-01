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
        <S.ServiceCard data-aos="flip-left">
          <h3>📱 Landing Pages</h3>
          <div>
            <img src={imgLandingPages} alt="img" />
            <p>
              Fast, responsive pages designed to highlight your service or product clearly and with
              impact.
            </p>
          </div>
        </S.ServiceCard>

        <S.ServiceCard data-aos="flip-right">
          <h3>🛒 E-commerce</h3>
          <div>
            <img src={imgEcommerce} alt="img" />
            <p>
              Complete online stores ready to sell: shopping cart, payment, product management, and
              layouts tailored to your business.
            </p>
          </div>
        </S.ServiceCard>

        <S.ServiceCard data-aos="flip-left">
          <h3>🧩 Interactive Web Apps</h3>
          <div>
            <img src={imgApp} alt="img" />
            <p>
              Custom tools and dynamic interfaces for your business, designed to engage users and
              provide rich interactions.
            </p>
          </div>
        </S.ServiceCard>

        <S.ServiceCard data-aos="flip-right">
          <h3>🛠️ Website Maintenance</h3>
          <div>
            <img src={imgMaintaince} alt="img" />
            <p>
              Updates for text, images, prices, sections, and features. Keep your website up-to-date
              without hassle.
            </p>
          </div>
        </S.ServiceCard>
      </S.ServicesCont>
    </Section>
  );
};

export default Stacks;
