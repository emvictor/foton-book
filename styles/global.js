import { createGlobalStyle } from "styled-components";
import { Reset } from "./reset";

const GlobalStyle = createGlobalStyle`
${Reset}


html,
body {
  
  font-family: 'Roboto', sans-serif;
  
}

`;

export default GlobalStyle;
