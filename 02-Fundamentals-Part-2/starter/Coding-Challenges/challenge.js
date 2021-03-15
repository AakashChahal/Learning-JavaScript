// CHALLENGE #1 //
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const checkWinner = function (avgDolhins, avgKoalas) {
    if (avgDolhins > avgKoalas)
        console.log(`Dolphins win (${avgDolhins} vs ${avgKoalas})`);
    else console.log(`Koalas win (${avgKoalas} vs ${avgDolhins})`);
};
checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49));
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));
