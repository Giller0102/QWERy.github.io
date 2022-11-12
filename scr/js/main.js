let burgerBtn = document.querySelector('.burger_menu');
let headerMenu = document.querySelector('.header_menu');
let menuClose = document.querySelector('.cross');

burgerBtn.addEventListener('click', function() {
    burgerBtn.classList.add('close_burger');
    headerMenu.classList.add('active_menu');
    menuClose.classList.add('cross_active');
})

menuClose.addEventListener('click', function () {
    burgerBtn.classList.remove('close_burger');
    headerMenu.classList.remove('active_menu');
    menuClose.classList.remove('cross_active');
})
