import * as React from 'react';

import FontInput from 'components/ui/FontInput/FontInput';
import SaparamaFont from 'assets/fonts/SaparamaFont-Medium.woff2';
import MRLEMON from 'assets/fonts/MRLEMON-Regular.woff2';

const firstFontObject = {
  fontName: 'SaparamaFont',
  fontUrl: SaparamaFont,
  fontWeight: '500',
  fontStyle: 'normal',
};

const secondFontObject = {
  fontName: 'MRLEMON',
  fontUrl: MRLEMON,
  fontWeight: '400',
  fontStyle: 'normal',
};

export default class Main extends React.Component {

  render() {
    return (
      <React.Fragment>
        <header>
          Header
        </header>
        <main>
          <div>
            <FontInput fontObject={firstFontObject} />
          </div>
          <div>
            <FontInput fontObject={secondFontObject} />
          </div>
        </main>
        <footer>
          Footer
        </footer>
      </React.Fragment>
    );
  }

}
