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
console.log("------------------ CHALLENGE #1 ------------------");
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

/* 
    CHALLENGE #2
    Tasks:
    1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
    2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide 
    by 1.6)
    3. Add a setter called 'speedUS' which sets the current speed in mi/h (but 
    converts it to km/h before storing the value, by multiplying the input by 1.6)
    4. Create a new car and experiment with the 'accelerate' and 'brake'
    methods, and with the getter and setter.

    Test data:
    § Data car 1: 'Ford' going at 120 km/h
*/
console.log("------------------ CHALLENGE #2 ------------------");
class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(
            `${this.make}'s new speed after acceleration is ${this.speed} km/h`
        );
    }

    brake() {
        this.speed -= 5;
        console.log(
            `${this.make}'s new speed after applying brake is ${this.speed} km/h`
        );
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

const ford = new CarCl("Ford", 120);
console.log("Current speed in mi/h: ", ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.accelerate();
console.log("updated speed in km/h: ", ford.speed);
ford.speedUS = 50;
console.log("new speed: ", ford.speed);
ford.accelerate();
console.log("updated speed in km/h: ", ford.speed);
console.log("updated speed in mi/h: ", ford.speedUS);

/* 
    CHALLENGE #3
    Tasks:
    1. Use a constructor function to implement an Electric Car (called 'EV') as a child
    "class" of 'Car'. Besides a make and current speed, the 'EV' also has the 
    current battery charge in % ('charge' property)
    2. Implement a 'chargeBattery' method which takes an argument 
    'chargeTo' and sets the battery charge to 'chargeTo'
    3. Implement an 'accelerate' method that will increase the car's speed by 20, 
    and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 
    km/h, with a charge of 22%'
    4. Create an electric car object and experiment with calling 'accelerate', 
    'brake' and 'chargeBattery' (charge to 90%). Notice what happens when 
    you 'accelerate'! Hint: Review the definiton of polymorphism �
    
    Test data:
    § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
*/

console.log("------------------ CHALLENGE #3 ------------------");
const EV = function (make, speed, currBattery) {
    Car.call(this, make, speed);
    this.currBattery = currBattery;
};

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

EV.prototype.chargeBattery = function (chargeTo) {
    this.currBattery = chargeTo;
    console.log(`${this.make}'s battery charged to ${chargeTo}%`);
};

EV.prototype.accelerate = function () {
    this.speed += 20;
    this.currBattery -= 1;
    console.log(
        `${this.make} going at ${this.speed} km/h, with a charge of ${this.currBattery}%`
    );
};

const tesla = new EV("Tesla", 120, 23);

tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);
tesla.accelerate();
