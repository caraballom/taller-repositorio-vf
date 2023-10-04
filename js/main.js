//menu show
const iconShowMenu = document.querySelector('.iconShowMenu');

const navbarMenu = document.querySelector('.menu_nesting');

iconShowMenu.addEventListener('click', function(){
     navbarMenu.classList.toggle('.menu_nesting_show');
 })