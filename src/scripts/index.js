import 'regenerator-runtime';
import '../styles/scss/main.scss';
import '../styles/scss/responsif-layout.scss';
import swRegister from './utility/service-worker-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import App from './app';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  swRegister();
  app.renderPage();
});
