// =========================
// MENÚ
// =========================

const menuToggle =
    document.getElementById("menu-toggle");

const navMenu =
    document.getElementById("nav-menu");


if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}


document
    .querySelectorAll("#nav-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

        });

    });



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



function updateSong() {

    songTitle.textContent =
        songs[currentSong];

    progressValue = 0;

    progress.style.width = "0%";

}



function stopProgress() {

    if (progressTimer) {

        clearInterval(progressTimer);

        progressTimer = null;

    }

}



function startProgress() {

    stopProgress();

    progressTimer = setInterval(() => {

        if (!isPlaying) {

            stopProgress();

            return;

        }

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



playButton.addEventListener(
    "click",
    () => {

        isPlaying = !isPlaying;


        if (isPlaying) {

            playButton.textContent = "❚❚";

            startProgress();

        } else {

            playButton.textContent = "▶";

            stopProgress();

        }

    }
);



prevButton.addEventListener(
    "click",
    () => {

        currentSong--;

        if (currentSong < 0) {

            currentSong =
                songs.length - 1;

        }

        updateSong();

    }
);



nextButton.addEventListener(
    "click",
    () => {

        currentSong++;

        if (currentSong >= songs.length) {

            currentSong = 0;

        }

        updateSong();

    }
);



// =========================
// TARJETAS DE CANCIONES
// =========================

const songButtons =
    document.querySelectorAll(".song-select");


songButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedSong =
            button.dataset.song;

        const index =
            songs.indexOf(selectedSong);


        if (index !== -1) {

            currentSong = index;

            updateSong();

            isPlaying = true;

            playButton.textContent = "❚❚";

            startProgress();

        }

    });

});



// =========================
// FORMULARIO
// =========================

const form =
    document.getElementById("message-form");

const result =
    document.getElementById("message-result");


if (form) {

    form.addEventListener("submit", event => {

        event.preventDefault();


        const name =
            document
                .getElementById("name")
                .value
                .trim();


        const message =
            document
                .getElementById("message")
                .value
                .trim();


        if (!name || !message) {

            result.textContent =
                "Por favor completa todos los campos.";

            return;

        }


        result.textContent =
            `💗 Gracias, ${name}. Tu mensaje fue registrado.`;


        form.reset();

    });

}



// =========================
// ANIMACIÓN AL APARECER
// =========================

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


document
    .querySelectorAll(
        ".song-card, .album-card, .stat-card, .timeline-item, .gallery-item"
    )
    .forEach(element => {

        observer.observe(element);

    });
