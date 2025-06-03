import { styled } from 'styled-components';

type Props = {
  isDark: boolean;
};

export const BgHeader = styled.div`
  background-color: #3e3d3d;
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
    color: #1e88e5;
    cursor: pointer;

    b {
      color: #ffffff;
    }
  }
`;

export const NavBar = styled.ul`
  display: flex;
  align-items: center;
  color: #ffffff;
  font-weight: 100;

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
  background-color: ${(props) => (props.isDark ? '#ccc' : '#333')};
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
    background-color: #ffffff;
    position: absolute;
    transition: left 0.3s ease;
  }
`;
