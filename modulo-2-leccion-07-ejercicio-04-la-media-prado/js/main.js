"use strict";
const numbers = [
1, 6, 3324, 234, 2, 234
];
function sum () {
    let amount = 0;
    for (let i = 0; i < numbers.length; i++) {
        amount += numbers[i];
    }
    const total = amount/numbers.length;
    console.log(total);
}

sum();

function prueba hi