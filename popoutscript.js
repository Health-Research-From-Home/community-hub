document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       RESOURCE INFORMATION
    ========================================= */

    const resources = [

        {
            title: "Wearables, physical activity & sleep: Important new components for mortality prediction",
            category: "Data, technology, methods",
            description: "Placeholder description.",
            tags: [
                "Data",
                "Technology",
                "Methods"
            ],
            image: "Grant Writing Retreat/2026/Screenshot 2026-09-29 112505.png",
            file: "Grant Writing Retreat/2026/11.07.25_HRfH GWR_IG_TopTips.pptx"
        },

        {
            title: "Consumer health measures from smartphones and wearables for population health research",
            category: "Data, technology, methods",
            description: "Placeholder description for the consumer health measures resource.",
            tags: [],
            image: "images/resource-2-thumbnail.jpg",
            file: "resources/resource-2.pdf"
        },

        {
            title: "New schema for smartphone and wearables specific metadata fields to enable better discoverability of existing S&W datasets for research",
            category: "Data, technology, methods",
            description: "Placeholder description for the smartphone and wearables metadata schema resource.",
            tags: [],
            image: "images/resource-3-thumbnail.jpg",
            file: "resources/resource-3.pdf"
        },

        {
            title: "Beyond Steps Unlocking Multimodal Health Discovery with the World’s Largest Wearable Dataset",
            category: "Data, technology, methods",
            description: "Placeholder description for the Beyond Steps resource.",
            tags: [],
            image: "images/resource-4-thumbnail.jpg",
            file: "resources/resource-4.pdf"
        },

        {
            title: "Involving patients and the public and missing data",
            category: "Patient and public involvement",
            description: "Placeholder description for the patient and public involvement resource.",
            tags: [],
            image: "images/resource-5-thumbnail.jpg",
            file: "resources/resource-5.pdf"
        },

        {
            title: "Mind the Gap: Understanding, defining and handling missing PPT accelerometer data",
            category: "",
            description: "",
            tags: [],
            image: "path/to/resource-6-screenshot.png",
            file: "path/to/resource-6-file.pdf"
        },

        {
            title: "Practical design and clear reporting of simulation studies",
            category: "",
            description: "",
            tags: [],
            image: "path/to/resource-7-screenshot.png",
            file: "path/to/resource-7-file.pdf"
        },

        {
            title: "Opening the Black Box: Developing a Transparent Framework for Processing Consumer Smartphone/Wearable Data in Health Research",
            category: "",
            description: "",
            tags: [],
            image: "path/to/resource-8-screenshot.png",
            file: "path/to/resource-8-file.pdf"
        },

        {
            title: "Wearables at Scale: Technical progress and practical barriers for measuring physical activity in national population health surveillance",
            category: "",
            description: "",
            tags: [],
            image: "path/to/resource-9-screenshot.png",
            file: "path/to/resource-9-file.pdf"
        },

        {
            title: "Digital in the NHS",
            category: "",
            description: "",
            tags: [],
            image: "path/to/resource-10-screenshot.png",
            file: "path/to/resource-10-file.pdf"
        },

        {
            title: "Health Happens Somewhere: What Might GPS Data Tell Us?",
            category: "",
            description: "",
            tags: [],
            image: "path/to/resource-11-screenshot.png",
            file: "path/to/resource-11-file.pdf"
        },

        {
            title: "UMotif PPT: Putting People at the Centre of Their Research Journey",
            category: "",
            description: "",
            tags: [],
            image: "path/to/resource-12-screenshot.png",
            file: "path/to/resource-12-file.pdf"
        },

        {
            title: "RADAR-Base PPT",
            category: "",
            description: "",
            tags: [],
            image: "path/to/resource-13-screenshot.png",
            file: "path/to/resource-13-file.pdf"
        },

        {
            title: "Technical challenges and RADAR Base",
            category: "",
            description: "",
            tags: [],
            image: "path/to/resource-14-screenshot.png",
            file: "path/to/resource-14-file.pdf"
        },

        {
            title: "Mobile Health Technologies From Wearables to Real-World Evidence",
            category: "",
            description: "",
            tags: [],
            image: "path/to/resource-15-screenshot.png",
            file: "path/to/resource-15-file.pdf"
        },

        {
            title: "Using Touch Screen Devices For Cognitive Research",
            category: "",
            description: "",
            tags: [],
            image: "path/to/resource-16-screenshot.png",
            file: "path/to/resource-16-file.pdf"
        }

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

    }


    /* =========================================
       FILTER RESOURCES
    ========================================= */

    function filterResources() {

        if (!filterOptions) {
            return;
        }


        const selectedTags = Array.from(
            filterOptions.querySelectorAll("input:checked")
        ).map((checkbox) => checkbox.value);


        tabs.forEach((tab, index) => {

            const resource = resources[index];

            if (!resource) {
                return;
            }


            const matches =
                selectedTags.length === 0 ||
                resource.tags.some((tag) => selectedTags.includes(tag));


            if (matches) {
                tab.style.display = "";
            } else {
                tab.style.display = "none";
            }

        });


        /* Show first matching resource */

        const firstMatchingIndex = resources.findIndex((resource) => {

            return (
                selectedTags.length === 0 ||
                resource.tags.some((tag) => selectedTags.includes(tag))
            );

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

        if (
            filter &&
            !filter.contains(event.target)
        ) {

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