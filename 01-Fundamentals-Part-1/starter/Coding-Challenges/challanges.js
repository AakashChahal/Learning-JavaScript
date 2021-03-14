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
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
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
