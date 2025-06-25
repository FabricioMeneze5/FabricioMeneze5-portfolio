import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 44px);
  padding: 10px 0;
  background-color: ${(props) => props.theme.background2};

  /* teste */
  border-top: 1px solid ${(props) => props.theme.mainTextColor};
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 64px;
  font-size: 24px;
  margin-bottom: 10px;

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
