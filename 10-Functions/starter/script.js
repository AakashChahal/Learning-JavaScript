"use strict";

const bookings = [];

const createBooking = function (
    flightNum,
    numPassengers = 1,
    price = 199 * numPassengers
) {
    const booking = {
        flightNum,
        numPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 298);
createBooking("LH123", 2);
createBooking("LH123", 5);

createBooking("LH123", undefined, 300); // way to skip a parameter

const flight = "LH321";
const jonas = {
    name: "Jonas Something",
    passport: 247837238210,
};

// const checkIn = function (flightNum, passenger) {
//     flightNum = "LH999";
//     passenger.name = "Mr." + passenger.name;

//     if (passenger.passport === 247837238210) {
//         alert("Check In");
//     } else {
//         alert("Wrong Passport");
//     }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

const oneWord = function (str) {
    return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(" ");
    return [first.toUpperCase(), ...others].join(" ");
};

// Example of an Higer-Order function
const transformer = function (str, fn) {
    console.log(`Original String: ${str}`);
    console.log(`Transformed String: ${fn(str)}`);
    console.log(`Transformed by the function: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

// JS uses callback functions all the time
// document.addEventListener("click", high5);
function high5() {
    console.log("👋");
}
["Jonas", "Aakash", "Bobby", "Another"].forEach(high5);

// function returning functions
// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     };
// };

const greet = (greeting) => (name) => {
    console.log(`${greeting} ${name}`);
};

const greeter = greet("Hey");
greeter("Aakash");
greeter("Jonas");

// The call and apply methods
const lufthansa = {
    airline: "Lufthansa",
    iataCode: "LH",
    bookings: [],
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};

lufthansa.book(239, "Person One");
lufthansa.book(932, "Person Two");
console.log(lufthansa.bookings);

const eurowings = {
    airline: "Eurowings",
    iataCode: "EW",
    bookings: [],
};

const book = lufthansa.book;

// The call method
book.call(eurowings, 239, "Person Three");
// console.log(eurowings);
book.call(lufthansa, 901, "Person Four");

// The apply method
book.apply(eurowings, [323, "Person Five"]);

// Bind method
const bookEW = book.bind(eurowings);
bookEW(67, "New Person");
const bookLH = book.bind(lufthansa);
bookLH(567, "Neo");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Aakash");

// with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
};

document
    .querySelector(".buy")
    .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(29));

const addTaxes = (rate) => (value) => value + value * rate;
const addVAT2 = addTaxes(0.23);
console.log(addVAT2(100));
console.log(addVAT2(29));

// IIFE: Immediately Invoked Function Expression
(function () {
    console.log("This will only run once");
})();
(() => console.log("This will also only run once"))();

// Closures
const secureBooking = function () {
    let passengersCount = 0;
    return function () {
        passengersCount++;
        console.log(`${passengersCount} passengers`);
    };
};

const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);

// MORE closure examples
// Example 1
let f;
const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    };
};

const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    };
};

g();
f();
console.dir(f);

h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(function () {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
