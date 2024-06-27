import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    background-color: #f3f3f3;
    width: 100%;
  }
`;
export default GlobalStyle;
