"use strict";

/* CHALLENGE #1 */
// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// object! So what should the this keyword look like in this situation?
// § Data 1: [5, 2, 3]
// § Data 2: [1, 5, 3, 9, 6, 1]

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const userAns = Number(
            window.prompt(
                `${this.question}\n${this.options.join(
                    "\n"
                )}\n (Write option number)`
            )
        );
        if (typeof userAns === "number" && userAns >= 0 && userAns <= 3) {
            this.answers[userAns]++;
        } else {
            alert("Wrong input");
        }
        this.displayResults();
        this.displayResults("string");
    },
    displayResults(type) {
        if (type === "string") {
            console.log(`Poll results are ${this.answers.join(", ")}`);
        } else {
            console.log(this.answers);
        }
    },
};

document
    .querySelector(".poll")
    .addEventListener("click", poll.registerNewAnswer.bind(poll));

// BONUS
poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [5, 2, 3] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
