import 'regenerator-runtime';
import '../styles/scss/main.scss';
import '../styles/scss/responsif-layout.scss';
import '../styles/scss/font-awesome.scss';
import swRegister from './utility/sw-register';

import App from './app';

window.addEventListener('DOMContentLoaded', () => {
  const app = new App({
    button: document.querySelector('#menu'),
    drawer: document.querySelector('#drawer'),
    content: document.querySelector('main'),
  });

  window.addEventListener('hashchange', () => {
    app.renderPage();
  });

  window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
  });
});
