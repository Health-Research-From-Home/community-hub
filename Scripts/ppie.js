// PPIE page interactions. Loaded with `defer` so the page markup is ready.
// The carousel uses the .ppie-resources-* classes in ppie.html and style.css.

// Research lifecycle hotspots: allow one explanation to be open at a time.
const hotspots = document.querySelectorAll(".image-hotspot");

function setHotspotOpen(hotspot, open) {
	const trigger = hotspot.querySelector(".hotspot-trigger");
	const card = hotspot.querySelector(".hotspot-card");

	// Keep the visual state and the accessibility attributes in sync.
	hotspot.classList.toggle("is-open", open);
	trigger.setAttribute("aria-expanded", String(open));
	card.setAttribute("aria-hidden", String(!open));
}

function closeHotspots(except = null) {
	// Preserve the clicked hotspot while closing any other open explanations.
	hotspots.forEach((hotspot) => {
		if (hotspot !== except) {
			setHotspotOpen(hotspot, false);
		}
	});
}

hotspots.forEach((hotspot) => {
	const trigger = hotspot.querySelector(".hotspot-trigger");

	trigger.addEventListener("click", () => {
		const shouldOpen = !hotspot.classList.contains("is-open");
		closeHotspots(hotspot);
		setHotspotOpen(hotspot, shouldOpen);
	});
});

// Dismiss explanations by clicking elsewhere or pressing Escape.
document.addEventListener("click", (event) => {
	if (!event.target.closest(".image-hotspot")) {
		closeHotspots();
	}
});

document.addEventListener("keydown", (event) => {
	if (event.key === "Escape") {
		closeHotspots();
	}
});


// Called by the introduction video's inline play button in ppie.html.
// Create the player on demand instead of loading it with the initial page.
function playPPIEVideo() {
    const container = document.getElementById("PPIE-video");

    if (!container) return;

    container.innerHTML = `
        <iframe
            src="https://youtu.be/ytqg13eNf-o?si=JspHjDHPEK-ekezi"
            title="An introduction to PPIE"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowfullscreen
            style="width:100%; height:100%; border:0; position:absolute; inset:0;">
        </iframe>
    `;
}

// Resources carousel: native horizontal scrolling also supports touch and Tab
// navigation to the resource links. The buttons provide an additional way to browse.
const resourcesTrack = document.getElementById("ppie-resources-track");

// Skip setup if the resource section is absent. When present, it must contain
// at least one card, both direction buttons, and #ppie-resources-status.
if (resourcesTrack) {
	const section = resourcesTrack.closest(".ppie-resources-section");
	const cards = [...resourcesTrack.querySelectorAll(".ppie-resource-card")];
	const buttons = [...section.querySelectorAll("[data-resource-direction]")];
	const status = document.getElementById("ppie-resources-status");
	// Remember the destination during smooth scrolling so rapid button presses
	// advance from the last request, rather than the animation's current position.
	// null means navigation should use the track's actual scroll position.
	let requestedScroll = null;
	let scrollTimer;

	function maxScroll() {
		// The final position keeps the last card inside the visible track.
		return Math.max(0, resourcesTrack.scrollWidth - resourcesTrack.clientWidth);
	}

	function cardPositions() {
		// Measure card starts in scroll coordinates on each move. This accounts for
		// responsive card widths and gaps without duplicating CSS sizes in JavaScript.
		const trackLeft = resourcesTrack.getBoundingClientRect().left;
		const end = maxScroll();
		const positions = cards.map((card) => Math.max(0,
			card.getBoundingClientRect().left - trackLeft + resourcesTrack.scrollLeft));
		// Avoid a tiny final step when the last card does not fill the viewport.
		const minimumStep = cards[0].getBoundingClientRect().width / 2;
		return [...new Set([0, ...positions.filter((left) => left < end - minimumStep), end])];
	}

	function updateControls() {
		const position = requestedScroll ?? resourcesTrack.scrollLeft;
		// CSS hides the controls when every card fits. A one-pixel tolerance
		// accommodates fractional layout sizes and rounded scroll positions.
		section.classList.toggle("is-scrollable", maxScroll() > 1);
		buttons.forEach((button) => {
			const atEnd = Number(button.dataset.resourceDirection) < 0
				? position <= 1 : position >= maxScroll() - 1;
			// aria-disabled preserves keyboard focus when a button reaches an end.
			// The click handler below must enforce this state explicitly.
			button.setAttribute("aria-disabled", String(atEnd));
		});
	}

	function updateStatus() {
		// Include partially visible cards, ignoring slivers of one pixel or less.
		// The status element announces the visible range to screen readers.
		const trackBounds = resourcesTrack.getBoundingClientRect();
		const visible = cards.flatMap((card, index) => {
			const bounds = card.getBoundingClientRect();
			return bounds.right > trackBounds.left + 1 && bounds.left < trackBounds.right - 1
				? [index + 1] : [];
		});
		if (visible.length) {
			const range = visible.length === 1 ? visible[0] : `${visible[0]}–${visible.at(-1)}`;
			const text = `Resources ${range} of ${cards.length}`;
			// Avoid repeating an announcement when the visible range has not changed.
			if (status.textContent !== text) status.textContent = text;
		}
	}

	function scrollToPosition(position) {
		requestedScroll = position;
		resourcesTrack.scrollTo({
			left: position,
			// Read the preference on each move so changes apply without reloading.
			behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
		});
		updateControls();
		scheduleScrollUpdate();
	}

	function scheduleScrollUpdate() {
		// Wait until scrolling has been quiet for 150 ms before announcing a range.
		// Called for button requests as well as scroll events, including touch,
		// keyboard and browser scrolling when a resource link receives focus.
		clearTimeout(scrollTimer);
		scrollTimer = setTimeout(() => {
			requestedScroll = null;
			updateControls();
			updateStatus();
		}, 150);
	}

	function moveResources(direction) {
		// Button data-resource-direction values are -1 (previous) and 1 (next).
		// Move to the neighbouring card stop, clamped to the track's ends.
		const position = requestedScroll ?? resourcesTrack.scrollLeft;
		const positions = cardPositions();
		const destination = direction > 0
			? positions.find((left) => left > position + 1) ?? maxScroll()
			: positions.reverse().find((left) => left < position - 1) ?? 0;
		scrollToPosition(destination);
	}

	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			if (button.getAttribute("aria-disabled") !== "true") {
				moveResources(Number(button.dataset.resourceDirection));
			}
		});
	});

	resourcesTrack.addEventListener("keydown", (event) => {
		// Only handle keys when the track itself is focused; preserve normal
		// keyboard behaviour for links and other controls inside the cards.
		if (event.target !== resourcesTrack) return;
		if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
		event.preventDefault();
		if (event.key === "Home") scrollToPosition(0);
		else if (event.key === "End") scrollToPosition(maxScroll());
		else moveResources(event.key === "ArrowRight" ? 1 : -1);
	});

	resourcesTrack.addEventListener("scroll", scheduleScrollUpdate, { passive: true });

	// Recalculate after layout changes, including viewport resizing. The card
	// range and whether navigation is needed can both change with track width.
	new ResizeObserver(() => {
		requestedScroll = null;
		updateControls();
		updateStatus();
	}).observe(resourcesTrack);
	// Set the initial button states and resource count before any interaction.
	updateControls();
	updateStatus();
}
