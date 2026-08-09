// =========================
// MENÚ MÓVIL
// =========================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

}


const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

    });

});


// =========================
// FORMULARIO
// =========================

const form = document.getElementById("message-form");
const result = document.getElementById("message-result");

if (form && result) {

    form.addEventListener("submit", function (event) {

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
            `💗 Gracias, ${name}. Tu mensaje quedó registrado.`;

        form.reset();

    });

}


// =========================
// REPRODUCTOR
// =========================

const songs = [
    "Tusa",
    "Provenza",
    "Mientras Me Curo del Cora",
    "QLONA"
];

let currentSong = 0;
let isPlaying = false;
let progressTimer = null;
let progressValue = 0;


const songTitle =
    document.getElementById("song-title");

const playButton =
    document.getElementById("play-song");

const prevButton =
    document.getElementById("prev-song");

const nextButton =
    document.getElementById("next-song");

const progress =
    document.getElementById("progress");


// Comprobar que existen los elementos

if (
    songTitle &&
    playButton &&
    prevButton &&
    nextButton &&
    progress
) {


    // =========================
    // ACTUALIZAR CANCIÓN
    // =========================

    function updateSong() {

        songTitle.textContent =
            songs[currentSong];

        progressValue = 0;

        progress.style.width = "0%";

    }


    // =========================
    // PLAY / PAUSE
    // =========================

    playButton.addEventListener("click", function () {

        isPlaying = !isPlaying;

        if (isPlaying) {

            playButton.textContent = "❚❚";

            startProgress();

        } else {

            playButton.textContent = "▶";

            stopProgress();

        }

    });


    // =========================
    // ANTERIOR
    // =========================

    prevButton.addEventListener("click", function () {

        currentSong--;

        if (currentSong < 0) {

            currentSong =
                songs.length - 1;

        }

        updateSong();

    });


    // =========================
    // SIGUIENTE
    // =========================

    nextButton.addEventListener("click", function () {

        currentSong++;

        if (currentSong >= songs.length) {

            currentSong = 0;

        }

        updateSong();

    });


    // =========================
    // PROGRESO
    // =========================

    function startProgress() {

        stopProgress();

        progressTimer = setInterval(function () {

            progressValue += 1;

            progress.style.width =
                progressValue + "%";


            if (progressValue >= 100) {

                currentSong++;

                if (currentSong >= songs.length) {

                    currentSong = 0;

                }

                updateSong();

            }

        }, 100);

    }


    function stopProgress() {

        if (progressTimer) {

            clearInterval(progressTimer);

            progressTimer = null;

        }

    }

}
