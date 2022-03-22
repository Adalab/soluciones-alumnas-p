"use strict";

"use strict";

// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.it/300x300";
// avatar que eligió el usuario al registrarse
let userAvatar = "http://www.fillmurray.com/300/300";

// Obtenemos el elemento con el que queremos trabajar usando document.querySelector()
const userAvatar = document.querySelector(".user__avatar");




// Paso a paso:
// Hagamos la lógica para añadir, desde javascript, la imagen userAvatar a la etiqueta de HTML img.
// Ahora vamos a plantear que userAvatar pueda no contener una URL porque, por ejemplo, cuando el usuario se registró no encontraba ninguna foto molona y decidió que la subiría en otro momento. Para ello tenemos que cambiar el contenido de userAvatar a comillas vacías let userAvatar = '';. ¡Ahora no debería verse ninguna imagen en la página!
// Vamos a mejorar nuestro programa para que la ficha de usuario tenga una imagen sí o sí, de manera que:
// si tenemos el avatar del usuario se muestre este.
// si no tenemos datos del avatar del usuario, se muestre el avatar por defecto
// NOTA: En este ejercicio aún no vamos a usar condicionales if/else, tenemos que apoyarnos en el operador OR para asignar al atributo src de la etiqueta img un valor u otro ;)
// NOTA: Cambia manualmente el valor de userAvatar ('http://www.fillmurray.com/300/300' o '') para comprobar que el programa funcionará para los usuarios que añadieron su foto y para los que no lo hicieron.