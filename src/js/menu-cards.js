import data from '../data/menu.json';
import template from '../template/template.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
    body: document.body,
    list: document.querySelector('.js-menu'),
    input: document.querySelector('.theme-switch__toggle'),
}

refs.body.classList.add(localStorage.getItem('theme') === null ? Theme.LIGHT : localStorage.getItem('theme'));
refs.input.checked = localStorage.getItem('theme') === Theme.DARK;

console.log(refs);

const markup = template(data);
refs.list.insertAdjacentHTML('beforeend', markup);

function chenchTheme(add, rem) {
     refs.body.classList.remove(rem);
        refs.body.classList.add(add);
    localStorage.setItem('theme', add);
}

refs.input.addEventListener('change', inputChangeOn);
function inputChangeOn({target}) {
    if (target.checked) {
        chenchTheme(Theme.DARK, Theme.LIGHT);
    }

    else {
        chenchTheme(Theme.LIGHT, Theme.DARK);
    }
}






