const templateDirectory = new URL("./", document.currentScript.src);
const templateCache = new Map();

async function loadTemplate(filename) {
	if (!templateCache.has(filename)) {
		const templateUrl = new URL(filename, templateDirectory);
		const request = fetch(templateUrl).then(async (response) => {
			if (!response.ok) {
				throw new Error(`Unable to load ${filename}: ${response.status} ${response.statusText}`);
			}

			return response.text();
		});

		templateCache.set(filename, request);
	}

	return templateCache.get(filename);
}

function markCurrentNavigation(container) {
	const currentPage = window.location.pathname.split("/").pop() || "index.html";

	container.querySelectorAll(".nav-links a[href]").forEach((link) => {
		if (link.getAttribute("href") === currentPage) {
			link.setAttribute("aria-current", "page");
		}
	});
}

function setMenuState(menuContainer, isOpen) {
	const button = menuContainer.querySelector(".hamburger");
	menuContainer.classList.toggle("is-open", isOpen);
	button.setAttribute("aria-expanded", String(isOpen));
	button.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
}

function setupSubpageNavigation(container) {
	const menuContainer = container.querySelector(".menu-container");
	const button = menuContainer?.querySelector(".hamburger");

	if (!menuContainer || !button || button.tagName !== "BUTTON") return;

	button.addEventListener("click", () => {
		setMenuState(menuContainer, !menuContainer.classList.contains("is-open"));
	});

	menuContainer.addEventListener("keydown", (event) => {
		if (event.key !== "Escape" || !menuContainer.classList.contains("is-open")) return;

		setMenuState(menuContainer, false);
		button.focus();
	});

	menuContainer.querySelectorAll(".nav-links a").forEach((link) => {
		link.addEventListener("click", () => setMenuState(menuContainer, false));
	});
}

function showTemplateError(element, areaName, error) {
	console.error(error);
	element.innerHTML = `
		<div class="template-error" role="alert">
			<p>The site ${areaName} could not be loaded.</p>
			<p><a href="index.html">Return to the homepage</a></p>
		</div>`;
}

class SiteHeader extends HTMLElement {
	async connectedCallback() {
		try {
			const isHome = this.getAttribute("variant") === "home";
			const filename = isHome ? "header-home.html" : "header-subpage.html";
			this.innerHTML = await loadTemplate(filename);

			if (!isHome) {
				const heading = this.querySelector("[data-page-heading]");
				heading.textContent = this.getAttribute("heading") || document.title;
			}

			markCurrentNavigation(this);
			if (!isHome) setupSubpageNavigation(this);
		} catch (error) {
			showTemplateError(this, "navigation", error);
		}
	}
}

class SiteFooter extends HTMLElement {
	async connectedCallback() {
		try {
			this.innerHTML = await loadTemplate("footer.html");
		} catch (error) {
			showTemplateError(this, "footer", error);
		}
	}
}

// TODO: Can we make it so that this doesn't show the currently shown web page?
class QuickNav extends HTMLElement {
	async connectedCallback() {
		try {
			this.innerHTML = await loadTemplate("quick-nav.html");
		} catch (error) {
			showTemplateError(this, "quick-nav", error);
		}
	}
}

// TODO: Can we make it so that this doesn't show the currently shown blog post?
class QuickBlogs extends HTMLElement {
	async connectedCallback() {
		try {
			this.innerHTML = await loadTemplate("quick-blogs.html");
		} catch (error) {
			showTemplateError(this, "quick-blogs", error);
		}
	}
}

customElements.define("site-header", SiteHeader);
customElements.define("site-footer", SiteFooter);
customElements.define("quick-nav", QuickNav);
customElements.define("quick-blogs", QuickBlogs);
