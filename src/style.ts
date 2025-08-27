import { createGlobalStyle } from 'styled-components';

export const breakpoints = {
  desktop: '1023px',
  mobile: '639px',
};

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto Mono", monospace;
    list-style: none;
  }

  *::-webkit-scrollbar {
    width: 6px;
    height: 0;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.mainColor};
  }

  *::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.secundaryColor};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    overflow-y: hidden;

    @media (max-width: ${breakpoints.mobile}) {
      max-width: 90%;
    }
  }

  h1 {
    font-family: "Aldrich", sans-serif;
  }

  img {
    pointer-events: none;
    user-select: none;
  }
`;
