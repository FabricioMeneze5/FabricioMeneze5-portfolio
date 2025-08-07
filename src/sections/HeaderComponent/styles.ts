import { styled } from 'styled-components';

type Props = {
  isDark: boolean;
  showNavBar: boolean;
};

export const BgHeader = styled.div`
  background-color: ${(props) => props.theme.secundaryColor};
  position: fixed;
  top: 0px;
  z-index: 2;
  width: 100%;
  box-shadow: 0 -3px 10px ${(props) => props.theme.mainColor};
  transition: 0.3s ease-out;

  &:hover {
    box-shadow: 0 1px 10px ${(props) => props.theme.mainColor};
  }
`;

export const ContainerHeader = styled.div<Omit<Props, 'isDark'>>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
  position: relative;

  h1 {
    a {
      text-decoration: none;
      font-family: 'Aldrich', sans-serif;
      color: ${(props) => props.theme.mainColor};
      font-size: 24px;
      font-weight: lighter;
      font-style: italic;
    }

    b {
      color: ${(props) => props.theme.mainTextColor};
      margin-right: 5px;
      font-size: 24px;
    }
  }

  .toggleNavBar {
    display: ${(props) => (props.showNavBar ? 'flex' : 'none')};
    flex-direction: column;
    align-items: end;
    width: 70%;
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 2;
    transition: all 0.3s ease;
    font-size: 18px;
  }
`;

export const NavBar = styled.ul<Omit<Props, 'isDark'>>`
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  color: ${(props) => props.theme.mainTextColor};
  background-color: ${(props) => props.theme.secundaryColor};

  li {
    padding: 10px;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.mainTextColor};
    }
  }
`;

export const BurgerMenu = styled.div<Omit<Props, 'isDark'>>`
  display: ${(props) => (props.showNavBar ? 'block' : 'none')};
  height: 100%;
  aspect-ratio: 1/1;
  background-color: ${(props) => props.theme.mainColor};
  padding: 8px;
  cursor: pointer;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }

    div {
      background-color: ${(props) => props.theme.secundaryColor};
      padding: 3px;
      width: 100%;
    }
  }
`;

export const ToggleBtn = styled.div<Omit<Props, 'showNavBar'>>`
  padding: 4px;
  width: 50px;
  height: 24px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.mainTextColor};
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;

  &::after {
    content: '';
    width: 18px;
    height: 18px;
    top: 3px;
    left: ${(props) => (props.isDark ? '3px' : '26px')};
    border-radius: 50%;
    background-color: ${(props) => props.theme.background1};
    position: absolute;
    transition: left 0.5s ease;
  }

  &:hover::after {
    transform: scale(1.1);
  }
`;
