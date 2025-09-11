import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

import * as S from './styles';

type Props = {
  $isDark: boolean;
  changeTheme: () => void;
};

const Header = ({ $isDark, changeTheme }: Props) => {
  const [viewWidth, setViewWidth] = useState(window.innerWidth);
  const { i18n: i18nextInstance, t } = useTranslation();

  useEffect(() => {
    const veTamanho = () => setViewWidth(window.innerWidth);
    veTamanho();
    window.addEventListener('resize', veTamanho);

    return () => window.removeEventListener('resize', veTamanho);
  }, []);

  const isMobile = viewWidth < 639;
  const [navBarToggle, setNavBarToggle] = useState(isMobile);

  function toggleNavBar() {
    setNavBarToggle(!navBarToggle);
  }

  const toggleLanguage = () => {
    const newLang = i18nextInstance.language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <S.BgHeader id="header">
      <S.ContainerHeader className="container" $showNavBar={!navBarToggle}>
        <h1>
          <b>#</b>
          <a href="fabriciomenezes.com">{isMobile ? 'FM5' : 'FabricioMeneze5'}</a>
        </h1>
        <S.BurgerMenu $showNavBar={isMobile} onClick={toggleNavBar}>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </S.BurgerMenu>
        <S.NavBar $showNavBar={isMobile} className={isMobile ? 'toggleNavBar' : ''}>
          <li>
            <a onClick={toggleNavBar} href="#projects">
              {t('header.l1')}
            </a>
          </li>
          <li>
            <a onClick={toggleNavBar} href="#stacks">
              {t('header.l2')}
            </a>
          </li>
          <li>
            <a onClick={toggleNavBar} href="#about">
              {t('header.l3')}
            </a>
          </li>
          <li>
            <b>
              <a onClick={toggleNavBar} href="#contact">
                {t('header.l4')}
              </a>
            </b>
          </li>
          <li>
            <button onClick={toggleLanguage}>
              {i18nextInstance.language === 'en' ? 'Portug.' : 'English'}
            </button>
          </li>
          <li>
            <S.ToggleBtn $isDark={$isDark} onClick={changeTheme} />
          </li>
        </S.NavBar>
      </S.ContainerHeader>
    </S.BgHeader>
  );
};

export default Header;
