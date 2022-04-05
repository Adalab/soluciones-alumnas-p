"use strict";
const selectName = document.querySelector(".js-select");
const form = document.querySelector(".js-form");
let inputName = document.querySelector(".js-inputName");
let inputSurname = document.querySelector(".js-inputSurname");
let inputTelephone = document.querySelector(".js-inputTelephone");
const usersList = [
  {
    name: "Begoña",
    surname: "Rodríguez",
    telephone: "45923",
  },
  {
    name: "Esther",
    surname: "H",
    telephone: "45678",
  },
  {
    name: "Lucía",
    surname: "Messi",
    telephone: "3456",
  },
];

//creo los nombres en "select" a partir del array
for (const item of usersList) {
  const newItem = document.createElement("option");
  const newContent = document.createTextNode(item.name);
  newItem.appendChild(newContent);
  selectName.appendChild(newItem);
}

//hago que los datos aparezcan
function handleChange(event) {
  for (const item of usersList) {
    const elementSelected = event.target;
    if (elementSelected.value === item.name) {
      inputName.value = item.name;
      inputSurname.value = item.surname;
      inputTelephone.value = item.telephone;
    }
  }
}

selectName.addEventListener("change", handleChange);
