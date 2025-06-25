import * as S from './styles';
import imageIcon from '../../assets/animations/coffee-animation.json';
import Button from '../../components/Button';

const getYear = new Date().getFullYear();

const Footer = () => {
  return (
    <S.BgFooter>
      <S.ContainerFooter className="container">
        <S.LottieWrapper>
          <S.LottieIcon animationData={imageIcon} />
        </S.LottieWrapper>
        <div>
          <p>&copy; {getYear} FabricioMeneze5 — All rights reserved. </p>
          <p>Thanks for visiting my site and checking out my work!</p>
        </div>
        <Button type="button">↑</Button>
      </S.ContainerFooter>
    </S.BgFooter>
  );
};

export default Footer;
