import './styles.css';
import './js/theme';
import menu from './js/menu.json';
import template from './template/menu_template.hbs';

const markup = document.querySelector('.js-menu');
const list = template(menu);
markup.insertAdjacentHTML("beforeend", list);
