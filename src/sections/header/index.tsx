import { useEffect, useState } from 'react';

import { BgHeader, NavBar, ContainerHeader, ToggleBtn, BurgerMenu } from './styles';

type Props = {
  isDark: boolean;
  changeTheme: () => void;
};

const Header = ({ isDark, changeTheme }: Props) => {
  const [viewWidth, setViewWidth] = useState(window.innerWidth);

  useEffect(() => {
    const veTamanho = () => setViewWidth(window.innerWidth);
    veTamanho();
    window.addEventListener('resize', veTamanho);

    return () => window.removeEventListener('resize', veTamanho);
  }, []);

  const isMobile = viewWidth < 639;
  const [navBarToggle, setNavBarToggle] = useState(isMobile);

  return (
    <BgHeader id="header">
      <ContainerHeader className="container" showNavBar={!navBarToggle}>
        <h1>
          <b>#</b>
          <a href="#hero">{isMobile ? 'FM5' : 'FabricioMeneze5'}</a>
        </h1>

        <BurgerMenu showNavBar={isMobile} onClick={() => setNavBarToggle((prev) => !prev)}>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </BurgerMenu>

        <NavBar showNavBar={isMobile} className={isMobile ? 'toggleNavBar' : ''}>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <b>
              <a href="#contact">Contact</a>
            </b>
          </li>
          <li>Pt/En</li>
          <li>
            <ToggleBtn isDark={isDark} onClick={changeTheme} />
          </li>
        </NavBar>
      </ContainerHeader>
    </BgHeader>
  );
};

export default Header;
