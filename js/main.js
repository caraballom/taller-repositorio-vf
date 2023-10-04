//menu show
const iconShowMenu = document.querySelector('div');
const navBarMenu = document.querySelector('.menu_nesting');
iconShowMenu.addEventListener('click', () => {
     navBarMenu.classList.toggle('menu_nesting_show');
     console.log(navBarMenu);
 })