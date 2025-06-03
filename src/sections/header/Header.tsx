import { useState } from 'react';
import { BgHeader, NavBar, ContainerHeader, ToggleBtn } from './styles';

const Header = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <BgHeader id="header">
      <ContainerHeader className="container">
        <h1>
          <b>#</b>FabricioMeneze5
        </h1>
        <NavBar>
          <li>Projects</li>
          <li>Services</li>
          <li>
            <b>Contact</b>
          </li>
          <li>Pt/En</li>
          <li>
            <ToggleBtn isDark={isDark} onClick={() => setIsDark(!isDark)} />
          </li>
        </NavBar>
      </ContainerHeader>
    </BgHeader>
  );
};

export default Header;
