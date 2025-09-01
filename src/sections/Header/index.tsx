import { useEffect, useState } from 'react';

import * as S from './styles';

type Props = {
  $isDark: boolean;
  changeTheme: () => void;
};

const Header = ({ $isDark, changeTheme }: Props) => {
  const [viewWidth, setViewWidth] = useState(window.innerWidth);

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
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#stacks">Stacks</a>
          </li>
          <li>
            <b>
              <a href="#contact">Contact</a>
            </b>
          </li>
          {/* <li>Pt/En</li> */}
          <li>
            <S.ToggleBtn $isDark={$isDark} onClick={changeTheme} />
          </li>
        </S.NavBar>
      </S.ContainerHeader>
    </S.BgHeader>
  );
};

export default Header;
