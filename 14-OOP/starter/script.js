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

// Static function for the constructor function
Person.hey = function () {
    console.log("this is a static function");
};

const jonas = new Person("Jonas", 1991);
console.log(jonas);
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

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

Person.prototype.species = "Homo Sapien";
console.log(
    "firstName is a property of jonas: ",
    jonas.hasOwnProperty("firstName")
);
console.log(
    "species is a property of jonas: ",
    jonas.hasOwnProperty("species")
);

console.log(jonas.__proto__.__proto__);
console.log(Object.prototype);

// const h1 = document.querySelector("h1");
// console.dir(h1);

/*
    NOTE :
    Person.prototype => prototype for all the Person objects (example:- aakash)
    i.e, Person.prototype === aakash.__proto__
*/

/* ES6 Classes */
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // this is same as adding methods using .prototype for a constructor function
    calcAge() {
        console.log(2021 - this.birthYear);
    }

    get age() {
        return 2021 - this.birthYear;
    }

    // Set a property that already exists
    set fullName(name) {
        if (name.includes(" ")) this._fullName = name;
        else alert(`${name} is not a full Name`);
    }

    get fullName() {
        return this._fullName;
    }

    // Static functions (these aren't added to .prototype, and can't be used by Objects)
    static hey() {
        console.log("this is a static function");
    }
}

PersonCl.hey();

const aakash = new PersonCl("Aakash Chahal", 2000);
console.log(aakash);
// aakash.calcAge();
// getting age using getter
console.log(aakash.age);
console.log(aakash.fullName);

console.log(aakash.__proto__ === PersonCl.prototype);

// 1. Classes are not hoisted
// 2. Classes are also first-class citizen
// 3. Classes are always executed in strict mode

/* Setters and Getters */
const acc = {
    owner: "Aakash",
    movements: [123, 811, 9000, 150],

    // getter
    get latest() {
        return this.movements.slice(-1).pop();
    },

    // setter
    set latest(mov) {
        this.movements.push(mov);
    },
};
// setters and getters works the same way in classes as well, shown in the above class example

console.log(acc.latest);

acc.latest = 200;
console.log(acc.movements);
console.log(acc.latest);

/* Object.create */
// re-creating the Person class from above
const PersonProto = {
    calcAge() {
        console.log(2021 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const adam = Object.create(PersonProto);
const eve = Object.create(PersonProto);
console.log(adam);
console.log(adam.__proto__);

adam.init("Adam", 1900);
eve.init("Eve", 1900);
console.log(adam, eve);
console.log(adam.firstName, eve.firstName);

/* Implementing Inheritance between "Classes" */
// 1. Constructor functions
const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
};

// linking prototypes
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2001, "Computer Science");
mike.introduce();
mike.calcAge();

console.log(mike.__proto__); // Student.prototype (non-inherited properties)
console.log(mike.__proto__.__proto__); // Student.prototype (all the inherited properties from Person.prototype)
console.log(mike.__proto__.__proto__.__proto__); // Object.prototype
console.log(mike.__proto__.__proto__.__proto__.__proto__); // null

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

// 2. ES6 Classes
class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        super(fullName, birthYear); // constructor of the parent class (ALWAYS NEEDS TO HAPPEN FIRST
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }
}

const martha = new StudentCl("Martha Jones", 2003, "CS");
martha.introduce();
martha.calcAge();

// 3. Object.create
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
};

const jay = Object.create(StudentProto);
jay.init("Jay", 1990, "CS");
console.log(jay);
jay.calcAge();

// Class Example

// Class fields and methods
// public fields, private fields
// public methods, private methods

class Account {
    // public class fields (instances)
    locale = navigator.language;

    // private class fields
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;

        // protected properties
        this.#pin = pin;
        // this._movements = [];
        // this.locale = navigator.language;

        console.log(`Thanks for opening an account ${this.owner}`);
    }

    // public methods
    getMovements() {
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val);
        return this; // to make the method available for chaining
    }

    withdraw(val) {
        this.deposit(-val);
        return this;
    }

    // protected method
    _approveLoan(value) {
        if (value) return true;
    }

    requestLoan(value) {
        if (this._approveLoan(value)) {
            this.deposit(value);
            console.log(`${this.owner}, Your Loan of $${value} is approved`);
        }
        return this;
    }

    // private methods (isn't implemented yet and treated as private fields)
    // #approveLoan(value) {
    //     if (value) return true;
    // }
}

const acc1 = new Account("Aakash", "GBP", 1111);
console.log(acc1);

acc1.deposit(1000);
acc1.withdraw(10);
acc1.requestLoan(2000000);

console.log(acc1);
// console.log(acc1.#movements);
// console.log(acc1.getMovements());
// acc1.#approveLoan(10);

// Chaining
acc1.deposit(500).deposit(2000).withdraw(50).requestLoan(2000000);
console.log(acc1.getMovements());
