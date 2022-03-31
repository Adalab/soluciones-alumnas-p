'use strict';

//-------------10.1 MAP--------------

//EJERCICIO 1. INFLAR LAS NOTAS

// ¡Ya tenemos las notas del examen! Los profes, como somos así, las hemos metido en un array: const marks = [5, 4, 6, 7, 9];. Casi todo el mundo lo ha hecho bastante bien pero... vamos a hacer un poco de trampa de la buena :) Vamos a modificar las notas de todas para añadirles 1 punto, ¿no? Pues usemos nuestro reciente amigo map para crear un nuevo array inflatedMarks con las notas modificadas. Finalmente, mostraremos en la consola las notas modificadas para ver que funciona correctamente. ¡Al lío!

const marks = [5, 4, 6, 7, 9];
const inflatedMarks = marks.map((marks) => marks + 1);
console.log(inflatedMarks);

//EJERCICIO 2. SALUDAR ES DE BUENA EDUCACIÓN

// Estamos creando una aplicación web, y lo primero que queremos hacer es saludar al usuario por su nombre, ¡como es debido! Tenemos un array con el listado de usuarios de nuestra aplicación const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada']; y queremos conseguir otro array con los saludos, por ejemplo, 'Bienvenida Yolanda'. ¿Podríamos usar map para que nos echase una mano?

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const helloUser = names.map((names) => `Bienvenida ${names}`);
console.log(helloUser);
/*Si solo quisiese saludar a Susana*/
console.log(helloUser[2]);

//-----------------10.2 FILTER------------------

// EJERCICIO 1. SOLO LOS PREMIUM

// Seguimos con nuestra app de moda y vamos a utilizar el listado de usuarios del ejercicio 3. Gracias por confiar en nosotros. Pero ahora queremos tener un listado de usuarios (en un array premiumUsers) que solo tenga los usuarios premium. ¿Sabremos hacerlo con filter?

const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false },
];

const premiumUsers = users.filter((users) => users.isPremium === true);

console.log(premiumUsers);

//-------------------10.3 FIND Y FINDINDEX------------

//EJERCICIO 1. ENCUENTRA EL USUARIO

// a) En nuestra aplicación de gestión de usuarios, nos ha llegado una incidencia asociada al PIN 5232. ¿Podrías encontrar el usuario que corresponde a ese PIN para poder contactarle? Usa el método find para conseguirlo.

const usersPin = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

const pinError = usersPin.find((usersPin) => usersPin.pin === 5232);
console.log(pinError);

// b) Resulta que el usuario se ha dado de baja por la incidencia :( ¿Podrías borrarlo del array de usuarios? Usa el método findIndex para encontrar su posición y bórralo usando splice.

const deleteUser = usersPin.findIndex((usersPin) => usersPin.pin === 5232);
console.log(deleteUser); //devuelve posición 3

usersPin.splice(3, 1);
console.log(usersPin); //Devuelve arrays sin el de rocio
