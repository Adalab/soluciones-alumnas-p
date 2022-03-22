"use strict";
const text = document.querySelector(".js-text");

text.addEventListener("mouseover", () => {
    console.log("yeah");
    text.innerHTML+= `<p>BIEEEEEEEEEEEEEEEEEEEEEEN Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, nisi maxime. Fugit nam excepturi quaerat dicta maxime libero facilis amet esse nulla maiores sed voluptas, aspernatur provident, cupiditate, ducimus sint.</p>`
})