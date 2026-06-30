/* =================================
   AOS INITIALIZE
================================= */

AOS.init({
    duration: 1000,
    once: true
});

/* =================================
   MOBILE MENU
================================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuBtn.innerHTML =
        '<i class="ri-close-line"></i>';
    }else{
        menuBtn.innerHTML =
        '<i class="ri-menu-line"></i>';
    }

});

/* =================================
   CLOSE MENU AFTER CLICK
================================= */

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML =
        '<i class="ri-menu-line"></i>';

    });

});

/* =================================
   TYPING EFFECT
================================= */

const typingElement =
document.getElementById("typing-text");

const roles = [

    "MCA Student",
    "Software Engineer",
    "Web Developer",
    "AI-Powered Creator"

];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const currentRole =
    roles[roleIndex];

    if(!deleting){

        typingElement.textContent =
        currentRole.substring(
            0,
            charIndex + 1
        );

        charIndex++;

        if(charIndex === currentRole.length){

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;
        }

    }else{

        typingElement.textContent =
        currentRole.substring(
            0,
            charIndex - 1
        );

        charIndex--;

        if(charIndex === 0){

            deleting = false;

            roleIndex++;

            if(roleIndex >= roles.length){
                roleIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 60 : 120
    );

}

typeEffect();

/* =================================
   SCROLL PROGRESS BAR
================================= */

const progressBar =
document.getElementById("progress-bar");

window.addEventListener(
    "scroll",
    () => {

        const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

        const progress =
        (window.scrollY / totalHeight) * 100;

        progressBar.style.width =
        progress + "%";

    }
);

/* =================================
   ACTIVE NAVIGATION
================================= */

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 200;

        const sectionHeight =
        section.clientHeight;

        if(window.scrollY >= sectionTop){

            current =
            section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href") ===
            `#${current}`
        ){

            link.classList.add("active");

        }

    });

});

/* =================================
   MOTIVATION GENERATOR
================================= */

const motivationBtn =
document.getElementById("motivationBtn");

const quoteBox =
document.getElementById("quote-box");

const quotes = [

"Every expert developer was once a beginner.",

"Small progress every day becomes big results.",

"Debugging is where learning happens.",

"Build projects. Gain confidence.",

"Your next project could change your career.",

"Consistency beats talent when talent stops working.",

"Learn. Build. Improve. Repeat.",

"AI won't replace developers. Developers using AI will.",

"Code with purpose, not just syntax.",

"Great software starts with curiosity."

];

if(motivationBtn){

    motivationBtn.addEventListener(
        "click",
        () => {

            const randomQuote =
            quotes[
                Math.floor(
                    Math.random() *
                    quotes.length
                )
            ];

            quoteBox.innerHTML =
            randomQuote;

            quoteBox.animate(
                [
                    {
                        opacity:0,
                        transform:
                        "translateY(20px)"
                    },
                    {
                        opacity:1,
                        transform:
                        "translateY(0)"
                    }
                ],
                {
                    duration:500
                }
            );

        }
    );

}

/* =================================
   SCROLL REVEAL
================================= */

const revealElements =
document.querySelectorAll(

    ".skill-card," +
    ".project-card," +
    ".ai-card," +
    ".timeline-item"

);

const observer =
new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add(
                    "active"
                );

            }

        });

    },

    {
        threshold:0.2
    }

);

revealElements.forEach(el => {

    el.classList.add("fade-up");

    observer.observe(el);

});

/* =================================
   PROJECT CARD TILT
================================= */

const projectCards =
document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        e => {

            const rect =
            card.getBoundingClientRect();

            const x =
            e.clientX - rect.left;

            const y =
            e.clientY - rect.top;

            const rotateX =
            ((y / rect.height) - 0.5) * 10;

            const rotateY =
            ((x / rect.width) - 0.5) * -10;

            card.style.transform =
            `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.03)
            `;

        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";

        }
    );

});

/* =================================
   CONTACT FORM DEMO
================================= */

const contactForm =
document.querySelector(".contact-form");

if(contactForm){

    contactForm.addEventListener(
        "submit",
        e => {

            e.preventDefault();

            alert(
                "Thank you! Your message has been received."
            );

            contactForm.reset();

        }
    );

}

/* =================================
   SMOOTH BUTTON EFFECTS
================================= */

const buttons =
document.querySelectorAll(

    ".btn, button"

);

buttons.forEach(btn => {

    btn.addEventListener(
        "mouseenter",
        () => {

            btn.style.transition =
            ".3s ease";

        }
    );

});

/* =================================
   PAGE LOADER REMOVAL
================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );

    }
);
const counters =
document.querySelectorAll(".counter");

const counterObserver =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter =
            entry.target;

            const target =
            +counter.dataset.target;

            let count = 0;

            const update = () => {

                const increment =
                target / 60;

                if(count < target){

                    count += increment;

                    counter.textContent =
                    Math.ceil(count);

                    requestAnimationFrame(update);

                }else{

                    counter.textContent =
                    target;

                }

            };

            update();

        }

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

fetch(
'https://api.github.com/users/sonali21112001'
)
.then(res => res.json())
.then(data => {

    document.getElementById(
        'repoCount'
    ).textContent =
    data.public_repos;

    document.getElementById(
        'followers'
    ).textContent =
    data.followers;

    document.getElementById(
        'following'
    ).textContent =
    data.following;

});
const openResume =
document.getElementById(
    "openResume"
);

const closeResume =
document.getElementById(
    "closeResume"
);

const resumeModal =
document.getElementById(
    "resumeModal"
);

openResume.addEventListener(
    "click",
    () => {

        resumeModal.classList.add(
            "active"
        );

    }
);

closeResume.addEventListener(
    "click",
    () => {

        resumeModal.classList.remove(
            "active"
        );

    }
);
