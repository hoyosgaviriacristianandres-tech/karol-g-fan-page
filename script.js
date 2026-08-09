document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MENÚ MÓVIL
    ========================== */

    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });

        navMenu.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
            });

        });

    }


    /* =========================
       REPRODUCTOR
    ========================== */

    const songs = [
        "Tusa",
        "Provenza",
        "Mientras Me Curo del Cora",
        "QLONA"
    ];

    let currentSong = 0;
    let playing = false;
    let progressValue = 0;

    const songTitle = document.getElementById("song-title");
    const playButton = document.getElementById("play-song");
    const prevButton = document.getElementById("prev-song");
    const nextButton = document.getElementById("next-song");
    const progress = document.getElementById("progress");


    function updateSong() {

        if (!songTitle) return;

        songTitle.textContent = songs[currentSong];

        progressValue = 0;

        if (progress) {
            progress.style.width = "0%";
        }

    }


    function togglePlay() {

        playing = !playing;

        if (!playButton) return;

        playButton.textContent = playing ? "❚❚" : "▶";

    }


    function nextSong() {

        currentSong++;

        if (currentSong >= songs.length) {
            currentSong = 0;
        }

        updateSong();

    }


    function previousSong() {

        currentSong--;

        if (currentSong < 0) {
            currentSong = songs.length - 1;
        }

        updateSong();

    }


    if (playButton) {
        playButton.addEventListener("click", togglePlay);
    }

    if (nextButton) {
        nextButton.addEventListener("click", nextSong);
    }

    if (prevButton) {
        prevButton.addEventListener("click", previousSong);
    }


    /* =========================
       BOTONES DE CANCIONES
    ========================== */

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
            }

            updateSong();

            playing = true;

            if (playButton) {
                playButton.textContent = "❚❚";
            }

        });

    });


    /* =========================
       BARRA DE PROGRESO
    ========================== */

    setInterval(() => {

        if (!playing) return;

        progressValue += 0.5;

        if (progressValue >= 100) {

            progressValue = 0;

            nextSong();

        }

        if (progress) {
            progress.style.width =
                `${progressValue}%`;
        }

    }, 100);


    /* =========================
       FORMULARIO
    ========================== */

    const messageForm =
        document.getElementById("message-form");

    const messageResult =
        document.getElementById("message-result");


    if (messageForm) {

        messageForm.addEventListener("submit", event => {

            event.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            const message =
                document.getElementById("message").value.trim();


            if (!name || !message) {

                messageResult.textContent =
                    "Completa tu nombre y tu mensaje.";

                return;

            }


            messageResult.textContent =
                `Gracias, ${name}. Tu mensaje fue recibido 💗`;

            messageForm.reset();

        });

    }


    /* =========================
       ANIMACIÓN AL HACER SCROLL
    ========================== */

    const elements =
        document.querySelectorAll(
            ".song-card, .album-card, .stat-card, .timeline-item, .gallery-item"
        );


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    elements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform = "translateY(25px)";

        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        observer.observe(element);

    });


    /* =========================
       ESTILO PARA ELEMENTOS VISIBLES
    ========================== */

    const style =
        document.createElement("style");

    style.textContent = `

        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }

    `;

    document.head.appendChild(style);


    /* =========================
       INICIALIZACIÓN
    ========================== */

    updateSong();

});
