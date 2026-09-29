document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       RESOURCE INFORMATION
    ========================================= */

    const resources = [

        {
            title: "Wearables, physical activity & sleep: Important new components for mortality prediction",
            category: "Data, technology, methods",
            description: "Resource 1 description goes here.",
            tags: [
                "Data",
                "Technology",
                "Methods"
            ],
            image: "Grant Writing Retreat/2026/Screenshot 2026-09-29 112505.png",
            file: "Grant Writing Retreat/2026/11.07.25_HRfH GWR_IG_TopTips.pptx"
        },

        {
            title: "Resource 2 title",
            category: "Data, technology, methods",
            description: "Resource 2 description goes here.",
            tags: [
                "Methods"
            ],
            image: "path/to/resource-2-screenshot.png",
            file: "path/to/resource-2-file.pdf"
        },

        {
            title: "Resource 3 title",
            category: "Data, technology, methods",
            description: "Resource 3 description goes here.",
            tags: [

            ],
            image: "path/to/resource-3-screenshot.png",
            file: "path/to/resource-3-file.pdf"
        },

        {
            title: "Resource 4 title",
            category: "Data, technology, methods",
            description: "Resource 4 description goes here.",
            tags: [

            ],
            image: "path/to/resource-4-screenshot.png",
            file: "path/to/resource-4-file.pdf"
        },

        {
            title: "Resource 5 title",
            category: "Patient and public involvement",
            description: "Resource 5 description goes here.",
            tags: [

            ],
            image: "path/to/resource-5-screenshot.png",
            file: "path/to/resource-5-file.pdf"
        },

        {
            title: "Resource 6 title",
            category: "Data, technology, methods",
            description: "Resource 6 description goes here.",
            tags: [
 
            ],
            image: "path/to/resource-6-screenshot.png",
            file: "path/to/resource-6-file.pdf"
        },

        {
            title: "Resource 7 title",
            category: "Data, technology, methods",
            description: "Resource 7 description goes here.",
            tags: [

            ],
            image: "path/to/resource-7-screenshot.png",
            file: "path/to/resource-7-file.pdf"
        },

        {
            title: "Resource 8 title",
            category: "Data, technology, methods",
            description: "Resource 8 description goes here.",
            tags: [

            ],
            image: "path/to/resource-8-screenshot.png",
            file: "path/to/resource-8-file.pdf"
        },

        {
            title: "Resource 9 title",
            category: "Data, technology, methods",
            description: "Resource 9 description goes here.",
            tags: [

            ],
            image: "path/to/resource-9-screenshot.png",
            file: "path/to/resource-9-file.pdf"
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
