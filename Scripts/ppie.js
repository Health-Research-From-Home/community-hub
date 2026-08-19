const hotspots = document.querySelectorAll(".image-hotspot");

function setHotspotOpen(hotspot, open) {
	const trigger = hotspot.querySelector(".hotspot-trigger");
	const card = hotspot.querySelector(".hotspot-card");

	hotspot.classList.toggle("is-open", open);
	trigger.setAttribute("aria-expanded", String(open));
	card.setAttribute("aria-hidden", String(!open));
}

function closeHotspots(except = null) {
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
