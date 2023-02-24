const menu = document.querySelector('#menu-bars');
const header = document.querySelector('header');

menu.addEventListener('click', function(){
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
});
