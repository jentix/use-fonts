import * as React from 'react';

import { ThemeProvider, createGlobalStyle } from 'utils/ui/styled';
import theme from 'components/ui/theme';
import Main from 'components/control/pages/Main/Main';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,400i,700&subset=cyrillic');

  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
  }
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle />
      <Main />
    </React.Fragment>
  </ThemeProvider>
);

export default App;
