"use strict";

// Crear una página HTML con un input de tipo texto para introducir tu nombre y un botón. Al pinchar sobre el botón, imprimir en la consola el mensaje 'Hola {nombre}', con el nombre que aparece en el input de texto.
// Nota: La etiqueta input no tiene apertura y cierre, por lo tanto técnicamente no tiene contenido. Si para leer y modificar el contenido de una etiqueta con apertura y cierre utilizábamos innerHTML, en el caso de los inputs utilizaremos value.

// elementos de HTML
const input = document.querySelector(".js-input")
const button = document.querySelector(".js-button");

// listener sobre el elemento, con tipo de evento y el código a ejecutarse
button.addEventListener("click", () => {
  console.log(`Hola ${input.value}`);
});