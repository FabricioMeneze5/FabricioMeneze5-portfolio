import { BgHeader, NavBar, ContainerHeader, ToggleBtn } from './styles';

type Props = {
  isDark: boolean;
  changeTheme: () => void;
};

const Header = ({ isDark, changeTheme }: Props) => {
  return (
    <BgHeader id="header">
      <ContainerHeader className="container">
        <h1>
          <b>#</b>
          <a href="#hero">FabricioMeneze5</a>
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
