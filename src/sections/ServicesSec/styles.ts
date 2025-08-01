import styled from 'styled-components';
import { breakpoints } from '../../style';

export const ServicesCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  justify-items: center;
  width: 100%;
  padding: 10px;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 264px;
  width: 100%;
  background-color: ${(props) => props.theme.secundaryColor};
  border: 1px solid ${(props) => props.theme.mainColor};
  box-shadow: inset 0 0 0 0 ${(props) => props.theme.background2};
  transition: transform 0.3s ease-out;

  @media (max-width: ${breakpoints.mobile}) {
    height: auto;
  }

  &:hover {
    transform: scale(1.04);
    box-shadow: inset 100vw 0 0 0 ${(props) => props.theme.background2};
    transition:
      transform 0.3s ease-out,
      box-shadow 1s ease-out;
  }

  h3 {
    display: block;
    margin-bottom: 10px;
    text-align: center;
    font-size: 24px;
    color: ${(props) => props.theme.mainColor};
  }

  div {
    display: flex;
    flex: 1;
    height: calc(100% - 44px);

    img {
      width: 50%;
      height: 100%;
      object-fit: cover;
      margin-right: 10px;

      @media (max-width: ${breakpoints.mobile}) {
        width: 40%;
      }
    }

    p {
      flex: 1;
      text-align: center;
      color: ${(props) => props.theme.mainTextColor};
      font-size: 18px;
      font-weight: light;
      font-style: italic;
      text-overflow: ellipsis;

      @media (max-width: ${breakpoints.mobile}) {
        font-size: 14px;
      }
    }
  }
`;
