import styled from 'styled-components';
import { breakpoints } from '../../style';

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.secundaryColor};
  border: 1px solid ${({ theme }) => theme.mainColor};
  padding: 20px;
  height: 500px;
  overflow-y: hidden;
  color: ${({ theme }) => theme.mainTextColor};

  @media (max-width: ${breakpoints.mobile}) {
    height: auto;
  }

  h3 {
    text-align: center;
    padding-bottom: 20px;
    font-size: 24px;
  }

  > div {
    display: flex;
    gap: 20px;
    height: calc(100% - 51px);

    img {
      width: 100%;
      height: 100%;
      max-width: calc(50%);
      object-fit: cover;
    }

    form {
      width: 100%;
      max-width: calc(50%);
    }

    @media (max-width: ${breakpoints.mobile}) {
      flex-direction: column;

      img,
      form {
        max-width: 100%;
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  text-align: center;

  div {
    width: 100%;
  }
`;

export const InputGroup = styled.div`
  display: block;
  margin-bottom: 20px;
  text-align: start;

  label {
    display: block;
    font-weight: bold;
  }

  input,
  textarea {
    width: 100%;
  }

  textarea {
    resize: none;
    height: 96px;
  }
`;
