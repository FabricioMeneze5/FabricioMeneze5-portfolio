import styled from 'styled-components';

export const Cards = styled.ul`
  overflow-y: auto;
  height: 100%;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 35px;
    padding: 5px 5px 15px;
    overflow-y: hidden;
  }
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  width: 100%;
  max-width: 309px;
  height: auto;
  padding-bottom: 14px;
  overflow: hidden;
  background-color: ${(props) => props.theme.secundaryColor};
  border: solid 2px ${(props) => props.theme.mainColor};
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 5px 5px 1px 1px ${(props) => props.theme.mainTextColor};
    border: solid 2px black;
  }

  > div {
    width: 100%;
    max-width: 90%;
  }

  h3 {
    font-size: 24px;
    text-align: center;
    color: ${(props) => props.theme.mainColor};
  }

  img {
    height: 230px;
    width: 100%;
    object-fit: cover;
  }

  .btns {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;
