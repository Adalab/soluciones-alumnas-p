'use strict';

//EJERCICIO DE EJEMPLO, EMOJIS
function getEmoji() {
  fetch('https://api.rand.fun/games/rockpaperscissorslizardspock')
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('.js-result').innerHTML = data.result;
    });
}
document.querySelector('.js-emoji').addEventListener('click', getEmoji);

//---------------------11.1---------------------

//EJERCICIO 1. NUMERO ALEATORIO (v)

const randomNumber = document.querySelector('.js-number');
const buttonNumber = document.querySelector('.js-numberButton');

function getNumber() {
  fetch(' https://api.rand.fun/number/integer?lenght=4')
    .then((response) => response.json())
    .then((data) => {
      randomNumber.innerHTML = data.result;
    });
}

buttonNumber.addEventListener('click', getNumber);

//EJERCICIO DE EJEMPLO PERROS

function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector('img');
      img.src = data.message;
      img.alt = 'perro aleatorio';
    });
}
const btn = document.querySelector('.js-dog');
btn.addEventListener('click', getDogImage);

//EJERCICIO 2. CHIHUAHUAS POR TODAS PARTES

// a) Vamos a modificar el ejemplo anterior para que las fotos de nuestra página salgan sólo perros de la raza Chihuahua (consulta la documentación de este API).
// b) Vamos a encapsular toda la lógica para crear una petición en una función. Añadimos un botón a la página con el título 'Enséñame otro Chihuahua' de forma que al pulsarlo se haga otra petición al servidor de una imagen aleatoria y aparezca una nueva imagen de Chihuaua.

const buttonChihuahua = document.querySelector('.js-dogChihuahua');
function getChihuahua() {
  fetch('https://dog.ceo/api/breed/chihuahua/images/random')
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector('img');
      img.src = data.message;
      img.alt = 'Perro raza chihuahua';
    });
}

buttonChihuahua.addEventListener('click', getChihuahua);
