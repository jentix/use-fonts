import * as React from 'react';

import GlobalStyle from './GlobalStyles';
import FontInput from 'components/ui/FontInput/FontInput';
import inputsConfig from 'config/inputs';

export default class Main extends React.Component {

  get inputs() {
    if (inputsConfig && Array.isArray(inputsConfig) && inputsConfig.length) {
      return inputsConfig.map((inputConfigItem, i) => (
        <div key={i}>
          <FontInput fontObject={inputConfigItem} />
        </div>
      ));
    }

    return null;
  }

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <header>
          Header
        </header>
        <main>
          {this.inputs}
        </main>
        <footer>
          Footer
        </footer>
      </React.Fragment>
    );
  }

}
