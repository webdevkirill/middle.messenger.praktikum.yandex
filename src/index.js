import template from './index.hbs';
import './components';
import './pages';
import './layout';

window.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  app.innerHTML = template({ variable: 'test' });
});
