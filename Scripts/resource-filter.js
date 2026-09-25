console.log("Script loaded");

const categoryLabels = {
    data: "Data",
    technology: "Technology",
    methods: "Methods"
};

const filter = document.querySelector(".resource-filter");
const toggle = document.querySelector(".filter-toggle");
const filterOptions = document.querySelector(".filter-options");
const cards = document.querySelectorAll(".resource-card");

// Create filter checkboxes from categoryLabels
Object.entries(categoryLabels).forEach(([value, label]) => {
    const labelElement = document.createElement("label");

    labelElement.innerHTML = `
        <input type="checkbox" value="${value}">
        ${label}
    `;

    filterOptions.appendChild(labelElement);
});

// Get the dynamically-created checkboxes
const checkboxes = filterOptions.querySelectorAll("input");

// Populate keywords on each card
cards.forEach((card) => {
    const categories = card.dataset.category
        .split(" ")
        .filter(Boolean);

    const keywords = card.querySelector(".resource-keywords");

    const labels = categories.map(
        (category) => categoryLabels[category] || category
    );

    keywords.textContent = `Keywords: ${labels.join(", ")}`;
});

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

        const matches = selectedCategories.some((category) =>
            categories.includes(category)
        );

        card.style.display = matches ? "" : "none";
    });
}