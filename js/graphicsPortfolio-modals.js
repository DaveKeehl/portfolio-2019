var page = document.getElementsByTagName("html")[0];
var closeModalButton = document.querySelector(".graphics.portfolio .modal aside img");
closeModalButton.addEventListener("click", closeModal);
var modal = document.querySelector(".graphics.portfolio .modal");
var modalPresentation = document.querySelector(".graphics.portfolio .modal .presentation .content");
var modalSidebar = document.querySelector(".graphics.portfolio .modal aside");
var work = document.querySelectorAll(".graphics.portfolio .columns .column");
var workCategories = document.querySelectorAll(".graphics.portfolio .columns .column .categories");
var modalName = document.querySelector(".graphics.portfolio .modal h2");
var modalDescription = document.querySelector(".graphics.portfolio .modal .description");
var modalCategories = document.querySelector(".graphics.portfolio .modal .categories");
var modalTools = document.querySelector(".graphics.portfolio .modal .tools");
var modalLink = document.querySelector(".graphics.portfolio .modal a");
var isClosed = true;

// ADDING TAGS TO EACH WORK SAMPLE

for (i = 0; i < work.length; i++) {
	for (j = 0; j < work[i].classList.length; j++) {
		if (work[i].classList[j] === 'ux' || work[i].classList[j] === 'web' || work[i].classList[j] === 'video' || work[i].classList[j] === 'print') {
			let category = document.createElement("p");
			if (work[i].classList[j] === 'ux') {
				category.innerHTML = 'ui/ux';
			} else {
				category.innerHTML = work[i].classList[j];
			}
			category.classList.add(work[i].classList[j]);
			workCategories[i].appendChild(category);
		}
	}
}

// OPEN MODAL

function openModal(id, name, description, tools, link, presentation) {
	if (isClosed == true && page.classList.contains("overflow-hidden") == false) {
		// INJECT WORK NAME
		modalName.innerHTML = name;
		// INJECT WORK DESCRIPTION
		modalDescription.innerHTML = description;
		// INJECT WORK EXTERNAL LINK
		modalLink.href = 'https://' + link;
		// INJECT WORK TAGS
		for (i = 0; i < workCategories[id].children.length; i++) {
			if (workCategories[id].children[i].innerHTML === 'ui/ux' || 'web' || 'print' || 'video') {
				let category = document.createElement("p");
				category.innerHTML = workCategories[id].children[i].innerHTML;
				if (workCategories[id].children[i].innerHTML === "ui/ux") {
					category.classList.add("ux");
				} else {
					category.classList.add(workCategories[id].children[i].innerHTML);
				}
				modalCategories.appendChild(category);
			}
		}
		// INJECT WORK TOOLS AND TECHNOLOGIES
		for (i = 0; i < tools.length; i++) {
			let logo;
			// USE ICONS
			if (['html', 'css', 'bootstrap', 'sass', 'javascript', 'github', 'wordpress', 'wix'].includes(tools[i])) {
				logo = document.createElement("i");
				let toolClass;
				if (tools[i] === 'html') {
					toolClass = "fa-html5";
				} else if (tools[i] === 'css') {
					toolClass = "fa-css3-alt";
				} else if (tools[i] === 'javascript') {
					toolClass = "fa-js";
				} else {
					toolClass = "fa-" + tools[i];
				}
				logo.classList.add("fab", toolClass);
			} else {
				// USE IMAGES
				logo = document.createElement("div");
				// console.log(logo);
				logo.style.background = "url(../src/graphics/portfolio/" + tools[i] + ".svg) center/contain no-repeat ";
				logo.style.width = "24px";
				logo.style.height = "24px";
				logo.style.display = "block";
			}
			logo.classList.add("tooltip");
			let tooltip = document.createElement("span");
			tooltip.classList.add("tooltip-text");
			tooltipText = tools[i].replace('-', ' ');
			// console.log(tooltipText)
			tooltip.innerHTML = tooltipText;
			logo.appendChild(tooltip);
			let tool = document.createElement("div");
			tool.appendChild(logo);
			tool.classList.add(tools[i]);
			modalTools.append(tool);
		}
		// INJECT PRESENTATION CONTENT
		if (presentation !== undefined) {
			modalPresentation.innerHTML = presentation;
		}

		// SHOW MODAL
		// 1. REMOVE BACKGROUND OUT-ANIMATION
		modal.classList.remove("modal-background-out");
		// 2. REMOVE SIDEBAR OUT-ANIMATION
		modalSidebar.classList.remove("modalSidebar-modalClose");
		// 3. REMOVE PRESENTATION OUT-ANIMATION
		modalPresentation.classList.remove("modalPresentation-modalClose");
		// 4. REMOVE PAGE SCROLLBAR
		page.classList.add("overflow-hidden");
		// 5. SHOW MODAL
		modal.classList.add("display-flex");
		// 6. ADD BACKGROUND IN-ANIMATION
		modal.classList.add("modal-background-in");
		// 7. ADD SIDEBAR IN-ANIMATION
		modalSidebar.classList.add("modalSidebar-modalOpen");
		// 8. ADD PRESENTATION IN-ANIMATION
		modalPresentation.classList.add("modalPresentation-modalOpen");
		// SET MODAL STATE
		isClosed = false;
	}
}

// CLOSE MODAL

function closeModal() {
	if (isClosed == false && page.classList.contains("overflow-hidden")) {
		// 1. REMOVE BACKGROUND IN-ANIMATION
		modal.classList.remove("modal-background-in");
		// 2. REMOVE SIDEBAR IN-ANIMATION
		modalSidebar.classList.remove("modalSidebar-modalOpen");
		// 3. REMOVE PRESENTATION IN-ANIMATION
		modalPresentation.classList.remove("modalPresentation-modalOpen");
		// 4. ADD BACKGROUND OUT-ANIMATION
		modal.classList.add("modal-background-out");
		// 5. ADD SIDEBAR OUT-ANIMATION
		modalSidebar.classList.add("modalSidebar-modalClose");
		// 6. ADD PRESENTATION OUT-ANIMATION
		modalPresentation.classList.add("modalPresentation-modalClose");
		setTimeout(function() {
			// 7. ADD SCROLLBAR TO PAGE
			page.classList.remove("overflow-hidden");
			// 8. REMOVE MODAL FROM PAGE
			modal.classList.remove("display-flex");
			// RESET CATEGORIES
			while (modalCategories.hasChildNodes()) {
				modalCategories.removeChild(modalCategories.firstChild);
			}
			// RESET TOOLS
			while (modalTools.hasChildNodes()) {
				modalTools.removeChild(modalTools.firstChild);
			}
			console.log("test");
			// RESET PRESENTATION CONTENT
			modalPresentation.innerHTML = "";
		}, 500);
		isClosed = true;
	}
}