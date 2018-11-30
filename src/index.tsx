import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from 'app';

const idName = 'container';
const rootElement = document.createElement('div');
rootElement.setAttribute('id', idName);
document.body.appendChild(rootElement);

const render = (Component) => {
  ReactDOM.render(
    <Component />,
    document.getElementById(idName),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./app', () => {
    render(App);
  });
}

