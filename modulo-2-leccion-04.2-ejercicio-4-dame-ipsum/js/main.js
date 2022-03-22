"use strict";

// Crear una página HTML con un párrafo con lorem ipsum. Al poner el ratón sobre el párrafo, vamos a añadir un nuevo párrafo a la página con lorem ipsum.

// Seleccionar elemento y asignar constante
const p = document.querySelector(".p")

// Event Listener mouseover
p.addEventListener("mouseover", function( event ) {
  console.log("Mouse over test!");p.innerHTML+= `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>`})