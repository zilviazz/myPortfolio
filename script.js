const menu = document.querySelector('#menu-bars');
const header = document.querySelector('header');

menu.addEventListener('click', function(){
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
});

const cursor1 = document.querySelector('.cursor-1');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
    }

});