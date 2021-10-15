"use strict";

const Person = function (firstName, birthYear) {
    console.log("Before initializing instance properties and methods: ", this);
    // instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // instance methods
    // creating functions inside constructor function isn't recommended and should be avoided
    this.calcAge = function () {
        console.log(2037 - this.birthYear);
    };
    console.log("After initializing instance propertiesand methods: ", this);
};

const aakash = new Person("Aakash", 2000);
console.log(aakash);
aakash.calcAge();
/* steps that take place when we call a constructor function */
// 1. New {} (empty Object) is created
// 2. function is called, [this = {}]
// 3. {} linked to prototype
// 4. function automatically returns a new object
