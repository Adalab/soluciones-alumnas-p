'use strict';

// 2. API de usuarios de GitHub
// Ahora vamos a explorar un nuevo API: el API de usuarios de GitHub. La URL de este API es https://api.github.com/users/{username}, donde {username} es el nombre del usuario en GitHub. Por ejemplo, aquí tenéis la URL para obtener información del usuario de Isra https://api.github.com/users/gootyfer. Si ponéis esta URL en una nueva pestaña del navegador podréis observar qué datos nos devuelve el API.
// Vamos a crear una página en la que haya un input de texto y un botón de buscar. El usuario escribirá en el input un nombre de usuario de GitHub. Prepararemos una función que se ejecute cuando se pulse el botón buscar y que contenga una petición al API para obtener información de ese usuario y así mostrarla en nuestra página:
// nombre
// número de repositorios
// avatar (imagen)

//EJERCICIO 2. API USUARIOS DE GITHUB

// 1. Traer html x
// 2. Evento listener
// 3. Funcion (fetch)

const userGithub = document.querySelector('.js_userGithub'); //Input usuario de github, necesito el valor que escriba la usuaria
const buttonSearch = document.querySelector('.js_buttonSearch');

function handleUserGithub() {
  fetch(`https://api.github.com/users/${userGithub.value}`) //pongo la constnate del input, y como necesito su valor el .value
    .then((response) => response.json())
    .then((data) => {
      const userName = document.querySelector('.js_name');
      userName.innerHTML = data.name;
      const userPhoto = document.querySelector('.js_image');
      userPhoto.src = data.avatar_url;
      const userRepos = document.querySelector('.js_repos');
      userRepos.innerHTML = data.public_repos;
      const userFollowers = document.querySelector('.js_followers');
      userFollowers.innerHTML = data.followers;
    });
}

buttonSearch.addEventListener('click', handleUserGithub);
