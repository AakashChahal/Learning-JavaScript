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
document.addEventListener("click", high5);
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
