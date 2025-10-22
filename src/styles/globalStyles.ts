import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%; // 20px -> 2.0rem
  }

  body {
    background-color: ${({ theme }) => theme.colors.jetBlack};
    font-family: "Montserrat", sans-serif;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;
