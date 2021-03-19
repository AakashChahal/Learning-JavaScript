"use strict";

// Elements
const player0Element = document.querySelector(".player--0");
const player1Element = document.querySelector(".player--1");

const score0Element = document.querySelector("#score--0");
const currentScore0 = document.getElementById("current--0");
const score1Element = document.getElementById("score--1");
const currentScore1 = document.getElementById("current--1");

const diceElement = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnNewGame = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

const results = document.querySelectorAll(".result");

let scores, currScore, playerActive, continueGame;

// Functions
const initGame = function () {
    scores = [0, 0];
    currScore = 0;
    playerActive = 0;
    continueGame = true;
    for (let i = 0; i < 2; i++) {
        document.getElementById(`score--${i}`).textContent = 0;
        document.getElementById(`current--${i}`).textContent = 0;
        results[i].classList.add("hidden");
        document
            .querySelector(`.player--${i}`)
            .classList.remove("player--winner");
    }
    player0Element.classList.add("player--active");
    player1Element.classList.remove("player--active");
    diceElement.classList.add("hidden");
};
initGame();

const switchPlayer = function () {
    if (player0Element.classList.contains("player--active")) {
        playerActive = 1;
        currentScore0.textContent = 0;
    } else {
        playerActive = 0;
        currentScore1.textContent = 0;
    }
    player0Element.classList.toggle("player--active");
    player1Element.classList.toggle("player--active");
    currScore = 0;
};

// Event Handlers
btnRoll.addEventListener("click", function (e) {
    if (continueGame) {
        // Generating a random dice number
        const diceNumber = Math.trunc(Math.random() * 6 + 1);

        // Displaying the dice with the above generated random number
        diceElement.src = `dice-${diceNumber}.png`;
        diceElement.classList.remove("hidden");

        // Checking for diceNumber to keep score and switch player
        if (diceNumber !== 1) {
            currScore += diceNumber;
            playerActive === 1
                ? (currentScore1.textContent = currScore)
                : (currentScore0.textContent = currScore);
        } else {
            switchPlayer();
        }
    }
});

btnHold.addEventListener("click", function (e) {
    if (continueGame) {
        scores[playerActive] += currScore;
        playerActive === 0
            ? (score0Element.textContent = scores[playerActive])
            : (score1Element.textContent = scores[playerActive]);

        if (scores[playerActive] >= 10) {
            continueGame = false;
            playerActive === 0
                ? player0Element.classList.add("player--winner")
                : player1Element.classList.add("player--winner");
            for (let i = 0; i < results.length; i++) {
                diceElement.classList.add("hidden");
                results[i].classList.remove("hidden");
                document.querySelector(".player-win").textContent = `PLAYER ${
                    playerActive + 1
                }`;
            }
        } else {
            switchPlayer();
        }
    }
});

btnNewGame.addEventListener("click", initGame);
