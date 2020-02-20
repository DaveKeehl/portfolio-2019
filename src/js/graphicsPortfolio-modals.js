var page = document.getElementsByTagName("html")[0];

var modal = document.querySelector(".portfolio .modal");
var modalBackground = document.querySelector(".portfolio .modal .background");
var modalPresentation = document.querySelector(".portfolio .modal .presentation");
var modalPresentationContent = document.querySelector(".portfolio .modal .presentation .content");
var modalName = document.querySelector(".portfolio .modal h2");
var modalDescription = document.querySelector(".portfolio .modal .description");
var modalCategories = document.querySelector(".portfolio .modal .categories");
var modalTools = document.querySelector(".portfolio .modal .technologies");
var modalLink = document.querySelector(".portfolio .modal a");
var modalSidebar = document.querySelector(".portfolio .modal aside");

var dragHandle = document.querySelector(".portfolio .modal .close");

var closeModalButton = document.querySelector(".portfolio .modal aside img");

var isClosed = true;

closeModalButton.addEventListener("click", closeModal);
modalBackground.addEventListener("click", closeModal);

// OPEN MODAL

function openModal(name, description, categories, technologies, link, presentation) {

	if (isClosed == true && page.classList.contains("overflow-hidden") == false) {

		// INJECT PRESENTATION CONTENT
		if (presentation !== undefined) {
			modalPresentationContent.classList.remove('hide');
			modalPresentationContent.innerHTML = presentation;
		} else {
			modalPresentationContent.classList.add('hide');
		}

		// INJECT WORK NAME
		modalName.innerHTML = name;

		// INJECT WORK DESCRIPTION
		modalDescription.innerHTML = description;

		// INJECT WORK EXTERNAL LINK
		modalLink.href = link;

		// INJECT WORK CATEGORIES
		for (let i = 0; i < categories.length; i++) {
			let category = document.createElement('p');
			category.innerHTML = categories[i];
			if (categories[i] === 'UI/UX') {
				category.classList.add('ux');
			} else {
				category.classList.add(categories[i].toLowerCase());
			}
			modalCategories.appendChild(category);
		}

		// INJECT WORK TECHNOLOGIES
		for (let i = 0; i < technologies.length; i++) {

			let logo = document.createElement("div");
			logo.style.backgroundImage = "url(../img/portfolio/icons/" + technologies[i].toLowerCase().replace(' ', '-') + ".svg)";
			logo.classList.add("tooltip");

			let tooltip = document.createElement("span");
			tooltip.classList.add("tooltip-text");
			tooltip.innerHTML = technologies[i];

			logo.appendChild(tooltip);

			let tool = document.createElement("div");
			tool.appendChild(logo);
			modalTools.appendChild(tool);
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
			// RESET technologies
			while (modalTools.hasChildNodes()) {
				modalTools.removeChild(modalTools.firstChild);
			}
			// RESET PRESENTATION CONTENT
			modalPresentationContent.innerHTML = "";
		}, 500);
		isClosed = true;
	}
}

// MOBILE MODAL DRAG INTERACTION

var i = 0;

dragHandle.addEventListener("touchstart", (e) => {
	
	modalName.innerHTML = i.toString(2);
	i++;

}, {passive:true});
