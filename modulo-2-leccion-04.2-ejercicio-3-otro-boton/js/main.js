"use strict";

// Vamos a preparar un botón y una clase de CSS. La clase tiene que cambiar alguno de los estilos del botón (por ejemplo el color de fondo), pero no se la vamos a poner inicialmente. Cada vez que la usuaria pulse el botón hay que:

// añadir la clase si no la tiene

// quitarla la clase si la tiene

// Nota: para facilitar añadir y quitar clases de CSS, os recomendamos usar classList.toggle

// Seleccionar elemento
const button = document.querySelector(".button")

// classList.toggle
button.addEventListener("click", toggle);

function toggle() {
    console.log(button);
    button.classList.toggle("button");
  }
