const botonArriba = document.querySelector("#volver-arriba");
const anio = document.querySelector("#anio");

function mostrarCancion(nombre) {
  const resultado = document.querySelector("#cancion-elegida");
  resultado.textContent = "Elegiste: " + nombre + " 🎵";
}

function reproducirCancion(idVideo, nombre) {
  const reproductor = document.querySelector("#reproductor-video");
  const resultado = document.querySelector("#cancion-elegida");

  reproductor.src =
    "https://www.youtube.com/embed/" + idVideo + "?autoplay=1";

  resultado.textContent = "Reproduciendo: " + nombre + " 🎵";
}

botonArriba.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    botonArriba.classList.add("mostrar");
  } else {
    botonArriba.classList.remove("mostrar");
  }
});

anio.textContent = new Date().getFullYear();
