let fs = require("fs");

const myObject = {
  user: "Mari Carmen",
  email: "mari@gmail.com",
  age: 28,
};
const object = JSON.stringify(myObject);

const handleFile = (err) => {
  if (err) {
  } else {
    console.log("il");
  }
};

fs.writeFile("./output.txt", object, handleFile);
