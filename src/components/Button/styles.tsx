import styled from 'styled-components';

export const buttonStyle = styled.button`
  padding: 6px;
  border-radius: 10px;
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
`;
