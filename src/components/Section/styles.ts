import styled from 'styled-components';
import { Props } from '.';
import { breakpoints } from '../../style';

export const Container = styled.div<Omit<Props, 'title' | 'id' | 'children'>>`
  width: 100%;
  height: 100vh;
  padding-top: 64px;
  background-color: ${({ $bgColor, theme }) =>
    $bgColor === 'bg1' ? theme.background1 : theme.background2};

  @media (max-width: ${breakpoints.mobile}) {
    height: 100%;
    padding-bottom: ${({ $isLast }) => ($isLast ? '24px' : '0')};
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 64px;
  font-size: 24px;

  h2 {
    font-family: 'Aldrich', sans-serif;
    font-weight: lighter;
    color: ${({ theme }) => theme.mainColor};
    margin: 0 10px;
  }

  b {
    color: ${({ theme }) => theme.mainTextColor};
  }
`;

export const Content = styled.div`
  width: 100%;
  height: calc(100vh - 128px);

  @media (max-width: ${breakpoints.mobile}) {
    height: 100%;
  }
`;
