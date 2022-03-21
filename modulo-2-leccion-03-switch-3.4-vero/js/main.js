'user strict';

// 1. RECOMENDAR RECETAS

let ingredient = "";

ingredient = "merluza"; //cambair ingredient para ver que funciona

switch (ingredient) {
    case "pollo":
        console.log("Tienes pollo, te recomiendo filete con patatas")
        break;
    case "merluza":
        console.log("Tienes merluza, te recomiendo comer merluza en salsa verde")
        break;
    case "espinacas":
        console.log("Tienes espinacas, te recomiendo comer espinacas rehogadas")
        break;
    default:
        console.log("No tienes nada en la nevera, vete a la compra!!")
};
