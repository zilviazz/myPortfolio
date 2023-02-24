// membuat variabel dan memperoleh elemen dengan Queryselector
const menu = document.querySelector('#menu-bars');
const header = document.querySelector('header');

// untuk menampilkan header saat menu bar di klik
menu.addEventListener('click', function(){
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
});
