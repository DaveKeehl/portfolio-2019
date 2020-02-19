const url = '../js/projects.json';

fetchData(url);

async function fetchData(url) {

	const res = await fetch(url);
	
	if (res.status !== 200) {

		console.log('Looks like there was a problem. Status Code: ' + response.status);
		return;

	} else {

		const json = await res.json();

		// console.log(json.projects);

		// BUILD HTML PROJECTS

		let projectsContainer = document.querySelector('.portfolio main .columns.is-multiline');

		for (project in json.projects) {

			let outerDiv = document.createElement('div');
			let innerDiv = document.createElement('div');

			outerDiv.className += 'column is-one-quarter-widescreen is-one-third-desktop is-half-tablet columnHide columnShow';
			innerDiv.className += 'categories'
			innerDiv.style.backgroundImage = 'url(./img/portfolio/projects/' + json.projects[project].thumbnail + ')';
			innerDiv.dataset.index = project;

			innerDiv.addEventListener('click', (e) => {
				let index = e.target.dataset.index;
				openModal(json.projects[index].title, json.projects[index].description, json.projects[index].categories, json.projects[index].technologies, json.projects[index].link, json.projects[index].presentation)
			});

			projectsContainer.appendChild(outerDiv);
			outerDiv.appendChild(innerDiv);

			for (category in json.projects[project].categories) {
				let label = document.createElement('p');
				let workCategory = json.projects[project].categories[category];
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
	}

}


