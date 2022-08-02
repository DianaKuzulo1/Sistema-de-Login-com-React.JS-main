import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color: #ADD8E6;
    font-family: Arial, Helvetica, sans-serif
  }

  Home{
    background-color: #ADD8E6;
  }
`;


export default GlobalStyle;