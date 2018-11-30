import * as React from 'react';

import { ThemeProvider } from 'utils/ui/styled';
import theme from 'components/ui/theme';
import Main from 'components/control/pages/Main';

const App = () => (
  <ThemeProvider theme={theme}>
    <Main />
  </ThemeProvider>
);

export default App;
