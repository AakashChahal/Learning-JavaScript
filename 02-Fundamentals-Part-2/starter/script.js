"use strict";

let hasDriverLicense = false;
const passedTest = true;

if (passedTest) hasDriverLicense = true;

console.log(hasDriverLicense);

// ASSIGNMENT #1 //
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

console.log(describeCountry("India", 130, "Delhi"));
console.log(describeCountry("England", 56, "London"));
console.log(describeCountry("Scotland", 5.45, "Edinburg"));
