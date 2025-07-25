import { useEffect, useState } from 'react';

import { BgHeader, NavBar, ContainerHeader, ToggleBtn } from './styles';

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

  return (
    <BgHeader id="header">
      <ContainerHeader className="container">
        <h1>
          <b>#</b>
          <a href="#hero">{viewWidth < 639 ? 'FM5' : 'FabricioMeneze5'}</a>
        </h1>
        <NavBar>
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
