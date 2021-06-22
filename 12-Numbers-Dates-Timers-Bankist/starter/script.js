"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
    owner: "Jonas Schmedtmann",
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,

    movementsDates: [
        "2019-11-18T21:31:17.178Z",
        "2019-12-23T07:42:02.383Z",
        "2020-01-28T09:15:04.904Z",
        "2020-04-01T10:17:24.185Z",
        "2020-05-08T14:11:59.604Z",
        "2020-05-27T17:01:17.194Z",
        "2021-05-11T23:36:17.929Z",
        "2021-06-16T10:51:36.790Z",
    ],
    currency: "EUR",
    locale: "pt-PT", // de-DE
};

const account2 = {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,

    movementsDates: [
        "2019-11-01T13:15:33.035Z",
        "2019-11-30T09:48:16.867Z",
        "2019-12-25T06:04:23.907Z",
        "2020-01-25T14:18:46.235Z",
        "2020-02-05T16:33:06.386Z",
        "2020-04-10T14:43:26.374Z",
        "2020-05-25T18:49:59.371Z",
        "2021-06-16T12:01:20.894Z",
    ],
    currency: "USD",
    locale: "en-US",
};

const account3 = {
    owner: "Aakash Chahal",
    movements: [7000, -400, 350, 790, -310, -1000, 18500, -30],
    interestRate: 1.5,
    pin: 3333,

    movementsDates: [
        "2019-11-01T13:15:33.035Z",
        "2019-11-30T09:48:16.867Z",
        "2019-12-25T06:04:23.907Z",
        "2020-01-25T14:18:46.235Z",
        "2020-02-05T16:33:06.386Z",
        "2020-04-10T14:43:26.374Z",
        "2020-05-25T18:49:59.371Z",
        "2021-06-16T12:01:20.894Z",
    ],
    currency: "INR",
    locale: "en-IN",
};

const accounts = [account1, account2, account3];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatMovementAmount = (acc, num) =>
    new Intl.NumberFormat(acc.locale, {
        style: "currency",
        currency: acc.currency,
    }).format(num);

const formatMovementDates = function (date, lang) {
    labelDate.textContent = new Intl.DateTimeFormat(lang, {
        hour: "numeric",
        minute: "numeric",
        day: "numeric",
        month: "numeric",
        year: "numeric",
    }).format(new Date());
    const calcDaysPassed = (date1, date2) => {
        // console.log(date1);
        // console.log(date2);
        return Math.round(Math.abs(date1 - date2) / (1000 * 24 * 60 * 60));
    };

    const daysPassed = calcDaysPassed(new Date(), date);
    // console.log(daysPassed);

    if (daysPassed == 0) return "Today";
    if (daysPassed == 1) return "Yesterday";
    if (daysPassed <= 7) return `${daysPassed} days ago`;
    else {
        // const day = `${date.getDate()}`.padStart(2, 0);
        // const month = `${date.getMonth() + 1}`.padStart(2, 0);
        // const year = `${date.getFullYear()}`;
        // return `${day}/${month}/${year}`;
        return new Intl.DateTimeFormat(lang).format(date);
    }
};

const displayMovements = function (acc, sort = false) {
    containerMovements.innerHTML = "";

    const movs = sort
        ? acc.movements.slice().sort((a, b) => a - b)
        : acc.movements;

    movs.forEach(function (mov, i) {
        // console.log("Movement: ", mov);
        const movDate = formatMovementDates(
            new Date(acc.movementsDates[i]),
            acc.locale
        );
        const type = mov > 0 ? "deposit" : "withdrawal";

        const formattedMov = formatMovementAmount(acc, mov);

        const html = `
        <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
            i + 1
        } ${type}</div>
        <div class="movements__date">${movDate}</div>
        <div class="movements__value">${formattedMov}</div>
        </div>
    `;

        containerMovements.insertAdjacentHTML("afterbegin", html);
    });
};

const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    const formattedBal = formatMovementAmount(acc, acc.balance);
    labelBalance.textContent = `${formattedBal}`;
};

const calcDisplaySummary = function (acc) {
    const incomes = acc.movements
        .filter((mov) => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${formatMovementAmount(acc, incomes)}`;

    const out = acc.movements
        .filter((mov) => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${formatMovementAmount(acc, Math.abs(out))}`;

    const interest = acc.movements
        .filter((mov) => mov > 0)
        .map((deposit) => (deposit * acc.interestRate) / 100)
        .filter((int, i, arr) => {
            // console.log(arr);
            return int >= 1;
        })
        .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${formatMovementAmount(acc, interest)}`;
};

const createUsernames = function (accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner
            .toLowerCase()
            .split(" ")
            .map((name) => name[0])
            .join("");
    });
};
createUsernames(accounts);

const updateUI = function (acc) {
    // Display movements
    displayMovements(acc);

    // Display balance
    calcDisplayBalance(acc);

    // Display summary
    calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

// ALWAYS LOGGED IN (FOR EXAMPLES)
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

// Experimenting with the API
const now = new Date();
const locale = navigator.language;
console.log(locale);
const options = {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "numeric", // can be set long or 2-digit too
    year: "numeric",
    // weekday: "short",
};
// labelDate.textContent = new Intl.DateTimeFormat(
//     currentAccount.locale,
//     options
// ).format(now);

// const date = `${now.getDate()}`.padStart(2, 0);
// const month = `${now.getMonth() + 1}`.padStart(2, 0);
// const year = now.getFullYear();

// const hr = `${now.getHours()}`.padStart(2, 0);
// const min = `${now.getMinutes()}`.padStart(2, 0);
// labelDate.textContent = `${date}/${month}/${year}, ${hr}:${min}`;

btnLogin.addEventListener("click", function (e) {
    // Prevent form from submitting
    e.preventDefault();

    currentAccount = accounts.find(
        (acc) => acc.username === inputLoginUsername.value
    );
    console.log(currentAccount);

    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        // Display UI and message
        labelWelcome.textContent = `Welcome back, ${
            currentAccount.owner.split(" ")[0]
        }`;
        containerApp.style.opacity = 100;

        // Clear input fields
        inputLoginUsername.value = inputLoginPin.value = "";
        inputLoginPin.blur();

        // Update UI
        updateUI(currentAccount);
    }
});

btnTransfer.addEventListener("click", function (e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(
        (acc) => acc.username === inputTransferTo.value
    );
    inputTransferAmount.value = inputTransferTo.value = "";

    if (
        amount > 0 &&
        receiverAcc &&
        currentAccount.balance >= amount &&
        receiverAcc?.username !== currentAccount.username
    ) {
        // Doing the transfer
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);

        // Add transfer date to movements
        currentAccount.movementsDates.push(new Date().toISOString());
        receiverAcc.movementsDates.push(new Date().toISOString());

        // Update UI
        updateUI(currentAccount);
    }
});

btnLoan.addEventListener("click", function (e) {
    e.preventDefault();

    const amount = Number(inputLoanAmount.value);

    if (
        amount > 0 &&
        currentAccount.movements.some((mov) => mov >= amount * 0.1)
    ) {
        // Add movement
        currentAccount.movements.push(amount);

        // Add loan date to movements
        currentAccount.movementsDates.push(new Date().toISOString());

        // Update UI
        updateUI(currentAccount);
    }
    inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
    e.preventDefault();

    if (
        inputCloseUsername.value === currentAccount.username &&
        Number(inputClosePin.value) === currentAccount.pin
    ) {
        const index = accounts.findIndex(
            (acc) => acc.username === currentAccount.username
        );
        console.log(index);
        // .indexOf(23)

        // Delete account
        accounts.splice(index, 1);

        // Hide UI
        containerApp.style.opacity = 0;
    }

    inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
    e.preventDefault();
    displayMovements(currentAccount, !sorted);
    sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// Conversion
console.log(Number("231"));
console.log(+"231");

// Parsing
console.log(Number.parseInt("23px"));
console.log(Number.parseInt("ex23")); // will not work or it will show NaN
console.log(Number.parseInt("2exsk333xsa2"));

console.log(Number.parseFloat("2.5cm"));
console.log(Number.parseFloat("      2.5cm   "));

// Check if a value is NaN
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN("20")); // false
console.log(Number.isNaN(+"20X")); // true
console.log(Number.isNaN(20 / 0)); // false

// Checking if value is a number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite("20")); // false
console.log(Number.isFinite(+"20X")); // false
console.log(Number.isFinite(20 / 0)); // false

// Checking if value is an Integer
console.log(Number.isInteger(20)); // true
console.log(Number.isInteger("20")); // false
console.log(Number.isInteger(+"20")); //true
console.log(Number.isInteger(20 / 0)); //false

// Different Math functions in JS
console.log(Math.sqrt(144));

console.log(Math.max(1, 2, 3, 4, 5, 22, 6, 7, 8));
console.log(Math.max(1, 2, 3, 4, 5, "22", 6, 7, 8));
console.log(Math.max(1, 2, 3, 4, 5, "22px", 6, 7, 8));

console.log(Math.min(12, 23, 11, 4, 1, 13));

console.log(Math.PI * Number.parseFloat("10px") ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

// function to print a random number between two numbers
const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt(5, 10));

// Rounding Integers
console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24

console.log(Math.floor(23.3)); // 23
console.log(Math.floor(23.9)); // 23

console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24

// Rounding Decimals
console.log((2.734).toFixed(0));
console.log((2.734654).toFixed(3));
console.log((2.734654).toFixed(2));
console.log(+(2.734654).toFixed(2));

// Remainder Operator (%)
console.log(123 % 2);
console.log(124 % 2);

/* example use case for % */
labelBalance.addEventListener("click", function () {
    [...document.querySelectorAll(".movements__row")].forEach(function (
        row,
        i
    ) {
        if (i % 2 === 0) {
            row.style.backgroundColor = "salmon";
            row.style.color = "green";
        } else {
            row.style.backgroundColor = "orangered";
            row.style.color = "yellow";
        }
        if (i % 3 === 0) {
            row.style.backgroundColor = "blue";
            row.style.color = "hotpink";
        }
    });
});

// Working with BigInt
console.log(2 ** 53 - 1); // the biggest integer javascript can correctly calculate or store or display
console.log(Number.MAX_SAFE_INTEGER);
console.log(23456789098765432345678909876); // Number, won't be correctly displayed
console.log(23456789098765432345678909876n); // BigInt, will be displayed correctly

// operations on BigInt
console.log(1000n + 1000n);
console.log(987654323456789876567890098876776n + 1000n);
// *** Any Math method will not work with BigInt ***/

const huge = 8765678765678987456789876787n;
const num = 111;
// console.log(huge + num); // will not work because num is Number and huge is a BigInt
console.log(huge + BigInt(num));

console.log(20n > 15); // works fine
console.log(20n === 20); // false as type is different
console.log(typeof 20n);
console.log(huge + "is a really big number");
console.log(11n / 3n); // will remove the decimal part
console.log(11 / 3);

/* creating dates */
const today = new Date();
console.log(today);

console.log(new Date("Jun 13 2021 17:54:29"));
console.log(new Date("17 2000 sep 12:01"));
console.log(new Date(2000, 8, 17, 12, 15, 0));

console.log(new Date(0)); // Jan 01 1970
console.log(new Date(4 * 24 * 60 * 60 * 1000)); // 5 days after

/* working with dates */
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getTime()); // timestamp

console.log(today.setFullYear(2022)); // similarly all other methods can be set

/* Operations with Dates */
const future = new Date(2021, 6, 26);
console.log(`Date: ${future} and the Timestamp: ${+future}`);

/* Internationalizing Dates and Numbers using Intl API */
// Date
console.log(new Intl.DateTimeFormat("en-IN").format(new Date()));

const options_date_time = {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "numeric", // can be set long or 2-digit too
    year: "numeric",
    weekday: "long",
}; // look in documentation for more options.

console.log(
    "UK: " +
        new Intl.DateTimeFormat("en-GB", options_date_time).format(new Date())
);

console.log(
    "India: " +
        new Intl.DateTimeFormat("en-IN", options_date_time).format(new Date())
);

console.log(
    navigator.language +
        ": " +
        new Intl.DateTimeFormat(navigator.language, options_date_time).format(
            new Date()
        )
);
// Numbers
const number = 93172819.319;
console.log("UK: " + new Intl.NumberFormat("en-GB").format(number));
console.log("India: " + new Intl.NumberFormat("en-IN").format(number));

const options_numbers = {
    style: "currency",
    currency: "GBP",
}; // look in documentation for more options.

console.log(
    "en-GB: " + new Intl.NumberFormat("en-GB", options_numbers).format(number)
);

console.log(
    "en-IN: " + new Intl.NumberFormat("en-IN", options_numbers).format(number)
);

console.log(
    navigator.language +
        ": " +
        new Intl.NumberFormat(navigator.language, options_numbers).format(
            number
        )
);
