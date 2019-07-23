// Execute the function and show all columns
filterSelection("all")

function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName("columnHide");
	filter = document.querySelectorAll("#filters span");
	for (i = 0; i < filter.length; i++) {
		filter[i].classList.remove("filter-active");
	}
	if (c == "all") {
		element = document.querySelector("#filters span:nth-child(1)");
		c = "";
	} else if (c == "ux") {
		element = document.querySelector("#filters span:nth-child(2)");
	} else if (c == "web") {
		element = document.querySelector("#filters span:nth-child(3)");
	} else if (c == "publishing") {
		element = document.querySelector("#filters span:nth-child(4)");
	} else if (c == "video") {
		element = document.querySelector("#filters span:nth-child(5)");
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