document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       RESOURCE INFORMATION
    ========================================= */

    const resources = [
        {
            title: "Wearables, physical activity & sleep: Important new components for mortality prediction",

            category: "Data, technology, methods",
            
            tags: [
    "Data",
    "Technology",
    "Methods"
],

            description:
                "Placeholder description.",


            image: "Grant Writing Retreat/2026/Screenshot 2026-09-29 112505.png",

            // Actual PowerPoint file
            file: "Grant Writing Retreat/2026/11.07.25_HRfH GWR_IG_TopTips.pptx"
        },

        {
            title: "Consumer health measures from smartphones and wearables for population health research",

            category: "Data, technology, methods",

            description:
                "Placeholder description for the consumer health measures resource.",

            // Replace with your screenshot
            image: "images/resource-2-thumbnail.jpg",

            // Replace with your actual resource
            file: "resources/resource-2.pdf"
        },

        {
            title: "New schema for smartphone and wearables specific metadata fields to enable better discoverability of existing S&W datasets for research",

            category: "Data, technology, methods",

            description:
                "Placeholder description for the smartphone and wearables metadata schema resource.",

            // Replace with your screenshot
            image: "images/resource-3-thumbnail.jpg",

            // Replace with your actual resource
            file: "resources/resource-3.pdf"
        },

        {
            title: "Beyond Steps Unlocking Multimodal Health Discovery with the World’s Largest Wearable Dataset",

            category: "Data, technology, methods",

            description:
                "Placeholder description for the Beyond Steps resource.",

            // Replace with your screenshot
            image: "images/resource-4-thumbnail.jpg",

            // Replace with your actual resource
            file: "resources/resource-4.pdf"
        },

        {
            title: "Involving patients and the public and missing data",

            category: "Patient and public involvement",

            description:
                "Placeholder description for the patient and public involvement resource.",

            // Replace with your screenshot
            image: "images/resource-5-thumbnail.jpg",

            // Replace with your actual resource
            file: "resources/resource-5.pdf"
        }
    ];


    /* =========================================
       FIND THE HTML ELEMENTS
    ========================================= */

    const tabs = document.querySelectorAll(".resource-tab");

    const image = document.getElementById("resourceImage");

    const imageLink = document.getElementById("resourceImageLink");

    const category = document.getElementById("resourceCategory");

    const title = document.getElementById("resourceTitle");

    const description = document.getElementById("resourceDescription");

    const button = document.getElementById("resourceButton");


    /* =========================================
       SHOW A RESOURCE
    ========================================= */

    function showResource(index) {

        const resource = resources[index];

        if (!resource) {
            console.error("Resource not found:", index);
            return;
        }


        /* -----------------------------------------
           Change active tab
        ----------------------------------------- */

        tabs.forEach((tab) => {
            tab.classList.remove("active");
        });

        if (tabs[index]) {
            tabs[index].classList.add("active");
        }


        /* -----------------------------------------
           Change thumbnail
        ----------------------------------------- */

        image.src = resource.image;

        image.alt = resource.title;


        /* -----------------------------------------
           Make thumbnail clickable
           Opens the actual PDF/PowerPoint
        ----------------------------------------- */

        imageLink.href = resource.file;

        imageLink.target = "_blank";


        /* -----------------------------------------
           Change category
        ----------------------------------------- */

        category.textContent = resource.category;


        /* -----------------------------------------
           Change title
        ----------------------------------------- */

        title.textContent = resource.title;


        /* -----------------------------------------
           Change description
        ----------------------------------------- */

        description.textContent = resource.description;


        /* -----------------------------------------
           Change VIEW RESOURCE button
        ----------------------------------------- */

        button.href = resource.file;

        button.target = "_blank";
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
       LOAD FIRST RESOURCE WHEN PAGE OPENS
    ========================================= */

    showResource(0);

});