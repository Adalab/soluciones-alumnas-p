// 'use strict';

// //EJERCICIO 1. EXPLORAR APIS STAR WARS
// // la URL base del API : https://swapi.py4e.com/api/
// // si necesita autenticación: Swapi is a completely open API.  NO
// // método HTTP que deben usar las peticiones a este API: GET
// // URL para acceder a la info del personaje "Luke Skywalker":https://swapi.py4e.com/api/people/?search=luke
// // URL para acceder a la info de la película "A New Hope": "https://swapi.py4e.com/api/films/1/
// // a qué otros recursos puedo acceder desde el API además de personajes y pelis: Starships, vehicles,species, planets,
// // URL para acceder al listado de personajes, ¿está paginada?: si
// // cómo puedo buscar personajes mediante la URL : https://swapi.py4e.com/api/people/?search=nombrepersonaje
// // cómo puedo hacer que el JSON de una petición se me devuelva traducido a Wookiee: https://swapi.py4e.com/api/planets/1/?format=wookiee

// //EJERCICIO 2. BUSCAR UN PERSONAJE DE STAR WARS

const button = document.querySelector('.js_button');
const search = document.querySelector('.js_nameCharacter');
const list = document.querySelector('.js_list');

let nameCharacter = ''; //Creo variable que se rellenará con los datos de la API

//FUNCIÓN PARA PINTAR EN EL HTML

function renderlist() {
  let liElement = '';
  for (let i = 0; i < nameCharacter.length; i++) {
    //i representa cada elemento del array, en este caso cada posible personaje que contenga lo que escribe en el buscador
    liElement += `<li> Nombre personaje: ${nameCharacter[i].name} Género: ${nameCharacter[i].gender}</li>`; // ${nameCharacter[i].name}, nameCharacters contiene los resulatdos de mi búsqueda, [i] cada elemento del array (personajes) .name, lo que busco del array.
    list.innerHTML = liElement;
  }
}

function handleClickSearch() {
  fetch(`https://swapi.py4e.com/api/people/?search=${search.value}`)
    .then((response) => response.json())

    .then((data) => {
      nameCharacter = data.results;
      renderlist();
    });
}

button.addEventListener('click', handleClickSearch);
