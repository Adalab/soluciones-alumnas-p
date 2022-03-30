"use strict";
const lostNumbers = [4, 8, 15, 16, 23, 42];
const pair = [];
const three = [];


function bestLostNumber () {
     for (let i = 0; i < lostNumbers.length; i++) {
          if (lostNumbers[i]%2 === 0 ) {
               pair.push(lostNumbers[i]);
          } 
          else if (lostNumbers[i]%3 === 0 ) {
              three.push(lostNumbers[i]);
              console.log(three);
         } 
      }
      
};



bestLostNumber();



const all = pair.concat(three);