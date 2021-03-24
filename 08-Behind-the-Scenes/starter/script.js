"use strict";

/* scope and scope chain */
// console.log("*** Scope And Scope Chain ***");
// function calcAge(birthYear) {
//     const age = 2037 - birthYear;

//     function printAge() {
//         const output = `${firstName}, You are ${age}, born in ${birthYear}`;
//         console.log(output);

//         if (birthYear <= 1996 && birthYear >= 1981) {
//             var millineal = true;
//             const str = `Oh, and you are an millineal, ${firstName}`;
//             console.log(str);

//             function add(a, b) {
//                 return a + b;
//             }
//             // let output = "NEW OUTPUT";
//         }
//         console.log(millineal);
//         // console.log(output);
//         // console.log(add(3, 4)); will only run without 'strict' mode (not recommended)
//     }
//     printAge();
//     return age;
// }

// const firstName = "Aakash";
// calcAge(1996);

/* Hoisting */
// console.log("*** HOISTING ***");

// variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = "Jonas";
// let job = "teacher";
// let year = 2000;

// // functions
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//     return a + b;
// }

// var addExpr = function (a, b) {
//     return a + b;
// };

// var addArrow = (a, b) => a + b;

// /* this Keyword */
// console.log(this);

// const calcAge2 = function (birthYear) {
//     console.log(2037 - birthYear);
//     console.log(this);
// };
// calcAge2(2000);

// const calcAge2Arrow = (birthYear) => {
//     console.log(2037 - birthYear);
//     console.log(this);
// };
// calcAge2Arrow(2001);

// const newObj = {
//     aVar: 1991,
//     objFunc: function () {
//         console.log(this);
//     },
// };
// newObj.objFunc();

// const newObj2 = {
//     bVar: 2000,
// };
// newObj2.objFunc = newObj.objFunc;
// newObj2.objFunc();

// const newFunc = newObj.objFunc;
// newFunc();

/* Regular Functions vs Arrow functions */
const jonas = {
    firstName: "Jonas",
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);

        // const isMillenial = function () {
        //     console.log(this);
        //     console.log(this.year >= 1981 && this.year <= 1996);
        // };
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial();
    },
    greet: () => console.log(`Hey ${this.firstName}`),
};
jonas.calcAge();

/* arguments Keyword */
const addArgs = function (a, b) {
    console.log(arguments);
    return a + b;
};
addArgs(23, 23, 11, 123);

// this will produce error as arguments keyword is only for regular function expressions
// const addArgsArrow = (a, b) => {
//     console.log(arguments);
//     return a + b;
// };
// addArgsArrow(23, 23);
