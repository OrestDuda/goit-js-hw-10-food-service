const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const toolbar = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');
if (localStorage.getItem( 'theme') === Theme.DARK){
  toolbar.setAttribute('checked', '');
  body.classList.add(Theme.DARK);
}

toolbar.addEventListener('change', (event) => {
  body.classList.remove(Theme.LIGHT);
  body.classList.add(Theme.DARK);
  localStorage.setItem('theme', Theme.DARK);

  if(!event.currentTarget.checked) {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
})
