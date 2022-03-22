"use strict";

// El primer año de un perro equivale a 15 años de humano

// El segundo año de un perro equivale a nueve años de humano

// A partir del tercero, cada año de perro equivale a 5 años de humano.

const myAge = 36;

if (myAge <=1) {
    console.log(`Mi edad en años de perro es ${myAge*15}`)
  } else if (myAge > 1 && myAge < 3) {
    console.log(`Mi edad en años de perro es ${myAge*9}`)
  } else if (myAge >= 3) {
    console.log(`Mi edad en años de perro es ${myAge*5}`)
  }


// Prueba que el código funciona correctamente con distintos años (1, 2, 12...).