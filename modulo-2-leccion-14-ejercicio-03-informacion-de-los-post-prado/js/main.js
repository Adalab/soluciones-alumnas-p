"use strict";
let counter = 0;
const mesaggeElement = document.querySelector(".js-mesagge");

const incrementAndShowCounter = () => {
  counter++;
  if (counter < 61) {
    mesaggeElement.innerHTML = `mensaje escrito hace ${counter} seg`;
  } else if (counter < 3600) {
    mesaggeElement.innerHTML = `mensaje escrito hace ${Math.round(
      counter / 60
    )} minutos`;
  } else if (counter < 86400) {
    mesaggeElement.innerHTML = `mensaje escrito hace ${Math.round(
      counter / 3600
    )} horas`;
  } else {
    mesaggeElement.innerHTML = `mensaje escrito hace ${Math.round(
      counter / 86400
    )} días`;
  }
};

setInterval(incrementAndShowCounter, 1000);
