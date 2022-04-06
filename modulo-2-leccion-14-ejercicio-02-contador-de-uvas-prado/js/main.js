"use strict";
let counter = 0;
const time = document.querySelector(".time");
const grapes = document.querySelector(".grapes");

const incrementAndShowCounter = () => {
  counter++;
  if (counter < 13) {
    time.innerHTML = counter;
  } else {
    time.classList.add("hidden");
  }
};
const paintGrapes = () => {
  if (counter < 13) {
    grapes.innerHTML += `<img class=img
    src="https://preview.free3d.com/img/2016/09/1863129533746513476/elt99yuc-900.jpg"
    alt=""
  />`;
  } else {
    grapes.classList.add("hidden");
  }
};

setInterval(incrementAndShowCounter, 1000);
setInterval(paintGrapes, 1000);
