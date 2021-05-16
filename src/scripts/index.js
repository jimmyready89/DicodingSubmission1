import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/responsif-layout.scss';
import App from './app';

window.addEventListener('DOMContentLoaded', () => {
  const app = new App({
    button: document.querySelector('#menu'),
    drawer: document.querySelector('#drawer'),
    content: document.querySelector('main'),
  });
});
