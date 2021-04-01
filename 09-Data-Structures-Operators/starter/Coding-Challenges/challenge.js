/* Coding Challenge #1 */
const game = {
    team1: "Bayern Munich",
    team2: "Borrussia Dortmund",
    players: [
        [
            "Neuer",
            "Pavard",
            "Martinez",
            "Alaba",
            "Davies",
            "Kimmich",
            "Goretzka",
            "Coman",
            "Muller",
            "Gnarby",
            "Lewandowski",
        ],
        [
            "Burki",
            "Schulz",
            "Hummels",
            "Akanji",
            "Hakimi",
            "Weigl",
            "Witsel",
            "Hazard",
            "Brandt",
            "Sancho",
            "Gotze",
        ],
    ],
    score: "4:0",
    scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
    date: "Nov 9th, 2037",
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log("goal keeper: ", gk);
console.log("field players: ", fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

const { team1, x: draw, team2 } = game.odds;
console.log(`Team1: ${team1}, draw: ${draw}, Team2: ${team2}`);

const printGoals = function (...players) {
    console.log(players);
    console.log(`${players.length} total goals`);
};
printGoals("Davis", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

console.log((team1 > team2 && "Team 1 will win") || "Team 2 will win");
console.log(
    "------------------------------------------------------------------"
);

/* Coding Challenge #2 */
// task #1
for (const [i, player] of game.scored.entries()) {
    console.log(`Goal ${i + 1}: ${player}`);
}
// task #2
const odds = Object.values(game.odds);
let avg = 0;
for (const odd of odds) avg += odd;
avg /= odds.length;
console.log(`Average odds: ${avg}`);

// task #3
for (const [res, odd] of Object.entries(game.odds)) {
    console.log(
        `Odd of ${
            res === "x" ? `draw: ${odd}` : `victory ${game[res]}: ${odd}`
        }`
    );
}

// task #4
const scorers = {};
for (const player of game.scored) {
    scorers[player] ? (scorers[player] += 1) : (scorers[player] = 1);
}
console.log(scorers);

/* Challenge #3 */
const gameEvents = new Map([
    [17, "⚽ GOAL"],
    [36, "� Substitution"],
    [47, "⚽ GOAL"],
    [61, "� Substitution"],
    [64, "� Yellow card"],
    [69, "� Red card"],
    [70, "� Substitution"],
    [72, "� Substitution"],
    [76, "⚽ GOAL"],
    [80, "⚽ GOAL"],
    [92, "� Yellow card"],
]);
// task #1
const events = [...new Set(gameEvents.values())];
console.log(events);

// task #2
gameEvents.delete(64);
console.log(gameEvents);

// task #3
console.log(
    `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// task #4
for (const [key, value] of gameEvents) {
    console.log(
        `[${key <= 45 ? "FIRST HALF" : "SECOND HALF"}] ${key}: ${value}`
    );
}

/* Challenge #4 */
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const convertCamelCase = function (strArr) {
    for (const [i, str] of strArr.entries()) {
        const currStr = str.trim().split("_");
        console.log(
            currStr[0] +
                currStr[1][0].toUpperCase() +
                currStr[1].slice(1).toLowerCase()
        );
    }
};

document.querySelector("button").addEventListener("click", () => {
    const text = document.querySelector("textarea").value;
    const textArr = text.split("\n");
    convertCamelCase(textArr);
});
