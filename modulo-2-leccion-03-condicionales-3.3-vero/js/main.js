// 1. CONTROL DE ACCESOS

let myName = "vero";
myName = "maria"; //Quitar y poner para comprobar que funciona

if (myName === "vero") {
    console.log("Bienvenida, Vero")
} 

else {
    console.log("Lo siento pero el usuario que has introducido no está registrado")
};



// 4. NOTIFICACIONES ARCOIRIS

const colors = document.querySelector(".js-colors");

if (colors.classList.contains("success")) {
    colors.innerHTML = '<h1> CORRECTO </h1> <p> Los datos son correctos </p>'
} 
else if 
    (colors.classList.contains("error")) {
        colors.innerHTML = '<h1> ERROR </h1> <p> Ha surgido un error </p>'
    }

else if
    (colors.classList.contains("warning")) {
    colors.innerHTML = '<h1> AVISO </h1> <p> tenga cuidado </p>'
};


