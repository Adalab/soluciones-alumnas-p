"use strict";

// Con JavaScript, crear un código para mostrar una ventana en nuestro navegador una vez transcurridos 15 segundos que ponga "su sesión ha expirado" (creada usando HTML y CSS).

let counter = 0;
let temp;

const time = document.querySelector(".time");
const session = document.querySelector(".session");

const incrementAndShowCounter = () => {
    counter++;
    time.innerHTML = counter;

    if (counter <= 15){
        session.innerHTML = "Su sesión está activa 🥳";
      }

  if (counter >= 16) {
    clearInterval(temp);
    time.innerHTML = "";
    session.innerHTML = "Su sesión ha expirado 😬";
  }

};

temp = setInterval(incrementAndShowCounter, 1000);