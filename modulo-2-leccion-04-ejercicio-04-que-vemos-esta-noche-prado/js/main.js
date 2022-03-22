"use strict";
const button = document.querySelector(".js-button");
const text = document.querySelector(".js-text");


const inception = "Inception";
const theButterFlyEffect = "The butterfly effect";
const eternalSunshineOfTheSM = "Eternal sunshine of the spotless mind";
const blueVelvet = "Blue velvet";
const split = "Split";

button.addEventListener("click", () => {
    console.log("yeah");
    text.innerHTML=inception+theButterFlyEffect + eternalSunshineOfTheSM + blueVelvet + split ;
});



inception.addEventListener("click", () => {
    /* const selectedFilm = event.currentTarget; */
    console.log("ssssf");
    
});

