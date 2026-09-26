
// MENU MOBILE

const menuButton = document.querySelector(".menu-button");

const navigation = document.querySelector(".navigation");

const menuIcon = menuButton.querySelector("i");


// OUVRIR / FERMER LE MENU
menuButton.addEventListener("click", function () {

    navigation.classList.toggle("open");

    // Vérifier si le menu est ouvert

    if (navigation.classList.contains("open")) {

        menuIcon.classList.remove("fa-bars");

        menuIcon.classList.add("fa-xmark");

        menuButton.setAttribute(
            "aria-label",
            "Fermer le menu"
        );

    } else {

        menuIcon.classList.remove("fa-xmark");

        menuIcon.classList.add("fa-bars");

        menuButton.setAttribute(
            "aria-label",
            "Ouvrir le menu"
        );
    }
});

// FERMER LE MENU APRÈS UN CLIC
const navigationLinks = document.querySelectorAll(".navigation a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("open");

        menuIcon.classList.remove("fa-xmark");

        menuIcon.classList.add("fa-bars");

        menuButton.setAttribute(
            "aria-label",
            "Ouvrir le menu"
        );

    });

});

// ANIMATION AU DÉFILEMENT
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(function (element) {
    observer.observe(element);
});


// FORMULAIRE DE CONTACT
const contactForm = document.querySelector(".contact-form");

const formMessage = document.querySelector(".form-message");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    formMessage.textContent =
        "Merci pour votre message ! Nous vous répondrons bientôt.";

    formMessage.classList.add("show");

    contactForm.reset();

});