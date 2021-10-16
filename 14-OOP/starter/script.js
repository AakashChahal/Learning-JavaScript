"use strict";

/* contructor function and new operator */
const Person = function (firstName, birthYear) {
    console.log("Before initializing instance properties and methods: ", this);
    // instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // instance methods
    // creating functions inside constructor function isn't recommended and should be avoided
    // this.calcAge = function () {
    //     console.log(2037 - this.birthYear);
    // };
    // console.log("After initializing instance propertiesand methods: ", this);
};

const aakash = new Person("Aakash", 2000);
console.log(aakash);
/* 
    steps that take place when we call a constructor function
    // 1. New {} (empty Object) is created
    // 2. function is called, [this = {}]
    // 3. {} ['this'] linked to prototype
    // 4. function automatically returns {} ['this']
*/

/* Prototypes */
// we can add methods to constructor function using prototype, and it is a better way to add functions to any constructor function
Person.prototype.calcAge = function () {
    console.log(2021 - this.birthYear);
};

console.log(Person.prototype);

console.log(aakash.__proto__);
console.log(aakash.__proto__ === Person.prototype);

Person.prototype.species = "Homo Sapien";
console.log(
    "firstName is a property of aakash: ",
    aakash.hasOwnProperty("firstName")
);
console.log(
    "species is a property of aakash: ",
    aakash.hasOwnProperty("species")
);

console.log(aakash.__proto__.__proto__);
console.log(Object.prototype);

/*
    NOTE :
    Person.prototype => prototype for all the Person objects (example:- aakash)
    i.e, Person.prototype === aakash.__proto__
*/

const h1 = document.querySelector("h1");
console.dir(h1);
