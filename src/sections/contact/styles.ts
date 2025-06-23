import styled from 'styled-components';

export const ContactContainer = styled.div`
  background-color: #d9d9d9;
  padding: 20px;
  height: 100%;
  margin-bottom: 10px;

  h3 {
    display: block;
    text-align: center;
    padding-bottom: 20px;
  }

  > div {
    display: flex;
    gap: 20px;

    img {
      width: 100%;
      max-width: calc(50%);
      height: 100%;
    }

    form {
      width: 100%;
      max-width: calc(50%);
    }
  }
`;

export const Form = styled.form`
  border: solid 1px black;
  text-align: center;

  div {
    display: block;
    width: 100%;
    margin-bottom: 20px;
    text-align: start;
  }

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
  }
`;
