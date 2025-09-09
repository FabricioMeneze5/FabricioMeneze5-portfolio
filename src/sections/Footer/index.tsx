import { useTranslation } from 'react-i18next';

import * as S from './styles';

import Button from '../../components/Button';

import imageIcon from '../../assets/animations/coffee-animation.json';

const getYear = new Date().getFullYear();

const Footer = () => {
  const { t } = useTranslation();
  return (
    <S.BgFooter>
      <S.ContainerFooter className="container">
        <S.LottieWrapper>
          <S.LottieIcon animationData={imageIcon} />
        </S.LottieWrapper>
        <div>
          <p>
            &copy; {getYear} FabricioMeneze5 — {t('footer.t1')}.{' '}
          </p>
          <p>{t('footer.t2')}</p>
        </div>

        <Button
          type="button"
          onClick={() => {
            document.getElementById('hero')?.scrollIntoView();
          }}
        >
          ↑
        </Button>
      </S.ContainerFooter>
    </S.BgFooter>
  );
};

export default Footer;
