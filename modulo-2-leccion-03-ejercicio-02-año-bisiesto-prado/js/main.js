"use strict";
let year = 8;
let date ="";

date = year % 4;

switch (date) {
    case 0: console.log("año bisiesto yujuu"); break;
    default: console.log("no es un año bisiesto"); 
}