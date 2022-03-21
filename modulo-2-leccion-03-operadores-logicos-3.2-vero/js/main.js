'use strict';

//ENUNCIADO: NADIE SIN AVATAR

// 1. Hagamos la lógica para añadir, desde javascript, la imagen userAvatar a la etiqueta de HTML img.

// 2. Ahora vamos a plantear que userAvatar pueda no contener una URL porque, por ejemplo, cuando el usuario se registró no encontraba ninguna foto molona y decidió que la subiría en otro momento. Para ello tenemos que cambiar el contenido de userAvatar a comillas vacías let userAvatar = '';. ¡Ahora no debería verse ninguna imagen en la página!

// 3. Vamos a mejorar nuestro programa para que la ficha de usuario tenga una imagen sí o sí, de manera que:si tenemos el avatar del usuario se muestre este.si no tenemos datos del avatar del usuario, se muestre el avatar por defecto

//-------------------------------------------//


// avatar por defecto
const DEFAULT_AVATAR = "https://placeimg.com/640/480/any";

// avatar que eligió el usuario al registrarse. //Aquí ya se ha definido la constante con valor de imagen

//let userAvatar = "http://www.fillmurray.com/300/300"; 


// 1.

//document.querySelector('.user__avatar').src = userAvatar;


// 2.

let userAvatar = '';  

// 3. 

document.querySelector('.user__avatar').src = userAvatar || DEFAULT_AVATAR;


// Si no meto imagen en userAvatar, meterá la imagen DEFAULT_AVATAR, si hubiese imagen en userAvatar, entonces metería esa. 