// ACTIVATE MOBILE MENU

(function() {
	var burger = document.querySelector('.burger');
	var nav = document.querySelector('#' + burger.dataset.target);
	burger.addEventListener('click', function() {
		burger.classList.toggle('is-active');
		nav.classList.toggle('is-active');
	});
})();

// ROTATE LOGO ON HOVER

$(".navbar-brand a").hover(
	function() {
		$(".navbar-brand svg").addClass("logo-rotate");
	},
	function() {
		$(".navbar-brand svg").removeClass("logo-rotate");
	},
);

// AUTOMATIC COPYRIGHT YEAR

let footerCopyright = document.querySelector("p.copyright");
footerCopyright.innerHTML = "© " + new Date().getFullYear() + " Davide Ciulla. All Rights Reserved";