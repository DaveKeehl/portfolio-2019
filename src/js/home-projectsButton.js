let projectsButton = document.querySelector('.home .projects a .invisible');
let images = document.querySelectorAll('.home .projects img');
let bg = document.querySelector('.home .projects a .bg');
let button = document.querySelector('.home .projects a');

projectsButton.addEventListener('mouseover', (e) => {
	button.classList.add('is-hover');
	for (let i = 0; i < images.length; i++) {
		images[i].classList.add('rocket-launch');
	}
	setTimeout( () => {
		for (let i = 0; i < images.length; i++) {
			images[i].classList.remove('rocket-launch');
		}
	},1200);
});

projectsButton.addEventListener('mouseleave', (e) => {
	button.classList.remove('is-hover');
	console.log('left');
});

projectsButton.addEventListener('click', (e) => {

	button.classList.add('glow');
	bg.classList.add('background-animation');
	setTimeout( () => {
		window.location = 'portfolio.html';
	},1200);
});