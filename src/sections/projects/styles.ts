import styled from 'styled-components';

export const Cards = styled.ul`
  overflow-y: auto;
  height: 100%;
  padding-bottom: 5px;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 35px;
    padding: 5px;
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
  border-radius: 20px;
  border: solid 3px white;
  overflow: hidden;
  background-color: ${(props) => props.theme.secundaryText};
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 3px 3px 1px 2px black;
    border: solid 3px ${(props) => props.theme.mainColor};
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

    button {
      padding: 6px;
      border-radius: 10px;
      margin-bottom: 14px;
      border: none;
      width: 120px;
      font-size: 16px;
      color: #fff;
      background-color: ${(props) => props.theme.mainColor};
      cursor: pointer;
      transition: 0.1s ease;

      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;
