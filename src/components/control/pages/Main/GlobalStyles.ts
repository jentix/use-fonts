import { createGlobalStyle } from 'utils/ui/styled';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,400i,700&subset=cyrillic');

  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
  }

  html, body {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    min-height: 100%;
  }

  #container {
    min-height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: [row1] 60px [row2] 1fr [row3] 50px [row4];
    grid-template-areas:
      "header header"
      "main main"
      "footer footer";
  }

  header {
    grid-area: header;
    grid-row: row1 / row2;
  }

  main {
    width: 100%;
    grid-area: main;
    grid-row: row2 / row3;
  }

  footer {
    grid-area: footer;
    grid-row: row3 / row4;
  }
`;

export default GlobalStyle;
