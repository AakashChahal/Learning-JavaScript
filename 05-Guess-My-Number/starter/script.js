"use strict";
// document.querySelector('.message').textContent = '⬆⬇Correct Wrong Answer';
// document.querySelector('.guess').value = 100;
let lives = 0;
let answer = Math.trunc(Math.random() * 20 + 1);
// console.log(answer);

document.querySelector(".easy").addEventListener("click", () => {
    lives = 10;
    document.querySelector(".lives").textContent = lives;
});

document.querySelector(".med").addEventListener("click", () => {
    lives = 5;
    document.querySelector(".lives").textContent = lives;
});

document.querySelector(".hard").addEventListener("click", () => {
    lives = 3;
    document.querySelector(".lives").textContent = lives;
});

const isGuessCorrect = function (value) {
    if (value !== answer) {
        lives--;
        document.querySelector(".message").textContent =
            guessValue > answer ? "🔼 Too High" : "🔽 Too Low";
        document.querySelector(".lives").textContent = lives;
    } else {
        document.querySelector(".message").textContent = "✅ You guessed it";
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").textContent = answer;
    }
};

document.querySelector(".check").addEventListener("click", function () {
    const guessValue = Number(document.querySelector(".guess").value);
    if (lives > 1) {
        if (!guessValue)
            document.querySelector(".message").textContent =
                "⛔ Enter a number(1 to 20)";
        else contGame = isGuessCorrect(guessValue);
    } else {
        if (lives === 1 && guessValue === answer) {
            document.querySelector(".message").textContent =
                "✅ You guessed it";
            document.querySelector("body").style.backgroundColor = "#60b347";
            document.querySelector(".number").style.width = "30rem";
            document.querySelector(".number").textContent = answer;
        } else {
            document.querySelector(".lives").textContent = 0;
            document.querySelector(".message").textContent =
                "👎 You lost the game";
            document.querySelector(".number").textContent = answer;
        }
    }
});

document.querySelector(".again").addEventListener("click", (e) => {
    lives = 5;
    answer = Math.trunc(Math.random() * 20 + 1);
    document.querySelector(".guess").value = "";
    document.querySelector(".lives").textContent = lives;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").textContent = "?";
});
