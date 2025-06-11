//Get the current year for copyright
const copyright = document.querySelector(".footer-copyright");
const currentYear = new Date().getFullYear();
copyright.textContent = `© ${currentYear} Samrakshan Sitaula. All rights reserved.`;

//Change navbar on scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar-container");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Reveal elements on scroll
const revealElements = document.querySelectorAll(".project-card, .education-entry");

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.80;
    
    revealElements.forEach(el => {
        const rectTop = el.getBoundingClientRect().top;
        const rectBottom = el.getBoundingClientRect().bottom;
        
        if (rectTop < triggerBottom && rectBottom > 0) {
            el.classList.add("visible");
        } else {
            el.classList.remove("visible");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);

// Update project card links
document.querySelectorAll(".project-card > a").forEach(element =>{
    element.innerHTML = "View Live";
    element.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
    </svg>`;
})

// Toggle mobile menu
const menuToogle = document.querySelector(".menu-toggle");
menuToogle.addEventListener("click", () => {
    const nav = document.querySelector(".navbar-nav");
    nav.classList.toggle("active");
});