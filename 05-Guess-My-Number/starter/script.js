"use strict";
// document.querySelector('.message').textContent = '⬆⬇Correct Wrong Answer';
// document.querySelector('.guess').value = 100;
let lives = 5;
const answer = Math.trunc(Math.random() * 20 + 1);
// console.log(answer);

document.querySelector(".check").addEventListener("click", function () {
    const guessValue = Number(document.querySelector(".guess").value);
    if (lives > 1) {
        if (!guessValue)
            document.querySelector(".message").textContent =
                "⛔ Enter a number(1 to 20)";
        else if (guessValue > answer) {
            document.querySelector(".message").textContent = "🔼 Too High";
            lives--;
            document.querySelector(".lives").textContent = lives;
        } else if (guessValue < answer) {
            document.querySelector(".message").textContent = "🔽 Too Low";
            lives--;
            document.querySelector(".lives").textContent = lives;
        } else {
            document.querySelector(".message").textContent =
                "✅ You guessed it";
            document.querySelector("body").style.backgroundColor = "#60b347";
            document.querySelector(".number").style.width = "30rem";
        }
    } else {
        document.querySelector(".lives").textContent = 0;
        document.querySelector(".message").textContent = "👎 You lost the game";
    }
});
