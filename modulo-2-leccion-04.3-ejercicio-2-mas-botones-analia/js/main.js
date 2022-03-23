"use strict";

// Vamos a crear una página con dos botones y una clase de CSS. Tenemos que ponerle un listener a cada botón y cuando la usuaria pulse un botón el cambio de clase sucederá solamente sobre el botón pulsado.

// Seleccionar elementos de HTML
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");

// listener sobre elementos, con tipo de evento y el código a ejecutarse
  button1.addEventListener('click', function handleClick(event) {
    event.target.classList.add("button");
    button2.classList.remove("button");
  });
  
  button2.addEventListener('click', function handleClick(event) {
    event.target.classList.add("button");
    button1.classList.remove("button");
  });
  