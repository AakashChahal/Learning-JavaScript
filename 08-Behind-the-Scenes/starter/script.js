"use strict";

// scope and scope chain
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

// Hoisting
