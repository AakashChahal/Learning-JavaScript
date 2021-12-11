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

// const getCountryAndNeighbour = function (country) {
//     // AJAX call for country
//     const req = new XMLHttpRequest();
//     req.open("GET", `https://restcountries.com/v2/name/${country}`);
//     req.send();

//     req.addEventListener("load", function () {
//         // console.log(this.responseText);

//         const [data] = JSON.parse(this.responseText);
//         // console.log(data);
//         renderCountry(data);

//         // Neighbour Country
//         const [neighbour] = data.borders;

//         if (!neighbour) return;
//         console.log(neighbour);

//         // AJAX call for neighbout country
//         const req2 = new XMLHttpRequest();
//         req2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);
//         req2.send();

//         req2.addEventListener("load", function () {
//             const newData = JSON.parse(this.responseText);
//             // console.log(this.responseText);
//             renderCountry(newData, "neighbour");
//         });
//     });
// };

// // these may appear in different order, because data arrives at different time
// // getCountryAndNeighbour("Ireland");
// getCountryAndNeighbour("United Kingdom");
// // getCountryAndNeighbour("usa");

/* Promises and Fetch API */
// code to understand fetch API and promises

// const req = fetch("https://restcountries.com/v2/name/united%20kingdom"); // creates a new Promise
// console.log(req);

// /* consuming promises */
// const getCountryData = function (country) {
//     fetch(`https://restcountries.com/v2/name/${country}`)
//         .then(function (response) {
//             console.log(response);
//             return response.json(); // to be able to read the data (a new promise will be made, so we use another then method)
//         })
//         .then(function (data) {
//             console.log(data);
//             renderCountry(data[0]);
//         });
// };

const getCountryData = function (country) {
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then((response) => response.json())
        .then((data) => {
            renderCountry(data[0]);
            const neighbour = data[0].borders[0];

            if (!neighbour) return;

            return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
        })
        .then((res) => res.json())
        .then((newData) => renderCountry(newData, "neighbour"));
};

getCountryData("united kingdom");
// getCountryData("usa");
