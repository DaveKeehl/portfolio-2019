const url = 'http://localhost:8080/js/projects.json';

fetch(url)
	.then((res) => res.json())
	.then(function(data) {
		console.log(data);
		for (project in data.projects) {
			console.log(data.projects[project].thumbnail);
		}
	})

