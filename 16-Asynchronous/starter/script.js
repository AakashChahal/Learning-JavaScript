"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

const renderCountry = function (data, className = "") {
    const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
                    <h3 class="country__name">${data.name}</h3>
                    <h4 class="country__region">${data.region}</h4>
                    <p class="country__row"><span>👫</span>${(
                        +data.population / 1000000
                    ).toFixed(2)} M </p>
                    <p class="country__row"><span>🗣️</span>${
                        data.languages[0].name
                    }</p>
                    <p class="country__row"><span>💰</span>${
                        data.currencies[0].name
                    }</p>
            </div>
        </article>
        `;

    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
};

const renderError = function (errMsg) {
    countriesContainer.insertAdjacentText("beforeend", errMsg);
    countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbour = function (country) {
// ?     AJAX call for country
//     const req = new XMLHttpRequest();
//     req.open("GET", `https://restcountries.com/v2/name/${country}`);
//     req.send();

//     req.addEventListener("load", function () {
// //         console.log(this.responseText);

//         const [data] = JSON.parse(this.responseText);
// //         console.log(data);
//         renderCountry(data);

// ?         Neighbour Country
//         const [neighbour] = data.borders;

//         if (!neighbour) return;
//         console.log(neighbour);

// ?         AJAX call for neighbout country
//         const req2 = new XMLHttpRequest();
//         req2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);
//         req2.send();

//         req2.addEventListener("load", function () {
//             const newData = JSON.parse(this.responseText);
// //             console.log(this.responseText);
//             renderCountry(newData, "neighbour");
//         });
//     });
// };

// ! these may appear in different order, because data arrives at different time //
// getCountryAndNeighbour("Ireland");
// getCountryAndNeighbour("United Kingdom");
// getCountryAndNeighbour("usa");

// * Promises and Fetch API */
// code to understand fetch API and promises

// const req = fetch("https://restcountries.com/v2/name/united%20kingdom"); // ? creates a new Promise
// console.log(req);

// * consuming promises *
// const getCountryData = function (country) {
//     fetch(`https://restcountries.com/v2/name/${country}`)
//         .then(function (response) {
//             console.log(response);
//             return response.json(); // ? to be able to read the data (a new promise will be made, so we use another then method at line 87)
//         })
//         .then(function (data) {
//             console.log(data);
//             renderCountry(data[0]);
//         });
// };

const getJSON = function (url, errorMsg = "Something went wrong") {
    return fetch(url).then((response) => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

        return response.json();
    });
};

// const getCountryData = function (country) {
//     fetch(`https://restcountries.com/v2/name/${country}`)
//         .then((response) => {
//             if (!response.ok)
//                 throw new Error(`Country not found. ${response.status}`);

//             return response.json();
//         })
//         .then((data) => {
//             renderCountry(data[0]);
//             const neighbour = data[0].borders[0];

//             if (!neighbour) return;

//             return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//         })
//         .then((res) => res.json())
//         .then((newData) => renderCountry(newData, "neighbour"))
//         .catch((err) => {
//             console.error(`Error Occured!!`);
//             renderError(`Something went wrong 😬: ${err.message}. Try again!`);
//         })
//         .finally(() => {
//             countriesContainer.style.opacity = 1;
//         });
// };

const getCountryData = function (country) {
    getJSON(`https://restcountries.com/v2/name/${country}`, "Country not found")
        .then((data) => {
            renderCountry(data[0]);
            const neighbour = data[0].borders;
            // console.log(neighbour);
            if (!neighbour) throw new Error("No neighbour found!!");

            return getJSON(
                `https://restcountries.com/v2/alpha/${neighbour[0]}`,
                "Country not found"
            );
        })
        .then((newData) => renderCountry(newData, "neighbour"))
        .catch((err) => {
            console.error(`Error Occured!!`);
            renderError(`Error😬: ${err.message}. Try again!`);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        });
};

btn.addEventListener("click", function () {
    // getCountryData("united kingdom");
    getCountryData("australia");
    // getCountryData("usa");
});

/* //? The event loop: In practice ?// 
console.log("Test start");
setTimeout(() => console.log("0 sec timer"), 0);
Promise.resolve("Resolved promise 1").then((res) => console.log(res)); // printed before the timer because callbacks for promise are stored in microtasks queue instead of callback queue and are also given priority over the callback functions stored in the callback queue

Promise.resolve("Resolved promise 2").then((res) => {
    for (let i = 0; i < 1000000000; i++) {
        continue;
    }
    console.log(res);
});
console.log("Test end");
*/

// * Building a simple promise * //
// const lotteryPromise = new Promise(function (resolve, reject) {
//     console.log("Lottery draw happening!! 🔮");
//     setTimeout(function () {
//         if (Math.random() >= 0.5) resolve("You won the lottery! 💰");
//         else reject(new Error("You lost your money! 💵"));
//     }, 2000);
// });

// lotteryPromise
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err));

// * promisifying the setTimeout function * //
// const wait = (seconds) =>
//     new Promise((resolve) => setTimeout(resolve, seconds * 1000));

// wait(5)
//     .then(() => {
//         console.log("executed after 5 seconds");
//         return wait(2);
//     })
//     .then(() => console.log("executed after 2 more seconds"));

// * immediately resolve/rejected Promises * //
// Promise.resolve("Promise resolved immediately").then((x) => console.log(x));
// Promise.reject(new Error("Promise rejected immediately")).catch((err) =>
//     console.error(err)
// );

// * promisifying geoLocation API * //
// navigator.geolocation.getCurrentPosition(
//     (pos) => console.log(pos),
//     (err) => console.error(err)
// );
// console.log("getting geo location");

const getCurrPosition = () =>
    new Promise(function (resolve, reject) {
        // navigator.geolocation.getCurrentPosition(
        //     (pos) => resolve(pos),
        //     (err) => reject(new Error(err))
        // );
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });

// getCurrPosition()
//     .then((pos) => console.log(pos))
//     .catch((err) => console.error(err));

// * consuming promises with async/await * //
const whereAmI = async function (country) {
    try {
        const pos = await getCurrPosition();
        const { latitude: lat, longitude: lng } = pos.coords;

        const geoRes = await fetch(
            `https://geocode.xyz/${lat},${lng}?geoit=json`
        );
        if (!geoRes.ok) throw new Error("API call limit exceeded");
        const geoData = await geoRes.json();
        //// console.log(geoData);

        const res = await fetch(
            `https://restcountries.com/v2/name/${geoData.country}`
        );
        if (!res.ok) throw new Error("location not found");
        const data = await res.json();
        //// console.log(data);

        renderCountry(data[0]);

        return `You are in ${geoData.city}, ${geoData.country}`;
    } catch (error) {
        console.error(`${error.message} 🔴`);
        renderError(`💀 ${error.message} 💀`);

        //! rejecting the promise returned from async function
        throw error;
    }
};

// console.log("1. Getting your location");
// // whereAmI()
// //     .then((city) => console.log(`2. ${city}`))
// //     .catch((err) => console.error(`2. ${err.message} 🔴`))
// //     .finally(() => console.log("3. Finished getting location"));

// (async function () {
//     try {
//         const city = await whereAmI();
//         console.log(`2. ${city}`);
//     } catch (error) {
//         console.error(`${error.message} 🔴`);
//     } finally {
//         console.log("3. Finished getting location");
//     }
// })();

//* Running promises in parallel *//
/* const get3Countries = async function (c1, c2, c3) {
    try {
        ! this code forces data2 and data3 to wait for the previous promises to resolve, even when they are not dependent on each other
        // const [data1] = await getJSON(
        //     `https://restcountries.com/v2/name/${c1}`
        // );
        // const [data2] = await getJSON(
        //     `https://restcountries.com/v2/name/${c3}`
        // );
        // const [data3] = await getJSON(
        //     `https://restcountries.com/v2/name/${c2}`
        // );

        // console.log([data1.capital, data2.capital, data3.capital]);

        ? to overcome the above issue, we can run all the promises in parallel using Promise.all() combinator function [but if a single promise is rejected all other promises will not be resolved]
        const data = await Promise.all([
            getJSON(`https://restcountries.com/v2/name/${c1}`),
            getJSON(`https://restcountries.com/v2/name/${c3}`),
            getJSON(`https://restcountries.com/v2/name/${c2}`),
        ]);

        console.log(data.map((d) => d[0].capital));
    } catch (error) {
        console.error(error);
    }
};

get3Countries("united kingdom", "usa", "germany"); */

//* Other Promise combinators
//* Promise.race: takes an array of promises and also return a promise, the returned promise is settled (resolved/rejected) as soon as one of the input promise settles.
(async function () {
    const res = await Promise.race([
        getJSON(`https://restcountries.com/v2/name/united kingdom`),
        getJSON(`https://restcountries.com/v2/name/usa`),
        getJSON(`https://restcountries.com/v2/name/germany`),
    ]);
    console.log("Promise.race: ", res[0]);
})();

// ? promise.race can be useful to prevent never ending or very long running promises
const timeout = function (sec) {
    return new Promise(function (_, reject) {
        setTimeout(() => {
            reject(new Error("Request took too long!"));
        }, sec);
    });
};

Promise.race([
    getJSON(`https://restcountries.com/v2/name/germany`),
    timeout(400),
])
    .then((res) => console.log("Promise.race: ", res[0], "(with timeout)"))
    .catch((err) => console.error(err));

//* Promise.allSettled: (added in ES2020) also takes an array of Promises and returns all the settled promises including both the resolved and rejected ones.
Promise.allSettled([
    Promise.resolve("Success 1"),
    Promise.reject("Rejected 1"),
    Promise.resolve("Success 2"),
    Promise.reject("Rejected 2"),
]).then((res) => console.log("Promise.allSettled: ", res));

//* Promise.any: (added in ES2021) takes an array of Promises and returns the first resolved promise is returned (ignoring the rejected promises), unless all the promises are rejected.
Promise.any([
    getJSON(`https://restcountries.com/v2/name/asdasa`),
    getJSON(`https://restcountries.com/v2/name/usa`),
    getJSON(`https://restcountries.com/v2/name/germany`),
])
    .then((res) => console.log("Promise.any: ", res[0]))
    .catch((err) => console.error(err));
