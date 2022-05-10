let fs = require("fs");

const handleFile = (err, fileContent) => {
  if (err) {
    console.log("Error:", err);
  } else {
    const jsonData = JSON.parse(fileContent);
    console.log("Contenido del fichero en formato objeto:", jsonData);
    const text = JSON.stringify(jsonData);
    console.log("Contenido del fichero en formato texto:", text);
    fs.writeFile("./output.txt", text, handleWriteFile);
  }
};

const handleWriteFile = (err) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("The file has been saved!");
  }
};

fs.readFile("./input-file.json", "utf8", handleFile);
