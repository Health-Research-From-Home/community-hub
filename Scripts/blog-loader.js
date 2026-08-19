document.addEventListener("DOMContentLoaded", () => {
	const cards = document.querySelectorAll(".tir-card[data-blog]");

	cards.forEach(async (card) => {
		const url = card.dataset.blog;
		const excerpt = card.querySelector(".blog-excerpt");

		if (!url || !excerpt) return;

		try {
			const response = await fetch(url);

			if (!response.ok) {
				throw new Error(`Could not load ${url}`);
			}

			const html = await response.text();

			const parser = new DOMParser();
			const document = parser.parseFromString(html, "text/html");

			const intro = document.querySelector(".blog-intro");

			if (intro) {
				excerpt.innerHTML = intro.innerHTML.trim();
			}
		} catch (error) {
			console.error("Error loading blog intro:", error);
		}
	});
});