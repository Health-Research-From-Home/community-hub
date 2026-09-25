console.log("Script loaded");
const filter = document.querySelector(".resource-filter");
const toggle = document.querySelector(".filter-toggle");
const checkboxes = document.querySelectorAll(".filter-options input");
const cards = document.querySelectorAll(".resource-card");

// Open and close the filter dropdown
toggle.addEventListener("click", () => {
	filter.classList.toggle("open");
});

// Filter resources when a checkbox is selected
checkboxes.forEach((checkbox) => {
	checkbox.addEventListener("change", filterResources);
});

function filterResources() {
	const selectedCategories = Array.from(checkboxes)
		.filter((checkbox) => checkbox.checked)
		.map((checkbox) => checkbox.value);

	cards.forEach((card) => {
		const categories = card.dataset.category.split(" ");

		if (selectedCategories.length === 0) {
			card.style.display = "";
			return;
		}

		const matches = selectedCategories.some((category) => categories.includes(category));

		card.style.display = matches ? "" : "none";
	});
}
