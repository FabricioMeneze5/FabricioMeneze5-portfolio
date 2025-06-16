import styled from 'styled-components';

export const SectionProjects = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  background-color: ${(props) => props.theme.background2};
  overflow-y: hidden;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 64px;
  color: white;
  background-color: darkgray;
`;

export const CardSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  height: calc(100vh - 128px);

  ul {
    li {
      width: 350px;
      height: 434px;
      border: solid 2px white;
    }
  }
`;
