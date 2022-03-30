"use strict";
const adalabers = [
    {
        name: "María",
        age: 39,
        proffesion: "diseñadora",
    },
    {
        name: "Lucía",
        age: 29,
        proffesion: "diseñadora",
    },
    {
        name: "Susana",
        age: 24,
        proffesion: "periodista",
    },
];
function theYoungest {
    for (let i = 0; i < adalabers.length; i++) {
        adalabersage = parseInt(adalabers[i].age);
        
    }
    console.log(`El nombre de la más joven es` );
}

function countAdalabers () {
    console.log(adalabers.length);
    //etc
};
// función tipo arrow
const averageAge= () => {
let totalage = 0;
for (let i = 0; i < adalabers.length; i++) {
    totalage += adalabers [i].age;
    };
const average = totalage/adalabers.length;
console.log(average);
return average;
};

countAdalabers();
averageAge();
