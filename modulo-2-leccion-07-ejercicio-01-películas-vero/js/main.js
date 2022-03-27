"use strict";

// Ejercicio 1. PELÍCULAS


function workWithMovies () {

  const movies = [
    "In to the wild",
    "El castillo de cristal",
    "Avatar"
];
  
 //Añadir película en posición 3. 

 movies[3] = "Caperucita roja";

 //Modificar película, en posición 1
 movies[1]= "Viajando a granada";

 return movies; 
};

console.log(workWithMovies());
 

// * Para que la función nos devuelva su valor tenemos que poner return, y en este caso nos interesa lo que está dentro de la constante movies. Si no pusiesemos return nos devolvería undefined.