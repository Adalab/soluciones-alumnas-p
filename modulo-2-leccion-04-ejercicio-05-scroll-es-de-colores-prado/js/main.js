"use strict";
const text = document.querySelector(".text");

window.addEventListener("scroll", () => {
  if (window.scrollY>250) {
      text.classList.add("red");
  }
  if (window.scrollY<250)  {
      text.classList.add("green");

    }
  }
)

/* si se pone en green ya no cambia a red,..no sé si eso está bien */