"use strict";

// En este ejercicio vamos a crear un control de acceso. Para ello prepararemos una variable y le asignaremos un nombre.
const name = "Analía";

// Posteriormente, si el nombre es el tuyo o el de tu compañera mostraremos el mensaje "Bienvenida, (tu nombre aquí)". Si el nombre es diferente al tuyo deberá mostrar "Lo siento pero el usuario que has introducido no está registrado".

if (name === "Analía") {
  console.log("Bienvenida, " + name);} else {
  console.log("Lo siento pero el usuario que has introducido no está registrado");}
