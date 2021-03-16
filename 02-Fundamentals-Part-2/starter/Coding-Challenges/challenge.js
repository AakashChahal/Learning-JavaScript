"use strict";
// CHALLENGE #1 //
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const checkWinner = function (avgDolhins, avgKoalas) {
    if (avgDolhins > 2 * avgKoalas)
        console.log(`Dolphins win (${avgDolhins} vs ${avgKoalas})`);
    else if (avgKoalas > 2 * avgDolhins)
        console.log(`Koalas win (${avgKoalas} vs ${avgDolhins})`);
    else console.log("No winner...");
};
checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49));
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));
// END //

// CHALLENGE #2 //
const calcTip = (billValue) =>
    billValue <= 300 && billValue >= 50 ? billValue * 0.15 : billValue * 0.2;
// console.log(calcTip(100));
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log("bills array: ");
console.log(bills);
console.log("tips array: ");
console.log(tips);
console.log("total bills array: ");
console.log(total);
// END //

// CHALLENGE #3 //
const markObj = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    BMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    },
};
markObj.BMI();

const johnObj = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    BMI: function () {
        this.bmi = this.mass / this.height ** 2;
        this.bmi;
    },
};
johnObj.BMI();

if (markObj.bmi > johnObj.bmi) {
    console.log(
        `${markObj.fullName}'s BMI (${markObj.bmi}) is higher than ${johnObj.fullName}'s (${johnObj.bmi})!`
    );
} else if (johnObj.bmi > markObj.bmi) {
    console.log(
        `${johnObj.fullName}'s BMI (${johnObj.bmi}) is higher than ${markObj.fullName}'s (${markObj.bmi})!`
    );
}

// END //
