import { styled } from 'styled-components';

type Props = {
  isDark: boolean;
};

export const BgHeader = styled.div`
  background-color: ${(props) => props.theme.secundaryColor};
  position: static;
  top: 0px;
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 96px;

  h1 {
    font-size: 24px;
    font-weight: lighter;
    font-style: italic;
    color: ${(props) => props.theme.mainColor};
    cursor: pointer;

    b {
      color: ${(props) => props.theme.mainTextColor};
      margin-right: 5px;
    }
  }
`;

export const NavBar = styled.ul`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.mainTextColor};

  li {
    margin-left: 12px;
    cursor: pointer;
  }
`;

export const ToggleBtn = styled.div<Props>`
  padding: 4px;
  width: 50px;
  height: 24px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.secundaryText};
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
