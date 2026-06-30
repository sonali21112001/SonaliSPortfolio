/* =================================
   PROJECT FILTER
================================= */

const filterButtons =
document.querySelectorAll(
".filter-btn"
);

const projectCards =
document.querySelectorAll(
".project-card"
);

filterButtons.forEach(button => {

    button.addEventListener(
    "click",

    () => {

        document
        .querySelector(
        ".filter-btn.active"
        )
        ?.classList
        .remove("active");

        button.classList.add(
        "active"
        );

        const filter =
        button.dataset.filter;

        projectCards.forEach(card => {

            if(
                filter === "all" ||
                card.dataset.category === filter
            ){

                card.style.display =
                "block";

            }else{

                card.style.display =
                "none";

            }

        });

    });

});
const projectData = {

book: {

title:
"Book Management System",

description:
"Full stack application with authentication, CRUD operations, MongoDB integration and responsive UI.",

tech:
"React, MongoDB, Express, Node.js"

},

ecommerce: {

title:
"E-Commerce Management System",

description:
"Inventory management, product tracking, order processing and admin dashboard.",

tech:
"Python, Django, SQLite"

}

};
const modal =
document.getElementById(
"projectModal"
);

const modalTitle =
document.getElementById(
"modalTitle"
);

const modalDescription =
document.getElementById(
"modalDescription"
);

const modalTech =
document.getElementById(
"modalTech"
);

document
.querySelectorAll(
".project-view-btn"
)
.forEach(button => {

button.addEventListener(
"click",

() => {

const project =
projectData[
button.dataset.project
];

modalTitle.textContent =
project.title;

modalDescription.textContent =
project.description;

modalTech.textContent =
project.tech;

modal.classList.add(
"active"
);

});

});

document
.getElementById(
"closeProjectModal"
)
.addEventListener(
"click",

() => {

modal.classList.remove(
"active"
);

});