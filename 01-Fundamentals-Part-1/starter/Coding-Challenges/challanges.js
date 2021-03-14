// Challenge - 1 //
// const markWeight = 78;
// const markHeight = 1.69;

// const johnWeight = 92;
// const johnHeight = 1.95;

// const markBMI = markWeight / markHeight ** 2;
// const johnBMI = johnWeight / (johnHeight * johnHeight);

// const markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// const markWeight = 95;
// const markHeight = 1.88;

// const johnWeight = 92;
// const johnHeight = 1.76;

// const markBMI = markWeight / markHeight ** 2;
// const johnBMI = johnWeight / (johnHeight * johnHeight);

// const markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

//  Challenge - 2 //
const markWeight = 95;
const markHeight = 1.88;

const johnWeight = 92;
const johnHeight = 1.76;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / (johnHeight * johnHeight);

const markHigherBMI = markBMI > johnBMI;
if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}

// CHALLENGE -3 //
const avgDolphinsScore = (97 + 112 + 101) / 3;
const avgKoalasScore = (109 + 95 + 106) / 3;

if (avgKoalasScore > avgDolphinsScore && avgKoalasScore >= 100) {
    console.log(
        `Koalas win with a average score of ${avgKoalasScore} over ${avgDolphinsScore} average score of Dolphins`
    );
} else if (avgKoalasScore < avgDolphinsScore && avgDolphinsScore >= 100) {
    console.log(
        `Dolphins win with a average score of ${avgDolphinsScore} over ${avgKoalasScore} average score of Koalas`
    );
} else if (avgDolphinsScore === avgKoalasScore && avgKoalasScore >= 100) {
    console.log(
        `It's a draw both teams at average score of ${avgDolphinsScore}`
    );
} else {
    console.log(`No team won, both team at score less than 100.`);
}

// CHALLENGE - 4 //

// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
const billVal = 430;
let tip = billVal >= 50 && billVal <= 300 ? billVal * 0.15 : billVal * 0.2;

console.log(
    `The bill was ${billVal}, the tip was ${tip}, and the total value ${
        billVal + tip
    }`
);
