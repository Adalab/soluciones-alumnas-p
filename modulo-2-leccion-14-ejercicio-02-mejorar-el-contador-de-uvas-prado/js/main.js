"use strict";
let counter = 0;
const time = document.querySelector(".time");
const grapes = document.querySelector(".grapes");
let tempNumbers;
let tempGrapes;

const incrementAndShowCounter = () => {
  counter++;
  if (counter < 13) {
    time.innerHTML = counter;
  } else {
    clearInterval(tempNumbers);
  }
};
const paintGrapes = () => {
  if (counter < 13) {
    grapes.innerHTML += `<img class=img
    src="https://preview.free3d.com/img/2016/09/1863129533746513476/elt99yuc-900.jpg"
    alt=""
  />`;
  } else {
    clearInterval(tempGrapes);
  }
};

tempNumbers = setInterval(incrementAndShowCounter, 1000);
tempGrapes = setInterval(paintGrapes, 1000);
