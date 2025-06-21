import styled from 'styled-components';

export const ServicesCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  width: 100%;
  height: 100%;
  padding: 10px;
  /* background-color: cornflowerblue; */
`;

export const ServiceCard = styled.div`
  padding: 10px;
  background-color: darkgoldenrod;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  max-height: 300px;

  h3 {
    display: block;
    margin-bottom: 10px;
    text-align: center;
    font-size: 24px;
  }

  div {
    display: flex;
    overflow: hidden;

    img {
      height: 100%;
      object-fit: cover;
      margin-right: 10px;
    }

    p {
      text-align: center;
      color: white;
      overflow: hidden;
      font-size: 18px;
      font-weight: light;
      font-style: italic;
      text-overflow: ellipsis;
    }
  }
`;
