"use strict";

let hasDriverLicense = false;
const passedTest = true;

if (passedTest) hasDriverLicense = true;

console.log(hasDriverLicense);

// ASSIGNMENT #1 //
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

console.log(describeCountry("India", 1300, "Delhi"));
console.log(describeCountry("England", 56, "London"));
console.log(describeCountry("Scotland", 5.45, "Edinburg"));
// END //

// ASSIGNMENT #2 //
function percentageOfWorld1(population) {
    return population / 79;
}

const pop1 = percentageOfWorld1(1300);
const pop2 = percentageOfWorld1(56);
const pop3 = percentageOfWorld1(5.45);
console.log("Function Declaration: ");
console.log(pop1, pop2, pop3);

const percentageOfWorld2 = function (population) {
    return population / 79;
};

const pop4 = percentageOfWorld1(1300);
const pop5 = percentageOfWorld1(56);
const pop6 = percentageOfWorld1(5.45);
console.log("Function Expression: ");
console.log(pop4, pop5, pop6);
// END //

// ASSIGNMENT #3 //
const percentageOfWorld3 = (population) => population / 79;
const pop7 = percentageOfWorld1(1300);
const pop8 = percentageOfWorld1(56);
const pop9 = percentageOfWorld1(5.45);
console.log("Arrow Function: ");
console.log(pop7, pop8, pop9);
// END//

// ASSIGNMENT #4 //
const describePopulation = function (country, population) {
    const populationPercentInWorld = percentageOfWorld3(population);
    const description = `${country} has ${population} million people, which is about ${populationPercentInWorld}% of thw world.`;
    return description;
};
console.log(describePopulation("India", 1300));
console.log(describePopulation("England", 56));
console.log(describePopulation("Scotland", 5.45));
// END //
