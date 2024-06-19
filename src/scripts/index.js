import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/responsive.scss';
import swRegister from './utils/sw-register';
import App from './views/app';
// import LikeButtonInitiator from './utils/like-button-initiator';

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-unused-vars
  const app = new App({
    button: document.querySelector('.hamburger'),
    drawer: document.querySelector('.nav__menu'),
    content: document.querySelector('main'),
  });
  window.addEventListener('hashchange', () => {
    app.renderPage();
  });
  window.addEventListener('load', () => {
    swRegister();
    // LikeButtonInitiator();
    app.renderPage();
  });
});
