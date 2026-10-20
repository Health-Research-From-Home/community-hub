document.addEventListener("DOMContentLoaded", () => {
	/* =========================================
       RESOURCE INFORMATION
    ========================================= */

	const resources = [
		{
			title: "Wearables, physical activity & sleep: Important new components for mortality prediction (PPT)",
			description:
				"Keynote talk given by Aiden Doherty, Professor of Biomedical Informatics at the University of Oxford during Connect 2025",
			tags: ["Data", "Technology", "Methods"],
			image: "DMT resources/Images/Aiden Doherty.png",
			file: "DMT resources/HRfH Connect 07Feb25 - Keynote I_Aiden Doherty(1).pptx",
		},

		{
			title: "Consumer health measures from smartphones and wearables for population health research - working group paper",
			description: "Working group paper",
			tags: ["Data", "Technology", "Methods"],
			image: "DMT resources/Images/Resource coming.png",
			file: "#",
		},

		{
			title: "Beyond Steps Unlocking Multimodal Health Discovery with the World’s Largest Wearable Dataset (PDF)",
			description:
				"Presentation given by Josh Denny, CEO of the ‘All of Us’ Research Programme at Connect in February 2026",
			tags: ["Data"],
			image: "DMT resources/Images/Josh Denny.png",
			file: "DMT resources/Keynote I - Josh Denny.pdf",

			extraButton: {
				text: "WATCH THE RECORDING",
				link: "https://youtu.be/M_9RA2HOAl0?si=6Zzhmlm4Hm6ia1OI",
			},
		},

		{
			title: "Involving patients and the public and missing data (PPT)",
			description:
				"Presentation given by Lynn Laidlaw, Patient and Public contributor and researcher, at the 2026 Hackathon",
			tags: ["Methods"],
			image: "DMT resources/Images/Lynn PPIE talk.png",
			file: "PPIE resources/Lynn_Involving patients and the public in missing data_HRfH webinar_ 06_05_26.pptx",
		},

		{
			title: "Mind the Gap: Understanding, defining and handling missing accelerometer data (PDF)",
			description:
				"Presentation given by Mia Tackney, NIHR Advanced Fellow, MRC Biostatistics Unit at the University of Cambridge during the 2026 Hackathon",
			tags: ["Data", "Methods"],
			image: "DMT resources/Images/Mia Tackney.png",
			file: "DMT resources/Hackathon Talk_Mia.pdf",
		},

		{
			title: "Practical design and clear reporting of simulation studies (PPT)",
			description:
				"Presentation given by Alex Pate, Research Fellow based in the Prediction Modelling group at The University of Manchester for the 2026 Hackathon",
			tags: ["Data", "Methods"],
			image: "DMT resources/Images/Alex Pate.png",
			file: "DMT resources/Hackathon simulation presentation Alex.pptx",
		},

		{
			title: "Opening the Black Box: Developing a Transparent Framework for Processing Consumer Smartphone/Wearable Data in Health Research - Journal publication",
			description: "Journal publication written by Shuai Shao",
			tags: ["Data", "Methods"],
			image: "DMT resources/Images/Resource coming.png",
			file: "#",
		},

		{
			title: "Wearables at Scale: Technical progress and practical barriers for measuring physical activity in national population health surveillance (PDF)",
			description:
				"Keynote talk given by Fiona Bull, Head of Physical Activity Unit, WHO for the 2026 Feb Connect ",
			tags: ["Data", "Technology", "Methods"],
			image: "DMT resources/Images/Fiona Bull.png",
			file: "DMT resources/FIONABULL_10Feb2026.pdf",

			extraButton: {
				text: "WATCH THE RECORDING",
				link: "https://youtu.be/8aDLN0Kzj2Q?si=mapMa3ep8e135oPN",
			},
		},

		{
			title: "Digital in the NHS 10 Year Plan (PPT)",
			description:
				"Talk given by Will Warburton, Director of Life Sciences Policy at NHS England for the 2026 Feb Connect ",
			tags: ["Data", "Technology"],
			image: "DMT resources/Images/Will Warburton.png",
			file: "DMT resources/Digital in the 10 Year Health Plan - Will Warburton.pptx",

			extraButton: {
				text: "WATCH THE RECORDING",
				link: "https://youtu.be/f0G5IXmayiQ?si=g_cUvPK6SXozTW9X",
			},
		},

		{
			title: "Health Happens Somewhere: What Might GPS Data Tell Us? (PDF)",
			description:
				"Technology showcase talk given by Michael Sinclair, University of Glasgow, for the 2026 Feb Connect",
			tags: ["Data"],
			image: "DMT resources/Images/Michael Sinclair.png",
			file: "DMT resources/MichaelSinclair.pdf",

			extraButton: {
				text: "WATCH THE RECORDING",
				link: "https://youtu.be/G4ewIAYUiwE?si=NjBA2xKskC4m55JK",
			},
		},

		{
			title: "UMotif: Putting People at the Centre of Their Research Journey (PPT)",
			description: "Technology showcase talk given at Connect 2025",
			tags: ["Technology"],
			image: "DMT resources/Images/Bruce Hellman.png",
			file: "DMT resources/HRfH Connect 07Feb25 - Tech Showcase_uMotif_Bruce Hellman.pptx",
		},

		{
			title: "RADAR-Base (PPT)",
			description: "Technology showcase talk given at Connect 2025",
			tags: ["Technology"],
			image: "DMT resources/Images/RADAR Base.png",
			file: "DMT resources/HRfH Connect 07Feb25 - Tech Showcase_RADAR-base_Amos Folarin.pptx",
		},

		{
			title: "Mobile Health Technologies From Wearables to Real-World Evidence (PDF)",
			description:
				"Technology talk presented by Dr Omar Khaled, mHealth Research Senior Product Manager and Dr Giada Brianza, mHealth Research Project Manager for the 2026 Grant Writing Retreat ",
			tags: ["Technology"],
			image: "DMT resources/Images/RADAR Base GWR talk.png",
			file: "Grant Writing Retreat/2026\HRfH_Grant Writing - Tech clinic.pdf",
		},

		{
			title: "Using Touch Screen Devices For Cognitive Research (PPT)",
			description: "Technology talk given by Nick Taptiklis, Cambridge Cognition at the 2026 Feb Connect",
			tags: ["Technology"],
			image: "DMT resources/Images/Cambridge Cognition.png",
			file: "DMT resources/UsingTouchScreenDevicesForCognitiveResearch - Cambridge Cognition.pptx",

			extraButton: {
				text: "WATCH THE RECORDING",
				link: "https://youtu.be/G4ewIAYUiwE?si=NjBA2xKskC4m55JK",
			},
		},

		{
			title: "Smartphone sensors: challenges and opportunities (PDF)",
			description:
				"Technology talk given by Matthew Thompson, Clinical Research Scientist at Google for the 2026 Feb Connect",
			tags: ["Technology"],
			image: "DMT resources/Images/Matthew Thompson.png",
			file: "DMT resources/Copy of London talk Feb 9, 20206 - Matthew Thompson.pdf",

			extraButton: {
				text: "WATCH THE RECORDING",
				link: "https://youtu.be/G4ewIAYUiwE?si=NjBA2xKskC4m55JK",
			},
		},
	];

	/* =========================================
       GET PAGE ELEMENTS
    ========================================= */

	const tabs = document.querySelectorAll(".resource-tab");

	const image = document.getElementById("resourceImage");
	const imageLink = document.getElementById("resourceImageLink");

	const category = document.getElementById("resourceCategory");
	const title = document.getElementById("resourceTitle");
	const description = document.getElementById("resourceDescription");

	const tagsContainer = document.getElementById("resourceTags");

	const button = document.getElementById("resourceButton");
	const extraButton = document.getElementById("resourceExtraButton");

	const filter = document.querySelector(".resource-filter");
	const filterToggle = document.querySelector(".filter-toggle");
	const filterOptions = document.querySelector(".filter-options");

	/* =========================================
       CHECK REQUIRED ELEMENTS
    ========================================= */

	if (!tabs.length) {
		console.error("No resource tabs found.");
		return;
	}

	if (!image || !imageLink || !category || !title || !description || !button) {
		console.error("One or more resource card elements are missing.");
		return;
	}

	/* =========================================
       CREATE FILTER CHECKBOXES
    ========================================= */

	if (filterOptions) {
		const allTags = [];

		resources.forEach((resource) => {
			resource.tags.forEach((tag) => {
				if (!allTags.includes(tag)) {
					allTags.push(tag);
				}
			});
		});

		allTags.forEach((tag) => {
			const label = document.createElement("label");

			const checkbox = document.createElement("input");

			checkbox.type = "checkbox";
			checkbox.value = tag;

			label.appendChild(checkbox);
			label.appendChild(document.createTextNode(tag));

			filterOptions.appendChild(label);
		});
	}

	/* =========================================
       SET RESOURCE TAB TEXT
    ========================================= */

	tabs.forEach((tab, index) => {
		if (resources[index]) {
			tab.textContent = resources[index].title;
		}
	});

	/* =========================================
       SHOW RESOURCE
    ========================================= */

	function showResource(index) {
		const resource = resources[index];

		if (!resource) {
			console.error("Resource not found:", index);
			return;
		}

		/* Active tab */

		tabs.forEach((tab) => {
			tab.classList.remove("active");
		});

		if (tabs[index]) {
			tabs[index].classList.add("active");
		}

		/* Image */

		image.src = resource.image;
		image.alt = resource.title;

		imageLink.href = resource.file;

		/* Text */

		category.textContent = resource.category;

		title.textContent = resource.title;

		description.textContent = resource.description;

		/* Tags */

		if (tagsContainer) {
			tagsContainer.innerHTML = "";

			resource.tags.forEach((tag) => {
				const tagElement = document.createElement("span");

				tagElement.className = "resource-tag";

				tagElement.textContent = tag;

				tagsContainer.appendChild(tagElement);
			});
		}

		/* View Resource button */

		button.href = resource.file;

		/* Optional second button */

		if (extraButton) {
			if (resource.extraButton) {
				extraButton.textContent = resource.extraButton.text;
				extraButton.href = resource.extraButton.link;
				extraButton.hidden = false;
			} else {
				extraButton.hidden = true;
				extraButton.removeAttribute("href");
			}
		}
	}

	/* =========================================
       FILTER RESOURCES
    ========================================= */

	function filterResources() {
		if (!filterOptions) {
			return;
		}

		const selectedTags = Array.from(filterOptions.querySelectorAll("input:checked")).map(
			(checkbox) => checkbox.value,
		);

		tabs.forEach((tab, index) => {
			const resource = resources[index];

			if (!resource) {
				return;
			}

			const matches = selectedTags.length === 0 || resource.tags.some((tag) => selectedTags.includes(tag));

			if (matches) {
				tab.style.display = "";
			} else {
				tab.style.display = "none";
			}
		});

		/* Show first matching resource */

		const firstMatchingIndex = resources.findIndex((resource) => {
			return selectedTags.length === 0 || resource.tags.some((tag) => selectedTags.includes(tag));
		});

		if (firstMatchingIndex !== -1) {
			showResource(firstMatchingIndex);
		}
	}

	/* =========================================
       FILTER BUTTON
    ========================================= */

	if (filterToggle && filter) {
		filterToggle.addEventListener("click", () => {
			filter.classList.toggle("open");
		});
	}

	/* =========================================
       FILTER CHECKBOX EVENTS
    ========================================= */

	if (filterOptions) {
		filterOptions.addEventListener("change", () => {
			filterResources();
		});
	}

	/* =========================================
       CLOSE FILTER WHEN CLICKING OUTSIDE
    ========================================= */

	document.addEventListener("click", (event) => {
		if (filter && !filter.contains(event.target)) {
			filter.classList.remove("open");
		}
	});

	/* =========================================
       RESOURCE TAB CLICK EVENTS
    ========================================= */

	tabs.forEach((tab, index) => {
		tab.addEventListener("click", () => {
			showResource(index);
		});
	});

	/* =========================================
       SHOW FIRST RESOURCE
    ========================================= */

	showResource(0);
});
