// =========================
// MENÚ PARA CELULAR
// =========================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// Cerrar el menú al seleccionar una opción

const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// =========================
// FORMULARIO
// =========================

const form = document.getElementById("message-form");

const result = document.getElementById("message-result");


form.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (name === "" || message === "") {

        result.textContent =
            "Por favor completa todos los campos.";

        return;

    }


    result.textContent =
        `💗 Gracias, ${name}. Tu mensaje quedó registrado: "${message}"`;


    form.reset();

});


// =========================
// ANIMACIÓN AL APARECER
// =========================

const elements =
    document.querySelectorAll(
        ".music-card, .album-card, .timeline-item, .gallery-item"
    );


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.15
        }

    );


elements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});
