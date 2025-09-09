import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';

import * as S from './styles';

import Section from '../../components/Section';
import imgLandingPages from '../../assets/img/landing.png';
import imgEcommerce from '../../assets/img/ecommerce.png';
import imgApp from '../../assets/img/App.png';
import imgMaintaince from '../../assets/img/maintaince.png';

const Stacks = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 8000,
      easing: 'ease',
    });
    AOS.refresh();
  }, []);

  return (
    <Section title={t('header.l2')} id="stacks" $bgColor="bg1">
      <S.ServicesCont>
        <S.ServiceCard data-aos="flip-left">
          <h3>{t('stacks.t1')}</h3>
          <div>
            <img src={imgLandingPages} alt="img" />
            <p>{t('stacks.p1')}</p>
          </div>
        </S.ServiceCard>

        <S.ServiceCard data-aos="flip-right">
          <h3>{t('stacks.t2')}</h3>
          <div>
            <img src={imgEcommerce} alt="img" />
            <p>{t('stacks.p2')}</p>
          </div>
        </S.ServiceCard>

        <S.ServiceCard data-aos="flip-left">
          <h3>{t('stacks.t3')}</h3>
          <div>
            <img src={imgApp} alt="img" />
            <p>{t('stacks.p3')}</p>
          </div>
        </S.ServiceCard>

        <S.ServiceCard data-aos="flip-right">
          <h3>{t('stacks.t4')}</h3>
          <div>
            <img src={imgMaintaince} alt="img" />
            <p>{t('stacks.p4')}</p>
          </div>
        </S.ServiceCard>
      </S.ServicesCont>
    </Section>
  );
};

export default Stacks;
