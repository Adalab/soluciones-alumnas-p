"use strict";
const size = (confg, width, border, padding) => {
if(confg===0) {
    console.log("content-box");
    const total =  width + border + padding;
    return `El ancho del contenido es: ${width}px y el ancho total de la caja es: ${total}px`; 

}
else if(confg===1){
    console.log("border-box");
    const box =  width - (border + padding);
    return `El ancho del contenido es: ${box}px y el ancho total de la caja es: ${width}px`; 
}
};


console.log(size(1, 30, 1, 3))
