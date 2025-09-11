import { useTranslation } from 'react-i18next';
import Section from '../../components/Section';

const About = () => {
  const { t } = useTranslation();
  return (
    <Section title={t('header.l3')} $bgColor="bg2" id="about">
      <div>about</div>
    </Section>
  );
};

export default About;
