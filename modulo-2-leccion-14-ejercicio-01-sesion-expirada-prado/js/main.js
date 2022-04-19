"use strict";
const message = document.querySelector(".js-message");

const countDown = () => {
  message.classList.remove("hidden");
};

temp = setTimeout(countDown, 15000);
