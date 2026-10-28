/* =========================================================
   PORTFOLIO JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuToggle.innerHTML = "✕";
        } else {
            menuToggle.innerHTML = "☰";
        }

    });


    // Close menu after clicking a navigation link

    const navigationLinks =
        navLinks.querySelectorAll("a");

    navigationLinks.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.innerHTML = "☰";

        });

    });

}


/* =========================================================
   SKILL FILTER
========================================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const skillCards =
    document.querySelectorAll(".skill-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class from all buttons

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });


        // Add active class to clicked button

        button.classList.add("active");


        const selectedCategory =
            button.dataset.filter;


        skillCards.forEach(card => {

            const cardCategory =
                card.dataset.category;


            if (
                selectedCategory === "all" ||
                cardCategory === selectedCategory
            ) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    });

});


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const subject =
            document.getElementById("subject").value.trim();

        const message =
            document.getElementById("message").value.trim();


        // Basic validation

        if (!name || !email || !subject || !message) {

            if (formMessage) {

                formMessage.textContent =
                    "Please fill in all the fields.";

            }

            return;

        }


        // Email validation

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            if (formMessage) {

                formMessage.textContent =
                    "Please enter a valid email address.";

            }

            return;

        }


        // Frontend-only success message

        if (formMessage) {

            formMessage.textContent =
                "Thank you! Your message has been prepared successfully.";

        }


        // Reset form

        contactForm.reset();

    });

}


/* =========================================================
   PROJECT LINKS
========================================================= */

const projectLinks =
    document.querySelectorAll(".project-link");


projectLinks.forEach(link => {

    link.addEventListener("click", function (event) {

        event.preventDefault();


        const projectName =
            this.dataset.project;


        if (projectName === "zombiesurvival") {

            const zombieSurvivalURL =
                "https://github.com/bridget-pais/Zombie-Survival.git";

            window.open(
                zombieSurvivalURL,
                "_blank"
            );

        }


        if (projectName === "bloodhelp") {

            const bloodHelpURL =
                "https://YOUR-USERNAME.github.io/bloodhelp/";

            window.open(
                bloodHelpURL,
                "_blank"
            );

        }


        if (projectName === "studyhub") {

            const studyHubURL =
                "https://YOUR-USERNAME.github.io/studyhub/";

            window.open(
                studyHubURL,
                "_blank"
            );

        }

    });

});


/* =========================================================
   SMOOTH SCROLL
========================================================= */

const allAnchorLinks =
    document.querySelectorAll('a[href^="#"]');


allAnchorLinks.forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");


        if (
            targetId &&
            targetId !== "#" &&
            document.querySelector(targetId)
        ) {

            event.preventDefault();


            const targetSection =
                document.querySelector(targetId);


            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

const header =
    document.querySelector(".header");


if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

}


/* =========================================================
   ACTIVE NAVIGATION LINK
========================================================= */

const navItems =
    document.querySelectorAll(".nav-link");

const pageSections =
    document.querySelectorAll("section[id]");


if (navItems.length && pageSections.length) {

    window.addEventListener("scroll", () => {

        let currentSection = "";


        pageSections.forEach(section => {

            const sectionTop =
                section.offsetTop - 160;

            const sectionBottom =
                sectionTop + section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionBottom
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navItems.forEach(link => {

            link.classList.remove("active");


            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        });

    });

}


/* =========================================================
   PROJECT CARD INTERACTION
========================================================= */

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.zIndex = "5";

    });


    card.addEventListener("mouseleave", () => {

        card.style.zIndex = "";

    });


    // Subtle 3D tilt on desktop

    card.addEventListener("mousemove", event => {

        if (window.innerWidth <= 650) {
            return;
        }


        const rect =
            card.getBoundingClientRect();


        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;


        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;


        const rotateX =
            ((y - centerY) / centerY) * -2.5;

        const rotateY =
            ((x - centerX) / centerX) * 2.5;


        card.style.transform =
            `translateY(-10px) perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =========================================================
   SKILL CARD INTERACTION
========================================================= */

const interactiveSkillCards =
    document.querySelectorAll(".skill-card");


interactiveSkillCards.forEach(card => {

    card.addEventListener("mousemove", event => {

        if (window.innerWidth <= 650) {
            return;
        }


        const rect =
            card.getBoundingClientRect();


        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;


        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;


        const rotateX =
            ((y - centerY) / centerY) * -1.5;

        const rotateY =
            ((x - centerX) / centerX) * 1.5;


        card.style.transform =
            `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-7px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".about-container, .skill-card, .project-card, .contact-container, .info-box"
    );


if (revealElements.length) {

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "reveal-visible"
                        );

                        entry.target.classList.remove(
                            "reveal-hidden"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {

        element.classList.add("reveal-hidden");

        revealObserver.observe(element);

    });

}


/* =========================================================
   CONTACT ITEMS
========================================================= */

const contactItems =
    document.querySelectorAll(".contact-item");


contactItems.forEach(item => {

    item.addEventListener("mouseenter", () => {

        item.style.zIndex = "3";

    });


    item.addEventListener("mouseleave", () => {

        item.style.zIndex = "";

    });

});


/* =========================================================
   CURRENT YEAR
========================================================= */

const footerYear =
    document.querySelector(".footer p");


if (footerYear) {

    footerYear.innerHTML =
        `© ${new Date().getFullYear()} Bridget. All Rights Reserved.`;

}