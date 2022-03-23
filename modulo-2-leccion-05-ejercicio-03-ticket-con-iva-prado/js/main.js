"use strict";
function price(a) {
    const vat = a * 0.21;
    const total = a + vat;
    return (`Precio sin IVA: ${a}, IVA: ${vat} Total: ${total}`);
}

console.log(price(10)); º