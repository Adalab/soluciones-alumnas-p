"use strict";

// Scroll es de colores
// Cambiar el color de fondo de la página cuando se haga scroll. Para ello tenemos que:
// Añadir un div con suficiente texto dentro para que haya scroll. Podéis usar el siguiente comando de emmet para hacerlo p*50>lorem.
// Preparar classes para cambiar el color de fondo del div.
// Escuchar el evento scroll sobre la ventana window.
// Cuando la posición del scroll vertical supere 250 píxeles poner un color de fondo, cuando sea inferior a 250 píxeles poner otro.

// Nota: window.scrollY nos devuelve la posición del scroll vertical.

const div = document.querySelector('.div')

window.addEventListener("scroll", () => {
  if (window.scrollY>250) {
      div.classList.add("pink");
      div.classList.remove("blue");

  } else  {
      div.classList.add("blue");
      div.classList.remove("pink");
    }
  }
)


// const [red, green, blue] = [69, 111, 225]

// window.addEventListener('scroll', () => {
//   let y = 1 + (window.scrollY || window.pageYOffset) / 250
//   y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
//   const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
//   div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
// })
