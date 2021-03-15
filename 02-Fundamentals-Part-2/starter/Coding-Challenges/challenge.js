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
