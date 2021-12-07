// let js = "amazing";
// if (js === "amazing") alert("JavaScript is FUnnnnn!!!!!!!");

// ASSIGNMENT 1 //
const country = "India";
const continent = "Asia";
let population = 1300;

console.log(country, continent, population);
//  End OF ASSIGNMENT -1 //

//  ASSIGNMENT-2 //
const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
// END OF ASSIGNMENT-2 //

// ASSIGNMENT-3 //
language = "Hindi";
// isIsland = true; will give error
// END OF ASSIGNMENT-3 //

// ASSIGNMENT-4 //
const halfPopulation = population / 2;
population += 1;

const finlandPopulation = 6;
const populationMoreThanFinland = population > finlandPopulation;

const avPopulation = 33;
const populationMoreThanAvPopulation = population > avPopulation;

const description =
    country +
    " is in " +
    continent +
    ", and its " +
    population +
    " million people speak " +
    language;

console.log(description);
// END OF ASSIGNMENT-4 //

// ASSIGNMENT-5 //
const newDescription = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(newDescription);
// END OF ASSIGNMENT-4 //

// ASSIGNMENT-5 //
if (population >= avPopulation) {
    let desc = `${country}'s population is above average.`;
    console.log(desc);
} else {
    let desc = `${country}'s population is ${
        avPopulation - population
    } million below average.`;
    console.log(desc);
}
// END OF ASSIGNMENT-5 //

// ASSIGNMENT-6 //
console.log("9" - "5"); // 4
console.log("19" - "13" + "17"); //"617"
console.log("19" - "13" + 17); // 23
console.log("123" < 57); // false
console.log(5 + 6 + "4" + 9 - 4 - 2); //  1143
// END OF ASSIGNMENT-6 //

// ASSIGNMENT - 7 //
// let numNeighbors = prompt(
//     "How many neighbour countries does your country have?"
// );
// if (Number(numNeighbors) === 1) {
//     console.log("Only 1 border!");
// } else if (numNeighbors > 1) {
//     console.log("More than 1 border!");
// } else {
//     console.log("No borders!");
// }
// END OF ASSIGNMENT - 7 //

// ASSIGNMENT - 8 //
if (country && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}
// END OF ASSIGNMENT - 8 //

// ASSIGNMENT - 9 //
switch (language) {
    case "Chinese":
    case "Mandarin":
        console.log("MOST number of native speakers!");
        break;
    case "Spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "English":
        console.log("3rd place");
        break;
    case "Hindi":
        console.log("Number 4");
        break;
    case "Arabic":
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language too :D");
        break;
}
// END OF ASSIGNMENT - 9 //

// ASSIGNMENT- 10 //
population >= avPopulation
    ? console.log(`${country}'s population is above average`)
    : console.log(`${country}'s population is below above average`);

// OR //

// console.log(
//     `${country}'s population is ${
//         population >= avPopulation ? "above" : "below"
//     } average`
// );

// END OF ASSIGNMENT - 10 //
