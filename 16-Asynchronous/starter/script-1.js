/* Challenge #1 */
// *** PART 1 *** //
// 1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat') and a longitude value ('lng') (these are GPS coordinates, examples are in test data below).
// 2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call will be done to a URL with this format:  https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do not use the 'getJSON' function we created, that is cheating 😉
// 3. Once you have the data, take a look at it in the console to see all the attributes that you received about the provided location. Then, using this data, log a message like this to the console: “You are in Berlin, Germany”
// 4. Chain a .catch method to the end of the promise chain and log errors to the console
// 5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does not reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.
// *** PART 2 *** //
// 6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
// 7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data) {
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
};

const getCountryData = function (country) {
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then((response) => {
            if (!response.ok) throw new Error("Country not found!! Try again");

            return response.json();
        })
        .then((data) => {
            if (country == "India") renderCountry(data[1]);
            else renderCountry(data[0]);
        })
        .catch((err) => console.error(err))
        .finally(() => {
            countriesContainer.style.opacity = 1;
        });
};

const getCurrPosition = () => {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

const whereAmI = function () {
    getCurrPosition()
        .then((pos) => {
            const { latitude: lat, longitude: lng } = pos.coords;
            return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
        })
        .then((res) => {
            if (!res.ok)
                throw new Error(
                    "API request limit crossed! Try after some time"
                );

            return res.json();
        })
        .then((data) => {
            // console.log(data);
            // const { city, country } = data;
            console.log(`You are in ${data.city}, ${data.country}`);
            getCountryData(data.country);
        })
        .catch((error) => console.error(error))
        .finally(function () {
            console.log("Geocode API call finished!");
        });
};

// setTimeout(function () {
//     whereAmI(52.508, 13.381);
//     setTimeout(function () {
//         whereAmI(54.23527, -2.00622);
//         setTimeout(function () {
//             whereAmI(-33.933, 18.474);
//         }, 1000);
//     }, 1000);
// }, 1000);

btn.addEventListener("click", whereAmI);
