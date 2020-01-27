function filterSelection(c) {
	console.log(c)
	var element;
	var filter = document.querySelectorAll(".filters span");
	console.log(filter)
	var x = document.getElementsByClassName("columnHide");
	for (let i = 0; i < filter.length; i++) {
		filter[i].classList.remove("filter-active");
	}
	if (c === "all") {
		element = document.querySelector(".filters div:nth-child(1) span");
		c = "";
	} else if (c === "ux" || c === 'recording') {
		console.log(c);
		element = document.querySelector(".filters div:nth-child(2) span");
	} else if (c === "web" || c === 'mixing') {
		element = document.querySelector(".filters div:nth-child(3) span");
	} else if (c === "video" || c === 'mastering') {
		element = document.querySelector(".filters div:nth-child(4) span");
	}
	element.classList.add("filter-active");
	// Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
	for (i = 0; i < x.length; i++) {
		filterRemoveClass(x[i], "columnShow");
		if (x[i].className.indexOf(c) > -1) filterAddClass(x[i], "columnShow");
	}
	// console.log("reached the end!");
}

// Show filtered elements
function filterAddClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += " " + arr2[i];
		}
	}
}

// Hide elements that are not selected
function filterRemoveClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(" ");
}