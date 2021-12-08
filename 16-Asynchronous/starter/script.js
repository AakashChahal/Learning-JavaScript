"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

const getCountryData = function (country) {
    const req = new XMLHttpRequest();
    req.open("GET", `https://restcountries.com/v2/name/${country}`);
    req.send();

    req.addEventListener("load", function () {
        // console.log(this.responseText);

        const [data] = JSON.parse(this.responseText);
        // console.log(data);

        const html = `
        <article class="country">
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
    });
};

// these may appear in different order, because data arrives at different time
getCountryData("Ireland");
getCountryData("United Kingdom");
getCountryData("usa");
