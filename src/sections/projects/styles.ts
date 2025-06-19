import styled from 'styled-components';

export const Cards = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 35px;
  padding: 5px;
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  border: solid 3px white;
  overflow: hidden;
  background-color: ${(props) => props.theme.secundaryText};
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.03);
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

  .tags {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 4px 0;
    height: 50px;

    p {
      font-size: 10px;
      color: #fff;
      background-color: blueviolet;
      margin: 2px;
      border-radius: 10px;
      padding: 2px 10px;
    }
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
