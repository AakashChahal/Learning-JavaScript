"use strict";

/* scope and scope chain */
console.log("*** Scope And Scope Chain ***");
function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        const output = `${firstName}, You are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear <= 1996 && birthYear >= 1981) {
            var millineal = true;
            const str = `Oh, and you are an millineal, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
            // let output = "NEW OUTPUT";
        }
        console.log(millineal);
        // console.log(output);
        // console.log(add(3, 4)); will only run without 'strict' mode (not recommended)
    }
    printAge();
    return age;
}

const firstName = "Aakash";
calcAge(1996);

/* Hoisting */
console.log("*** HOISTING ***");

// variables
// console.log(me);
// console.log(job);
// console.log(year);

var me = "Jonas";
let job = "teacher";
let year = 2000;

// functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
    return a + b;
}

var addExpr = function (a, b) {
    return a + b;
};

var addArrow = (a, b) => a + b;
