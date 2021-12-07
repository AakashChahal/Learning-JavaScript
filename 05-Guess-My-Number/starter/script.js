"use strict";
// document.querySelector('.message').textContent = '⬆⬇Correct Wrong Answer';
// document.querySelector('.guess').value = 100;
let lives = 5;
let answer;
let level_selected = false;
// (Between 1 and 20)

document.querySelector(".easy").addEventListener("click", () => {
    answer = Math.trunc(Math.random() * 20 + 1);
    console.log(answer);
    level_selected = true;
    resetGame();
    document.querySelector(".lives").textContent = lives;
    document.querySelector(".between").textContent = "EASY: (Between 1 and 20)";
});

document.querySelector(".med").addEventListener("click", () => {
    answer = Math.trunc(Math.random() * 50 + 1);
    console.log(answer);
    level_selected = true;
    resetGame();
    document.querySelector(".lives").textContent = lives;
    document.querySelector(".between").textContent =
        "MEDIUM: (Between 1 and 50)";
});

document.querySelector(".hard").addEventListener("click", () => {
    answer = Math.trunc(Math.random() * 100 + 1);
    console.log(answer);
    resetGame();
    level_selected = true;
    document.querySelector(".lives").textContent = lives;
    document.querySelector(".between").textContent =
        "HARD: (Between 1 and 100)";
});

const isGuessCorrect = function (value) {
    if (value !== answer) {
        lives--;
        document.querySelector(".message").textContent =
            value > answer ? "🔼 Too High" : "🔽 Too Low";
        document.querySelector(".lives").textContent = lives;
    } else {
        document.querySelector(".message").textContent = "✅ You guessed it";
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").textContent = answer;
        document.querySelector(".correct").textContent = "Correct Answer: ";
    }
};

const resetGame = () => {
    lives = 5;
    document.querySelector(".guess").value = "";
    document.querySelector(".lives").textContent = lives;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".between").textContent = "Select a level to play";
    document.querySelector(".correct").textContent = "";
};

const checkGuesses = function () {
    const guessValue = Number(document.querySelector(".guess").value);
    if (level_selected === false) {
        alert("Please select a level first.");
    } else if (lives > 1) {
        if (!guessValue)
            document.querySelector(".message").textContent =
                "⛔ Enter a number(1 to 20)";
        else isGuessCorrect(guessValue);
    } else {
        if (lives === 1 && guessValue === answer) {
            document.querySelector(".message").textContent =
                "✅ You guessed it";
            document.querySelector("body").style.backgroundColor = "#60b347";
            document.querySelector(".number").style.width = "30rem";
            document.querySelector(".number").textContent = answer;
        } else {
            document.querySelector(".lives").textContent = 0;
            document.querySelector("body").style.backgroundColor = "#ff0000";
            document.querySelector(".message").textContent =
                "👎 You lost the game";
            document.querySelector(".number").textContent = answer;
            document.querySelector(".correct").textContent = "Correct Answer: ";
        }
    }
};

document.querySelector(".check").addEventListener("click", checkGuesses);

document.querySelector(".again").addEventListener("click", resetGame);
