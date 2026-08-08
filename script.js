const botonArriba = document.querySelector("#volver-arriba");
const formulario = document.querySelector("#formulario-fan");
const nombreFan = document.querySelector("#nombre-fan");
const respuestaFan = document.querySelector("#respuesta-fan");
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

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  respuestaFan.textContent =
    "¡Gracias por tu mensaje, " + nombreFan.value + "! ✨";

  nombreFan.value = "";
});

anio.textContent = new Date().getFullYear();