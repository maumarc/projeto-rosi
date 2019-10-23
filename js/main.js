var hamburguer = document.querySelector('.header__menu__nav__mobile');
var mobile = document.querySelector('#mobile__list');

hamburguer.addEventListener('click', function(){
	mobile.classList.add('active');
})

document.querySelector('.mobile__list__button').addEventListener('click', function(){
	mobile.classList.remove('active');
})