"use strict";
/* const input = document.querySelector(".js-input");
const text = document.querySelector(".js-text");

input.addEventListener("keyup" , () => {
text.innerHTML=input.value;
}); */


const input = document.querySelector(".js-input");
const text = document.querySelector(".js-text");

input.addEventListener("keyup" , () => {
    const selectedkey = event.currentTarget.value;
text.innerHTML=selectedkey;
});


