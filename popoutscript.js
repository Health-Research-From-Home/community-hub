
document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       RESOURCE INFORMATION

       All resource content is stored here.
    ========================================= */

    const resources = [

        {
            title: "Wearables, physical activity & sleep: Important new components for mortality prediction",
            category: "Data, technology, methods",
            description: "Resource 1 description goes here.",
            tags: [
                "Wearables",
                "Physical activity",
                "Sleep"
            ],
            image: "Grant Writing Retreat/2026/Screenshot 2026-09-29 112505.png",
            file: "Grant Writing Retreat/2026/11.07.25_HRfH GWR_IG_TopTips.pptx"
        },

        {
            title: "Resource 2 title",
            category: "Data, technology, methods",
            description: "Resource 2 description goes here.",
            tags: [
                "Wearables",
                "Physical activity",
                "Sleep"
            ],
            image: "path/to/resource-2-screenshot.png",
            file: "path/to/resource-2-file.pdf"
        },

        {
            title: "Resource 3 title",
            category: "Data, technology, methods",
            description: "Resource 3 description goes here.",
            tags: [
                "Wearables",
                "Physical activity",
                "Sleep"
            ],
            image: "path/to/resource-3-screenshot.png",
            file: "path/to/resource-3-file.pdf"
        },

        {
            title: "Resource 4 title",
            category: "Data, technology, methods",
            description: "Resource 4 description goes here.",
            tags: [
                "Wearables",
                "Physical activity",
                "Sleep"
            ],
            image: "path/to/resource-4-screenshot.png",
            file: "path/to/resource-4-file.pdf"
        },

        {
            title: "Resource 5 title",
            category: "Patient and public involvement",
            description: "Resource 5 description goes here.",
            tags: [
                "Wearables",
                "Physical activity",
                "Sleep"
            ],
            image: "path/to/resource-5-screenshot.png",
            file: "path/to/resource-5-file.pdf"
        },

        {
            title: "Resource 6 title",
            category: "Data, technology, methods",
            description: "Resource 6 description goes here.",
            tags: [
                "Wearables",
                "Physical activity",
                "Sleep"
            ],
            image: "path/to/resource-6-screenshot.png",
            file: "path/to/resource-6-file.pdf"
        },

        {
            title: "Resource 7 title",
            category: "Data, technology, methods",
            description: "Resource 7 description goes here.",
            tags: [
                "Wearables",
                "Physical activity",
                "Sleep"
            ],
            image: "path/to/resource-7-screenshot.png",
            file: "path/to/resource-7-file.pdf"
        },

        {
            title: "Resource 8 title",
            category: "Data, technology, methods",
            description: "Resource 8 description goes here.",
            tags: [
                "Wearables",
                "Physical activity",
                "Sleep"
            ],
            image: "path/to/resource-8-screenshot.png",
            file: "path/to/resource-8-file.pdf"
        },

        {
            title: "Resource 9 title",
            category: "Data, technology, methods",
            description: "Resource 9 description goes here.",
            tags: [
                "Wearables",
                "Physical activity",
                "Sleep"
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

    const filter = document.getElementById("resourceFilter");


    /* =========================================
       CREATE FILTER OPTIONS
    ========================================= */

    const allTags = [];

    resources.forEach((resource) => {

        resource.tags.forEach((tag) => {

            if (!allTags.includes(tag)) {
                allTags.push(tag);
            }

        });

    });

    allTags.forEach((tag) => {

        const option = document.createElement("option");

        option.value = tag;
        option.textContent = tag;

        filter.appendChild(option);

    });


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
        imageLink.target = "_blank";


        /* Text */

        category.textContent = resource.category;

        title.textContent = resource.title;

        description.textContent = resource.description;


        /* Tags */

        tagsContainer.innerHTML = "";

        resource.tags.forEach((tag) => {

            const tagElement = document.createElement("span");

            tagElement.className = "resource-tag";

            tagElement.textContent = tag;

            tagsContainer.appendChild(tagElement);

        });


        /* Button */

        button.href = resource.file;
        button.target = "_blank";

    }


    /* =========================================
       FILTER RESOURCES
    ========================================= */

    function filterResources() {

        const selectedTag = filter.value;


        tabs.forEach((tab, index) => {

            const resource = resources[index];

            if (!resource) {
                return;
            }


            if (
                selectedTag === "all" ||
                resource.tags.includes(selectedTag)
            ) {

                tab.style.display = "";

            } else {

                tab.style.display = "none";

            }

        });


        /* Show the first matching resource */

        const firstMatchingIndex = resources.findIndex((resource) => {

            return (
                selectedTag === "all" ||
                resource.tags.includes(selectedTag)
            );

        });


        if (firstMatchingIndex !== -1) {
            showResource(firstMatchingIndex);
        }

    }


    /* =========================================
       TAB CLICK EVENTS
    ========================================= */

    tabs.forEach((tab, index) => {

        tab.addEventListener("click", () => {

            showResource(index);

        });

    });


    /* =========================================
       FILTER CHANGE EVENT
    ========================================= */

    filter.addEventListener("change", () => {

        filterResources();

    });


    /* =========================================
       SHOW FIRST RESOURCE ON PAGE LOAD
    ========================================= */

    showResource(0);

});
