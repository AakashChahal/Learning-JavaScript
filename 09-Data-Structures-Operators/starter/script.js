"use strict";

// Data needed for a later exercise
const flights =
    "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section

const hours = {
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
};

const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    // Enhanced Object literals (ES6)
    hours,

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderPizza(mainIngredient, ...otherIngredient) {
        return `Pizza order with main ingredient ${mainIngredient} and ${otherIngredient}`;
    },
};

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//     name: restaurantName,
//     openingHours: hours,
//     categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

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
// const {
//     fri: { open, close },
// } = openingHours;
// console.log(open, close);

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

// REST (...)
const [x, y, ...others] = [1, 2, 3, 4, 5, 5, 6, 7, 7, 7, 6]; // rest element should always be present at last
console.log(x, y, others);

const { sat, ...weekdays } = restaurant.hours;
console.log(weekdays);

const add = function (...param) {
    let sum = 0;
    for (let i = 0; i < param.length; i++) sum += param[i];
    console.log(sum);
};

add(2, 3);
add(1, 3, 5, 7, 9);

const nums = [123, 321, 1322];
add(...nums);

restaurant.orderPizza("Onion", "Cheese", "Cucumber", "Olives", "Paneer");
restaurant.orderPizza("Onion");

// Short Circuiting
console.log("----Short circuiting (OR)----");
console.log(3 || "Some String");
console.log("" || "Another String");
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || "" || "Hello" || 3 || 127 || null);

console.log("----Short circuiting (AND)----");
console.log(0 && "a string");
console.log(3 && "Some String");
console.log("" && "Another String");
console.log(true && 0);
console.log(undefined && null);
console.log(undefined && 0 && "" && "Hello" && 3 && 127 && null);

// the nullish coalescing operator (??)
console.log("0 || 10: ", 0 || 10);
console.log("0 ?? 10: ", 0 ?? 10);

// The for...of loop for looping over array
for (const item of newMenu) {
    console.log(item);
}
console.log("Looping over array using array.entries()");
for (const [i, el] of newMenu.entries()) {
    console.log(`${i + 1}: ${el}`);
}

// optional chaining
console.log(restaurant.hours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);
// example for optional chaining
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
    const open = restaurant.hours[day]?.open ?? "not open";
    console.log(open);
}
// checking if method exists using optional chaining
console.log(
    restaurant.orderPizza?.("Onion", "No onion", "not even a piece of onion") ??
        "no such method"
);

console.log(restaurant.orderPasta?.("Onion") ?? "no such method");
// optional chaining on arrays
const users = [
    {
        fName: "Aakash",
        email: "email@noemail.com",
    },
];

console.log(users[0]?.fName ?? "User empty");

// looping objects
// Looping over object keys
console.log(`Object.keys(hours): ${Object.keys(hours)}`);
for (const day of Object.keys(hours)) {
    console.log(day);
}
// looping over object values
console.log(`Object.values(hours): ${Object.values(hours)}`);
for (const value of Object.values(hours)) {
    console.log(value);
}
// looping over both keys and values
console.log(`Object.Entries(hours): ${Object.entries(hours)}`);
for (const [key, { open: value1, close: value2 }] of Object.entries(hours)) {
    console.log(`Key: ${key} and Values: ${value1}, ${value2}`);
}

// Sets
const ordersSet = new Set([
    "Pizza",
    "Burger",
    "Pizza",
    "Pasta",
    "Pizza",
    "Cake",
]);
console.log(ordersSet);
console.log(new Set("Example"));
console.log(new Set());
// set methods
console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.add("BurgerPizza"));
console.log(ordersSet.delete("BurgerPizza"));
console.log(ordersSet);
// accessing set elements
for (const order of ordersSet) {
    console.log(order);
}
ordersSet.clear(); // set method to delete all the elements of a set
console.log(ordersSet);
// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)]; // converting a set to array using spread operator
console.log(staffUnique);

// Maps
const rest = new Map();
rest.set("name", "Dominos");
rest.set(1, "SomePlace, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

rest.set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
    .set("open", 11)
    .set("close", 23)
    .set(true, "We are open")
    .set("we are closed");
// retrieving values
console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get("true"));

const time = 22;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

rest.delete(2);
console.log(rest.size);
// rest.clear();
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
