"use strict";
let counter = 0;
const time = document.querySelector(".time");
const buttonOn = document.querySelector(".js-buttonOn");
const buttonStop = document.querySelector(".js-buttonStop");

let tempNumbers;
let tempGrapes;

const incrementAndShowCounter = () => {
  counter++;
  time.innerHTML = counter;
};

function handleClickOn() {
  tempNumbers = setInterval(incrementAndShowCounter, 1000);
}
function handleClickStop() {
  clearInterval(tempNumbers);
}

buttonOn.addEventListener("click", handleClickOn);
buttonStop.addEventListener("click", handleClickStop);
