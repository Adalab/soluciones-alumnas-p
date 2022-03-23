"use strict";
function calculator(a) {
   const result = a % 2;
   // operacion modulo vista en condicionales 3.4
    if(result === 0) {
return `PAR`;
}
else {
        return `IMPAR`;
    }
};


console.log(calculator(2));