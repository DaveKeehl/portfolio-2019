var page = document.querySelector('html');
var burger = document.querySelector('.graphics header .navbar-burger');
var closeButton = document.querySelector('.graphics header .closeMenu');
var mobileMenu = document.querySelector('.graphics header .navbar-end');
let isOpen = false;

function changeMenuState() {
	isOpen ? isOpen = false : isOpen = true;
}

burger.addEventListener('click', (e) => {
	if (isOpen === false) {
		page.style.overflowY = 'hidden';
		setTimeout((e) => {
			mobileMenu.classList.add('mobileMenuOpen');
		}, 0);
		changeMenuState();
	} 
});

closeButton.addEventListener("click", (e) => {
	if (isOpen === true) {
		mobileMenu.classList.remove('mobileMenuOpen');
		page.style.overflowY = 'auto';
		setTimeout((e) => {
			document.getElementById('navMenu').classList.remove('is-active');
		}, 500);
		changeMenuState();
	}
});