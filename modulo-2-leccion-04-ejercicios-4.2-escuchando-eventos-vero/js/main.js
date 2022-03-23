//----- 4.2 ESCUCHANDO EVENTOS ------- //


// 1. HOLA CLICK

const button = document.querySelector(".js-button");
const hello = document.querySelector(".js-hello");

button.addEventListener("click", () => {
    hello.innerHTML = "Mi primer click. ¡Ole yo y la mujer que me parió!"
});

    //PASOS:
    //1. Hacemos variables de los elementos de html con los que vamos a trabajar. 

    //2. Aplicamos addEventListener sobre el elemento al que queremos que escuchar, que sería button, y ponemos el nombre del evento que es click

    //3. Como queremos que el párrafo cambie, hay que coger su variable y poner innerHTML y el texto nuevo. 






// 2. ¿CÓMO TE LLAMAS?

const buttonName = document.querySelector(".js-buttonName");
const nameInput = document.querySelector(".js-name");

buttonName.addEventListener("click", () => {
console.log('Hola ' + nameInput.value);
});

    //PASOS
    //1. Declaro constantes con las que voy a trabajar
    //2. Añado evento listener al button
    //3. Digo que se imprima en la consola la palabra hola + el valor del input que meta la usuaria al escribir. 
    //*para leer o modificar contenido de un input hayq ue poner: nombre-constante.value





// 3. OTRO BOTÓN

const buttonChange = document.querySelector(".js-buttonChange");

buttonChange.addEventListener("click", () => {
    buttonChange.classList.toggle("color");
});

    //PASOS
    //1. Declaro constante con la que voy a trabajar

    //2. Añado evento listener al botón-

    //3. Como quiero que la accion se realice al botón, vuelvo a escribir su constante y pongo .classList.toggle("nombre-clase")

    //** classList.toggle = para añadir y quitar clases de CSS más fácilmente. 




// 4. DAME IPSUM

const ipsum = document.querySelector(".js-ipsum");

ipsum.addEventListener("mouseover", () => {
    ipsum.innerHTML += " FUTURA PROGRAMADORA FRONT-END!!!"
});

    //PASOS
    // 1. Declaro constantes con las que voy a trabajar
    // 2. Añado evento listener al párrafo, en este caso mouseover (cuando paso el ratón por encima ocurre tal...) 
    // 3. La acción se va ha realizar sobre el párrafo por lo que pongo otra vez su constante, innerhtml ya que vamos a modificr su contenido y el nuevo párrado. 
    // ** Fallo cada vez que paso el ratón se escribe de nuevo la frase


    // 5. SCROLL ES DE COLORES

   //PENDIENTE DE HACER