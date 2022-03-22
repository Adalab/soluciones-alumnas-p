"use strict";

const button1 = document.querySelector(".js-button1");
const button2 = document.querySelector(".js-button2");


button1.addEventListener("click", () => {
const selectedbutton = event.currentTarget;
selectedbutton.classList.toggle("button");
});

button2.addEventListener("click", () => {
    const selectedbutton = event.currentTarget;
    selectedbutton.classList.toggle("button");
    });