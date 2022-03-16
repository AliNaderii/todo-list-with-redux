import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.1s ease;
  }

  body {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 18px;
    font-weight: 400;
  }

  button {
    cursor: pointer;
    background-color: unset;
    border: unset;
  }
`;