import styled, { keyframes } from 'styled-components';

const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const cursorA = keyframes`
  50% {
    border-color: transparent;
  }
  100% {
    border-right: 3px solid transparent;
  }
`;

const cursorB = keyframes`
  0%, 49% {
    border-right: 3px solid transparent;
  }
  50%, 100% {
    border-right: 3px solid var(--cursor-color);
  }
`;
export const TextStyle = styled.div`
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  p {
    font-size: 36px;
    white-space: nowrap;
    overflow: hidden;
    display: block;
    width: 0;
    text-align: justify;
    user-select: none;
  }

  p:nth-of-type(1) {
    border-right: 3px solid ${(props) => props.theme.mainTextColor};
    animation:
      ${typing} 3s steps(22, end) forwards,
      ${cursorA} 0.6s step-end 0s 5 forwards;
  }

  p:nth-of-type(2) {
    --cursor-color: ${(props) => props.theme.mainTextColor};
    border-right: 3px solid transparent;
    animation:
      ${typing} 3s steps(22, end) forwards 3.3s,
      ${cursorB} 0.6s step-end 3.3s infinite normal backwards;
  }
`;
