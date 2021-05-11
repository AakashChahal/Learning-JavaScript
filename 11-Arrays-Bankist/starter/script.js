"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: "Jonas Schmedtmann",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: "Steven Thomas Williams",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: "Sarah Smith",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements) {
    containerMovements.innerHTML = "";
    movements.forEach((mov, i) => {
        const type = mov > 0 ? "deposit" : "withdrawal";
        const html = `
            <div class="movements__row">
                <div class="movements__type movements__type--${type}">
                    ${type}
                </div>
                <div class="movements__value">${mov}€</div>
            </div>
        `;
        containerMovements.insertAdjacentHTML("afterbegin", html);
    });
};

// displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
    const balance = movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${balance}€`;
};

// calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (account) {
    const incomes = account.movements
        .filter((mov) => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${incomes}€`;

    const out = account.movements
        .filter((mov) => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(out)}€`;

    const interest = account.movements
        .filter((mov) => mov > 0)
        .map((deposit) => (deposit * account.interestRate) / 100)
        .filter((int) => int >= 1)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumInterest.textContent = `${interest}€`;
};
// calcDisplaySummary(account1.movements);

const createUsername = function (accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner
            .toLowerCase()
            .split(" ")
            .map((word) => word[0])
            .join("");
    });
};

createUsername(accounts);

// EVENT HANDLER
btnLogin.addEventListener("click", function (e) {
    e.preventDefault();
    const currentAccount = accounts.find(
        (acc) => acc.username === inputLoginUsername.value
    );
    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        // clearing input fields
        inputLoginPin.value = inputLoginUsername.value = "";
        inputLoginPin.blur();

        // UPDATE UI and welcome message
        labelWelcome.textContent = `Welcome, ${currentAccount.owner}`;

        // Display movements
        containerApp.style.display = "grid";
        displayMovements(currentAccount.movements);

        // Display balance
        calcDisplayBalance(currentAccount.movements);

        // Display summary
        calcDisplaySummary(currentAccount);
    }
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/////////////////////////////////////////////////

/* Simple Array Methods

// SLICE
let arr = ["a", "b", "c", "d", "e"];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -1));
console.log(arr.slice());

// SPLICE
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);

// JOIN
console.log(letters.join(" - "));
*/

/* Looping over Arrays
movements.forEach(function (movement) {
    if (movement > 0) {
        console.log(`Deposited $${movement}`);
    } else {
        console.log(`Withdrawn $${Math.abs(movement)}`);
    }
});

movements.forEach(function (mov, i, arr) {
    if (mov > 0) {
        console.log(`Movement ${i + 1}: Deposited ${mov}`);
    } else {
        console.log(`Movement ${i + 1}: Withdrawn ${Math.abs(mov)}`);
    }
});
*/

/* forEach on Maps and Sets
// MAP
const currencies = new Map([
    ["USD", "United States dollar"],
    ["EUR", "Euro"],
    ["GBP", "Pound sterling"],
]);
currencies.forEach((val, key, map) => {
    console.log(`${key}: ${val}`);
});

// SET
const currenciesUnique = new Set([
    "USD",
    "USD",
    "INR",
    "GBP",
    "EUR",
    "INR",
    "INR",
]);
console.log(currenciesUnique);
currenciesUnique.forEach((value, _, set) => {
    console.log(`VAlUE: ${value}`);
});
*/

/* The MAP method 
const eurToUsd = 1.1;
const convertedMovements = movements.map((mov) => mov * eurToUsd);
console.log(convertedMovements);
const movementsDescription = movements.map(
    (mov, i) =>
        `Movement ${i + 1}: ${mov > 0 ? "Deposited" : "Withdrawn"} ${Math.abs(
            mov
        )}`
);
console.log(movementsDescription);
*/

/* The Filter method
const deposits = movements.filter((mov) => mov > 0);
console.log(deposits);

const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);
*/

/* Reduce method
// const balance = movements.reduce((acc, curr, i, arr) => {
//     console.log(`For Iteration #${i} of Array [${arr}]: acc: ${acc} `);
//     return acc + curr;
// }, 0);
// acc -> accumulator, 0 -> initial value for the acc
// acc is returned at every iteration
const balance = movements.reduce((acc, curr) => acc + curr, 0);
console.log(balance);
// getting the maximum value using reduce method
const max = movements.reduce(
    (acc, curr) => (acc > curr ? acc : curr),
    movements[0]
);
console.log(max);
*/

/* chaining array methods 
const eurToUsd = 1.1;
const totalDepositsUSD = movements
    .filter((mov) => mov > 0)
    .map((mov) => mov * eurToUsd)
    .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
*/

/* find method
const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(firstWithdrawal);
*/
