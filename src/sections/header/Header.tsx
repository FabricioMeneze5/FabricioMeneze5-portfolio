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
            <ToggleBtn isDark={isDark} onClick={changeTheme} />
          </li>
        </NavBar>
      </ContainerHeader>
    </BgHeader>
  );
};

export default Header;
