"use strict";
const text = document.querySelectorAll(".js-text");
for (const item of text) {
  const fontsize = item.offsetHeight;
  console.log(fontsize);
  item.style.fontSize = `${fontsize / 3}px`;
}
