import { styled } from 'styled-components';

type Props = {
  isDark: boolean;
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

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;

  h1 {
    a {
      text-decoration: none;
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
`;

export const NavBar = styled.ul`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.mainTextColor};

  li {
    margin-left: 12px;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.mainTextColor};
    }
  }
`;

export const ToggleBtn = styled.div<Props>`
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
