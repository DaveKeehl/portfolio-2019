var page = document.querySelector('html');
var burger = document.querySelector('.graphics header .navbar-burger');
var closeButton = document.querySelector('.graphics header .closeMenu');
var mobileMenu = document.querySelector('.graphics header .navbar-end');
var menuBackground = document.querySelector('.graphics header .background');
let isOpen = false;

burger.addEventListener('click', openMenu);
closeButton.addEventListener("click", closeMenu);
menuBackground.addEventListener("click", closeMenu);

function changeMenuState() {
	isOpen ? isOpen = false : isOpen = true;
}

function openMenu() {
	if (isOpen === false) {
		page.style.overflowY = 'hidden';
		setTimeout( () => {
			mobileMenu.classList.add('mobileMenuOpen');
		}, 0);
		changeMenuState();
	} 
}

function closeMenu() {
	if (isOpen === true) {
		mobileMenu.classList.remove('mobileMenuOpen');
		page.style.overflowY = 'auto';
		setTimeout( () => {
			document.getElementById('navMenu').classList.remove('is-active');
		}, 500);
		changeMenuState();
	}
}