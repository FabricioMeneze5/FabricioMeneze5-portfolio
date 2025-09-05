import styled from 'styled-components';

import { breakpoints } from '../../style';

export const Cards = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;
  padding: 5px 5px 15px;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: 5px;
    gap: 15px;
    place-items: center;
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
  padding: 8px 0;
  overflow: hidden;
  background-color: ${({ theme }) => theme.secundaryColor};
  border: solid 1px ${({ theme }) => theme.mainColor};
  box-shadow: inset 0 0 0 0 ${({ theme }) => theme.background2};
  transition: transform 0.3s ease-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: inset 100vw 0 0 0 ${({ theme }) => theme.background2};
    transition:
      transform 0.3s ease-out,
      box-shadow 1.5s ease-out;
  }

  > div {
    width: 100%;
    max-width: 90%;
  }

  h3 {
    font-size: 20px;
    text-align: center;
    color: ${({ theme }) => theme.mainColor};
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
