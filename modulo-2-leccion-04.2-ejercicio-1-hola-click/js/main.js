"use strict";

// Crear una página HTML con un párrafo en el que ponga Hola y un botón. Cuando se pulse el botón hay que cambiar ese texto por "Mi primer click, ¡ole yo y la mujer que me parió!

// elemento de HTML
const button = document.querySelector(".alert");

// listener sobre el elemento, con tipo de evento y el código a ejecutarse
button.addEventListener("click", function handleClick() {
  button.textContent = "Mi primer click, ¡ole yo y la mujer que me parió!";
  });