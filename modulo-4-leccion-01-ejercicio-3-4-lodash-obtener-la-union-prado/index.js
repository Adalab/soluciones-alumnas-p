let _ = require("lodash");
const setOne = [1, 2, 3];
const setTwo = [2, 3, 4];

const newSet = _.union(setOne, setTwo);
console.log(newSet);
