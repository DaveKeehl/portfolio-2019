// MOBILE MENU

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
			mobileMenu.classList.remove('mobileMenuClose');
			mobileMenu.classList.add('mobileMenuOpen');
		}, 0);
		changeMenuState();
		console.log("Current menu state: " + isOpen);
	} 
});

closeButton.addEventListener("click", (e) => {
	if (isOpen === true) {
		document.getElementById('navMenu').classList.remove('is-active');
		page.style.overflowY = 'auto';
		setTimeout((e) => {
			mobileMenu.classList.remove('mobileMenuOpen');
			mobileMenu.classList.add('mobileMenuClose');
		}, 0);
		changeMenuState();
		console.log("Current menu state: " + isOpen);
	}
});