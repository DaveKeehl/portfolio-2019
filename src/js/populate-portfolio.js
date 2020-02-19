const url = 'http://localhost:8080/js/projects.json';
const liveUrl = 'https://www.davideciulla.com/js/projects.json'

fetch(liveUrl)
	.then((res) => res.json())
	.then(function(data) {

		// BUILD HTML PROJECTS

		// console.log(data);

		let projectsContainer = document.querySelector('.portfolio main .columns.is-multiline');

		for (project in data.projects) {

			// console.log(data.projects[project].presentation);

			let outerDiv = document.createElement('div');
			let innerDiv = document.createElement('div');

			outerDiv.className += 'column is-one-quarter-widescreen is-one-third-desktop is-half-tablet columnHide columnShow';
			innerDiv.className += 'categories'
			innerDiv.style.backgroundImage = 'url(./img/portfolio/projects/' + data.projects[project].thumbnail + ')';
			innerDiv.dataset.index = project;

			innerDiv.addEventListener('click', (e) => {
				let index = e.target.dataset.index;
				openModal(data.projects[index].title, data.projects[index].description, data.projects[index].categories, data.projects[index].technologies, data.projects[index].link, data.projects[index].presentation)
			});

			projectsContainer.appendChild(outerDiv);
			outerDiv.appendChild(innerDiv);

			for (category in data.projects[project].categories) {
				let label = document.createElement('p');
				let workCategory = data.projects[project].categories[category];
				label.innerHTML = workCategory;
				if (workCategory === 'UI/UX') {
					label.classList.add('ux');
					outerDiv.classList.add('ux');
				} else {
					label.classList.add(workCategory.toLowerCase());
					outerDiv.classList.add(workCategory.toLowerCase());

				}
				innerDiv.appendChild(label);
			}

		}
	})

