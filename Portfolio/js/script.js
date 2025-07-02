console.log("script.js cargado");
document.addEventListener("DOMContentLoaded", function () {
  const texto = "¡Hola! Soy Delfina von der Becke";
  let i = 0;
  const velocidad = 100;
  const destino = document.getElementById("texto");

  function escribir() {
    if (i < texto.length) {
      destino.textContent += texto.charAt(i);
      i++;
      setTimeout(escribir, velocidad);
    }
  }

  escribir();
});

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.querySelector('.tarjetas-habilidades');
  const btnIzquierda = document.getElementById('scroll-left');
  const btnDerecha = document.getElementById('scroll-right');

  const scrollAmount = 300;

  btnIzquierda.addEventListener('click', () => {
    contenedor.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  btnDerecha.addEventListener('click', () => {
    contenedor.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
});

console.log("email.js cargado correctamente");
document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario-contacto");
    const loader = document.getElementById("loader");
  formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    loader.style.display = "block"; 
    emailjs.sendForm("service_ic53j6f","template_6cpj25j",this)
    .then(function () {
        alert("Mensaje enviado correctamente.");
        formulario.reset();
         loader.style.display = "none";
    }, function (error) {
        alert("Ocurrió un error. Intentalo mas tarde. " + JSON.stringify(error));
         console.error("Error:", error);
        loader.style.display = "none";
      });
  });
});