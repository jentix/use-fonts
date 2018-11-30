import * as React from 'react';

import FontInput from 'components/ui/FontInput/FontInput';
import SaparamaFont from 'assets/fonts/SaparamaFont-Medium.woff2';
import MRLEMON from 'assets/fonts/MRLEMON-Regular.woff2';

export default class Main extends React.Component {

  render() {
    return (
      <React.Fragment>
        <FontInput fontName="SaparamaFont" fontUrl={SaparamaFont} />
        <FontInput fontName="MRLEMON" fontUrl={MRLEMON} />
      </React.Fragment>
    );
  }

}
