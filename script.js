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
// =========================
// REPRODUCTOR MUSICAL
// =========================

const songs = [
    "Tusa",
    "Provenza",
    "Mientras Me Curo del Cora",
    "QLONA"
];

let currentSong = 0;
let isPlaying = false;

const songTitle = document.getElementById("song-title");
const playButton = document.getElementById("play-song");
const prevButton = document.getElementById("prev-song");
const nextButton = document.getElementById("next-song");
const progress = document.getElementById("progress");


// Cambiar canción

function updateSong() {

    songTitle.textContent = songs[currentSong];

    progress.style.width = "0%";

}


// Reproducir / pausar

playButton.addEventListener("click", () => {

    isPlaying = !isPlaying;

    if (isPlaying) {

        playButton.textContent = "❚❚";

        startProgress();

    } else {

        playButton.textContent = "▶";

    }

});


// Canción anterior

prevButton.addEventListener("click", () => {

    currentSong--;

    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }

    updateSong();

});


// Canción siguiente

nextButton.addEventListener("click", () => {

    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    updateSong();

});


// Barra de progreso visual

function startProgress() {

    let width = 0;

    const timer = setInterval(() => {

        if (!isPlaying) {

            clearInterval(timer);

            return;

        }

        width += 0.5;

        progress.style.width = width + "%";


        if (width >= 100) {

            clearInterval(timer);

            currentSong++;

            if (currentSong >= songs.length) {
                currentSong = 0;
            }

            updateSong();

            startProgress();

        }

    }, 100);

}
