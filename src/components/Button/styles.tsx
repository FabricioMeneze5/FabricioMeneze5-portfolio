import styled from 'styled-components';

type Props = {
  disabled?: boolean;
};

export const buttonStyle = styled.button<Props>`
  padding: 6px;
  border-radius: 10px;
  border: none;
  width: 120px;
  font-size: 16px;
  color: #fff;
  background-color: ${({ disabled, theme }) => (disabled ? '#8d8d8d' : theme.mainColor)};
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  transition: 0.1s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
