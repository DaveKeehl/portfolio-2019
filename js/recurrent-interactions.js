// HAMBURGER MENU

(function() {
	var burger = document.querySelector('.burger');
	var nav = document.querySelector('#' + burger.dataset.target);
	burger.addEventListener('click', function() {
		burger.classList.toggle('is-active');
		nav.classList.toggle('is-active');
	});
})();

// LOGO

$(".navbar-brand a").hover(
	function() {
		$(".navbar-brand svg").addClass("logo-rotate");
	},
	function() {
		$(".navbar-brand svg").removeClass("logo-rotate");
	},
);

$(".navbar-burger").click(
	function() {
		$(".navbar-brand svg").toggleClass("logo-rotate");
	},
);

// FOOTER

$("#facebook").hover(
	function() {
		$("#facebook svg > path").addClass("svg-darkBlue");
	},
	function() {
		$("#facebook svg > path").removeClass("svg-darkBlue");
	},
);

$("#twitter").hover(
	function() {
		$("#twitter svg > path").addClass("svg-lightBlue");
	},
	function() {
		$("#twitter svg > path").removeClass("svg-lightBlue");
	},
);

$("#instagram").hover(
	function() {
		$("#instagram svg > path").addClass("svg-purple");
	},
	function() {
		$("#instagram svg > path").removeClass("svg-purple");
	},
);

// AUTOMATIC COPYRIGHT YEAR

let footerCopyright = document.querySelector("footer .footer-bottom p");
let currentYear = new Date().getFullYear();
footerCopyright.innerHTML = "© " + currentYear + " Davide Ciulla. All Rights Reserved";