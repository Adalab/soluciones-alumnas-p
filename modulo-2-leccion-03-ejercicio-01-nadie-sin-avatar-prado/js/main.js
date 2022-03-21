"use strict";

// avatar por defecto
const DEFAULT_AVATAR = "https://placeimg.com/640/480/any";
// avatar que eligió el usuario al registrarse
/* let userAvatar = "http://www.fillmurray.com/300/300"; */
let userAvatar = "";


document.querySelector(".user__avatar").src =  userAvatar || DEFAULT_AVATAR ;

