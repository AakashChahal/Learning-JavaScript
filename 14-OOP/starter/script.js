"use strict";

/* contructor function and new operator */
// const Person = function (firstName, birthYear) {
//     console.log("Before initializing instance properties and methods: ", this);
//     // instance properties
//     this.firstName = firstName;
//     this.birthYear = birthYear;

//     // instance methods
//     // creating functions inside constructor function isn't recommended and should be avoided
//     // this.calcAge = function () {
//     //     console.log(2037 - this.birthYear);
//     // };
//     // console.log("After initializing instance propertiesand methods: ", this);
// };

// const aakash = new Person("Aakash", 2000);
// console.log(aakash);
// /*
//     steps that take place when we call a constructor function
//     // 1. New {} (empty Object) is created
//     // 2. function is called, [this = {}]
//     // 3. {} ['this'] linked to prototype
//     // 4. function automatically returns {} ['this']
// */

// /* Prototypes */
// // we can add methods to constructor function using prototype, and it is a better way to add functions to any constructor function
// Person.prototype.calcAge = function () {
//     console.log(2021 - this.birthYear);
// };

// console.log(Person.prototype);

// console.log(aakash.__proto__);
// console.log(aakash.__proto__ === Person.prototype);

// Person.prototype.species = "Homo Sapien";
// console.log(
//     "firstName is a property of aakash: ",
//     aakash.hasOwnProperty("firstName")
// );
// console.log(
//     "species is a property of aakash: ",
//     aakash.hasOwnProperty("species")
// );

// console.log(aakash.__proto__.__proto__);
// console.log(Object.prototype);

// const h1 = document.querySelector("h1");
// console.dir(h1);

/*
    NOTE :
    Person.prototype => prototype for all the Person objects (example:- aakash)
    i.e, Person.prototype === aakash.__proto__
*/

/* 
    CHALLENGE #1
    Tasks:
    1. Use a constructor function to implement a 'Car'. A car has a 'make' and a 
    'speed' property. The 'speed' property is the current speed of the car in 
    km/h
    2. Implement an 'accelerate' method that will increase the car's speed by 10, 
    and log the new speed to the console
    3. Implement a 'brake' method that will decrease the car's speed by 5, and log 
    the new speed to the console
    4. Create 2 'Car' objects and experiment with calling 'accelerate' and 
    'brake' multiple times on each of them

    Test data:
    § Data car 1: 'BMW' going at 120 km/h
    § Data car 2: 'Mercedes' going at 95 km/h 
*/
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(
        `${this.make}'s new speed after acceleration is ${this.speed} km/h`
    );
};

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(
        `${this.make}'s new speed after applying brake is ${this.speed} km/h`
    );
};

const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

car1.accelerate();
car2.accelerate();
car2.accelerate();
car2.accelerate();
car1.accelerate();
car1.brake();
car1.accelerate();
car1.accelerate();
car2.brake();
car2.accelerate();
car1.accelerate();

/* ES6 Classes */
class Person {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // this is same as adding methods using .prototype for a constructor function
    calcAge() {
        console.log(2021 - this.birthYear);
    }
}

const aakash = new Person("Aakash", 2000);
console.log(aakash);
aakash.calcAge();

console.log(aakash.__proto__ === Person.prototype);

// 1. Classes are not hoisted
// 2. Classes are also first-class citizen
// 3. Classes are always executed in strict mode
