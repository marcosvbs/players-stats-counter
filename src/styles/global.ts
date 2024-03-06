import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.white};
    color: ${(props) => props.theme["blue-800"]};
  }

  h1, h2, h3 {
    font-family: "Bebas Neue", sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 1.2;
    color: ${(props) => props.theme["blue-800"]};
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  body, input, textarea, p {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    line-height: 1.5;
  }

  button, a {
    font-family: "Bebas Neue", sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 1.25rem;
    color: ${(props) => props.theme["blue-800"]};
  }
`;
