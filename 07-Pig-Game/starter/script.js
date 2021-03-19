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

score0Element.textContent = 0;
score1Element.textContent = 0;

let currScore = 0;
let playerActive = 0;

// Event Handlers
btnRoll.addEventListener("click", function (e) {
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
        if (player0Element.classList.contains("player--active")) {
            player0Element.classList.remove("player--active");
            player1Element.classList.add("player--active");
            playerActive = 1;
            currentScore0.textContent = 0;
        } else {
            player1Element.classList.remove("player--active");
            player0Element.classList.add("player--active");
            playerActive = 0;
            currentScore1.textContent = 0;
        }
        currScore = 0;
    }
});
