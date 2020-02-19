function updateGradients() {

	let svg_width = document.querySelector(".wave-container svg").getAttribute("width");
	let viewport_width = window.innerWidth;
	let start = (svg_width - viewport_width)/2;
	let end = svg_width - (svg_width - viewport_width)/2;

	let waves_gradient_1 = document.querySelectorAll('#waves-gradient-1');
	let waves_gradient_2 = document.querySelectorAll('#waves-gradient-2');

	for (let i = 0; i < waves_gradient_1.length; i++) {
		waves_gradient_1[i].setAttribute("x1", start);
		waves_gradient_1[i].setAttribute("x2", end);
	}

	for (let i = 0; i < waves_gradient_2.length; i++) {
		waves_gradient_2[i].setAttribute("x1", start);
		waves_gradient_2[i].setAttribute("x2", end);
	}

}

updateGradients();
window.onresize = updateGradients;