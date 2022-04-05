"use strict";
const numbers = [1, 2, 3];
for (const item of numbers) {
  const newItem = document.createElement("li");
  const newContent = document.createTextNode(item);
  newItem.appendChild(newContent);
  const items = document.querySelector(".items");
  items.appendChild(newItem);
}
