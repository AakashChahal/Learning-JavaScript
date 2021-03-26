"use strict";

// Data needed for a later exercise
const flights =
    "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
};

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
    name: restaurantName,
    openingHours: hours,
    categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 311, b: 2212, c: 19 };
({ a, b } = obj);
const { c } = obj;
console.log(a, b, c);

// Nested objects
const {
    fri: { open, close },
} = openingHours;
console.log(open, close);

/* SPREAD OPERATOR */
const arr = [7, 8, 9];
const badArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Burger", "Hummus"];
console.log(newMenu);

// copying array using spread operator
const menuCopy = [...restaurant.mainMenu];
console.log(menuCopy);
const completeMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(completeMenu);

const str = "Aakash";
const letters = [...str, " ", "!"];
console.log(letters);

function whatAreMyArguments(a, b, c) {
    console.log("a: ", a);
    console.log("b: ", b);
    console.log("c: ", c);
}

const inputArray = [123, 421, 3221];
whatAreMyArguments(inputArray); //no the output we would want
whatAreMyArguments(inputArray[0], inputArray[1], inputArray[2]); // not practical
whatAreMyArguments(...inputArray); // not practical

// spread operators for objects
const newRestaurant = { FoundedIn: 1999, ...restaurant, founder: "Aakash" };
console.log(newRestaurant);
const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Another Named Restaurant";
console.log(restaurant);
console.log(restaurantCopy);
