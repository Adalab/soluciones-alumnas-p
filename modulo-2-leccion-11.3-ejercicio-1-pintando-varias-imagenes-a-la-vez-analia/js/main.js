"use strict";

// Partiendo el ejemplo anterior, vamos a modificarlo para que en lugar de pedir 2 imágenes en paralelo pida 10, y el resultado sólo se pinte en la pantalla cuando las 10 imágenes hayan llegado del servidor. Ahora sí que se nota el efecto de que se pintan todas a la vez, ¿verdad? Vamos a probar también con 25 imágenes, para ver bien este efecto.

const createPromise = () =>
  fetch('https://dog.ceo/api/breeds/image/random').then((response) =>
    response.json()
  );

function getBreedImages() {
  const promises = [createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise()];
  Promise.all(promises).then((responses) => {
    for (let i = 0; i < responses.length; i++) {
      const img = document.querySelector('.dog' + (i + 1));
      img.src = responses[i].message;
    }
  });
}
const btn = document.querySelector('.js-btn');
btn.addEventListener('click', getBreedImages);