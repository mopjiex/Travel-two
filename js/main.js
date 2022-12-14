const iconMenu = document.querySelector('.menu__icon');
const nav = document.querySelector('.nav');

iconMenu.addEventListener('click', (e) => {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    nav.classList.toggle('_active');
})