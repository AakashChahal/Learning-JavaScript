"use strict";

// Elements
const player1Element = document.querySelector(".player--0");
const player2Element = document.querySelector(".player--1");

const score1Element = document.querySelector("#score--0");
const currentScore1 = document.getElementById("current--0");
const score2Element = document.getElementById("score--1");
const currentScore2 = document.getElementById("current--1");

const diceElement = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnNewGame = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

score1Element.textContent = 0;
score2Element.textContent = 0;

let currScore = 0;

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
        currentScore1.textContent = currScore;
    } else {
        console.log("Switched player");
    }
});
