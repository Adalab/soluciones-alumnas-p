"use strict";
const select = document.querySelector(".js-select");
const option = document.querySelectorAll(".js-option");
const image = document.querySelectorAll(".js-img");

function handleChange(event) {
  const elementSelected = event.target;
  if (elementSelected.value === "madrid") {
    console.log("he elegido madrid");
    for (const item of image) {
      item.src =
        " https://www.easyjet.com/ejcms/cache/medialibrary/Images/JSS/Destinations/Hero/Spain_Madrid_3840x2160.jpg?mw=1920&hash=E8335D1B8641F2150C395A3EC48BA45CC0B5BA6D";
    }
  } else if (elementSelected.value === "paris") {
    console.log("he elegido paris");
    for (const item of image) {
      item.src =
        "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900";
    }
  } else if (elementSelected.value === "ny") {
    console.log("he elegido ny");
    for (const item of image) {
      item.src =
        "https://mindfultravelbysara.com/wp-content/uploads/2015/05/nueva-york-imprescindibl.jpg";
    }
  }
}

select.addEventListener("change", handleChange);
