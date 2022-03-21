"use strict";

let div = document.querySelector(".js-div");

let text = document.querySelector(".js-text");
let title = document.querySelector(".js-title");


if (div.classList.contains("warning")) {text.innerHTML = "<p>Tenga cuidado</p>"} else if (div.classList.contains("error")) {text.innerHTML = "<p>Ha surgido un error</p>"} else if (div.classList.contains("sucess")) {text.innerHTML = "<p>Los datos son correctos</p>"}

/* no sé cambiar la notificación  */