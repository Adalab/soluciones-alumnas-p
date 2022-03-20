"use strict";



// ----- 2.1 CONSOLA DE JS ----- //

// 2.1 / 2. Dayana mola (añadir una clase desde JS) //

const superWave = document.querySelector(".super-wave");

superWave.classList.add("underline");








// ----- 2.2 TIPOS DE DATOS NUMBER ----- //

// 2.2 /1. El precio de la fruta//

const shop = document.querySelector(".js-Precio-Compra");

const kiwis = 10;
const peras = 6;
const uvas = 2;
const totalShop = kiwis + peras + uvas;

shop.innerHTML +=  totalShop;

console.log(`Total compra: ${totalShop}`);//Lo muestra en la consola//


// 2.2 /2. Págame, ¡tía!//

const price = 128;
const sake = 2;
const friends = 9;
const total = ((price - sake) / 9);
const ana = (total + sake);


//console.log("Las amigas tienen que pagar " + total);
//console.log("Ana tiene que pagar " + ana); Esto y lo de abajo es lo mismo, es más correcto escribirlo como lo de abajo//
console.log(`Ana tiene que pagar ${ana}`);
console.log(`Las amigas de Ana tienen que pagar ${total}`);








// ------ 2.3 TIPOS DE DATOS STRING ------- //

//  2.3 /1. HOLA ADALABER //

const helloAdalaber = document.querySelector(".helloAdalaber");
const partner = "Analía";
const partner2 = "Lola";

helloAdalaber.innerHTML = (`Hola ${partner} y ${partner2}, encantada de conoceros`)


//  2.3 /2. INTERPOLA A LOLA, ARRIBA/ /


//  2.3 /3. LISTA DE PERRETES //

const dina = document.querySelector(".js-dina");
const luna = document.querySelector(".js-luna");
const lana = document.querySelector(".js-lana");

const firstDogImage = 
'<img src="https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg"/>';
const firstDogName = "Dina";

const secondDogImage =
  '<img src="https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg"/>';
const secondDogName = "Luna";

const thirdDogImage =
'<img src="https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg"/>';
const thirdDogName = "Lana";

dina.innerHTML = (`${firstDogImage} ${firstDogName}`);
luna.innerHTML = (`${secondDogImage} ${secondDogName}`);
lana.innerHTML = (`${thirdDogImage} ${thirdDogName}`);


