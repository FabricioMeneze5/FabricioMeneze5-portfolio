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
    border-color: white;
  }
`;

const cursorB = keyframes`
  50% {
    border-color: white;
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
  }

  p:nth-of-type(1) {
    border-right: 3px solid transparent;
    animation:
      ${typing} 3s steps(22, end) forwards,
      ${cursorA} 0.6s step-end 0s 5;
  }

  p:nth-of-type(2) {
    border-right: 3px solid transparent;
    animation:
      ${typing} 3s steps(22, end) forwards 3.3s,
      ${cursorB} 0.6s step-end infinite 3.3s;
  }
`;
