"use strict";

// Partiendo del ejemplo anterior, vamos a realizar un temporizador que empiece en 0 y cada 2 segundos se incremente.

let counter = 0;
const time = document.querySelector('.time');

const timer = () => {
  counter++;
  time.innerHTML = counter;
}

setInterval(timer, 2000);


Si quisiéramos que cada 2 segundos se incrementara dos segunodos, la función sería la siguiente:


// const timer = () => {
//   counter = counter + 2;
//   time.innerHTML = counter;
// }

// setInterval(timer, 2000);