"use strict";

// Hemos organizado una carrera de escobas para que podáis exprimir a fondo vuestra flamante Nimbus 2000. Tenemos los tiempos en este array y nos gustaría conocer la media: ¿nos ayudas a calcularla usando reduce?

const times = [56, 9, 45, 28, 35];

const avg = (times.reduce((acc, number) => acc + number))/times.length;

console.log(avg);



// Same thing broken down into smaller steps

// 1. Add up all numbers

// const acc = times.reduce((acc, number) => acc + number);

// 2. Divide sum by length to get avg

// const avg = acc / times.length;