import styled from 'styled-components';
import { Props } from '.';

export const Container = styled.div<Omit<Props, 'title' | 'id' | 'children'>>`
  /* background-color: ${(props) => props.theme.background2}; */
  width: 100%;
  /* height: calc(100vh - 10px); */
  height: 100vh;
  padding-top: 64px;
  background-color: ${(props) =>
    props.background === 'bg1' ? props.theme.background1 : props.theme.background2};
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
    color: ${(props) => props.theme.mainColor};
    margin: 0 10px;
  }

  b {
    color: ${(props) => props.theme.mainTextColor};
  }
`;

export const Content = styled.div`
  width: 100%;
  height: calc(100vh - 128px);
`;
