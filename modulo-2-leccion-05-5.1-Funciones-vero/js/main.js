"use strict";

// EJERCICIO 1. FUNCIÓN MULTIPLICACIÓN

function multiplication (a , b) {
    return a * b ;
};

const multi1 = multiplication(2, 3);
console.log(multi1);

const multi2 = multiplication(5, 5);
console.log(multi2);

const multi3 = multiplication(10, 10);
console.log(multi3);


/*PASOS: 
1. Declaro la función (FUNCTION), doy nombre a esa funcion (multi) y le paso unos parámetros (a, b)
2. Quiero que la función me devuelva un valor, por lo que pongo RETURN y lo que quiero que me devuelva, en este caso a * b.
3. Creo una constante (const multi1) y le digo utiliza la función multiplication con estos argumentos (2, 3)
4. Plasmalo en la consola, lo que plasma es la constante multi1. */



//EJERCICIO 2. FUNCIÓN MEDIA

function media (a, b, c, d) {
    return (a + b + c + d) / 4;
};

const result1 = media(1, 2, 3, 4);
console.log(result1);

const result2 = media(5, 6, 7, 8);
console.log(result2);



//EJERCICIO 3. TICKET CON IVA

function shop(a) {
    const iva = a * 21 / 100;
    const total = a * (1 + 21 / 100);
    return (`Precio sin IVA: ${a}, IVA: ${iva} Total: ${total}`);
}

console.log(shop(10));



// EJERCICIO 5. QUERYSELECTOR PARA TODAS

function getEl (a) {
    return (document.querySelector(a))
};

const titleEl = getEl (".title");
console.log(titleEl);

const subtitleEl = getEl (".subtitle");
console.log(subtitleEl);


/*No sé si esto es exactamente lo que piden, en la consola si se pinta el elemento seleccionado*/