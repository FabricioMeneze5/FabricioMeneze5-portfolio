import styled from 'styled-components';

export const Cards = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  height: 100%;
`;

export const Card = styled.li`
  border-radius: 20px;
  border: solid 1px white;
  overflow: hidden;

  img {
    width: 100%;
    height: 60%;
    object-fit: cover;
  }

  .btns {
    display: flex;
    justify-content: space-around;
    width: 100%;
    background-color: cadetblue;
  }
`;
