"use strict";

const button = document.querySelector(".js-button");
const search = document.querySelector(".js-search");
const listElement = document.querySelector(".js-list");

function handleClick() {
  listElement.innerHTML += "";
  const nameSearch = search.value;
  fetch("https://swapi.dev/api/people/")
    .then((response) => response.json())
    .then((result) => {
      const characterlist = result.results;
      console.log(characterlist);
      for (const characterItem of characterlist) {
        console.log(characterItem.name);
        const characterName = characterItem.name;
        if (characterName.includes(nameSearch)) {
          listElement.innerHTML += `<li>Mi nombre es ${characterItem.name} y mi género es ${characterItem.gender} </li>`;
        }
      }
    });
}

button.addEventListener("click", handleClick);
