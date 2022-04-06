"use strict";
let timer;
const buttonOn = document.querySelector(".js-buttonOn");
const msg = document.querySelector(".msg");

function handleClick() {
  msg.innerHTML = "";
  clearTimeout(timer);
  setTimeout(addMsg, 10000);
}

const addMsg = () => {
  msg.innerHTML = "¿Te has dormido?";
};

buttonOn.addEventListener("click", handleClick);

timer = setTimeout(addMsg, 10000);
