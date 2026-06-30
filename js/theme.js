/* =================================
   THEME TOGGLE
================================= */

const themeToggle =
document.getElementById("themeToggle");

const body =
document.body;

/* =================================
   LOAD SAVED THEME
================================= */

const savedTheme =
localStorage.getItem("portfolio-theme");

if(savedTheme === "dark"){

    body.classList.add("dark");

    themeToggle.innerHTML =
    '<i class="ri-sun-fill"></i>';

}else{

    themeToggle.innerHTML =
    '<i class="ri-moon-fill"></i>';

}

/* =================================
   TOGGLE THEME
================================= */

themeToggle.addEventListener(
    "click",
    () => {

        body.classList.toggle("dark");

        if(body.classList.contains("dark")){

            localStorage.setItem(
                "portfolio-theme",
                "dark"
            );

            themeToggle.innerHTML =
            '<i class="ri-sun-fill"></i>';

            showThemeToast(
                "Night Mode Enabled 🌙"
            );

        }else{

            localStorage.setItem(
                "portfolio-theme",
                "light"
            );

            themeToggle.innerHTML =
            '<i class="ri-moon-fill"></i>';

            showThemeToast(
                "Dream Mode Enabled 🌸"
            );

        }

    }
);

/* =================================
   THEME TOAST
================================= */

function showThemeToast(message){

    const existingToast =
    document.querySelector(".theme-toast");

    if(existingToast){

        existingToast.remove();

    }

    const toast =
    document.createElement("div");

    toast.className =
    "theme-toast";

    toast.textContent =
    message;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("show");

    },100);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        },500);

    },2500);

}

/* =================================
   SMOOTH THEME TRANSITION
================================= */

const allElements =
document.querySelectorAll("*");

allElements.forEach(element => {

    element.style.transition =
    `
    background-color .4s ease,
    color .4s ease,
    border-color .4s ease,
    box-shadow .4s ease
    `;

});

/* =================================
   UPDATE META THEME COLOR
================================= */

function updateThemeColor(){

    let metaTag =
    document.querySelector(
        'meta[name="theme-color"]'
    );

    if(!metaTag){

        metaTag =
        document.createElement("meta");

        metaTag.setAttribute(
            "name",
            "theme-color"
        );

        document.head.appendChild(
            metaTag
        );

    }

    if(body.classList.contains("dark")){

        metaTag.setAttribute(
            "content",
            "#20172d"
        );

    }else{

        metaTag.setAttribute(
            "content",
            "#ff4fa0"
        );

    }

}

updateThemeColor();

themeToggle.addEventListener(
    "click",
    updateThemeColor
);

/* =================================
   OPTIONAL AUTO THEME
=================================

Uncomment if you want the portfolio
to automatically match user's device
theme on first visit.

-------------------------------------

if(!localStorage.getItem("portfolio-theme")){

    if(
        window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches
    ){

        body.classList.add("dark");

    }

}

================================= */