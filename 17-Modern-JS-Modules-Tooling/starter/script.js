// Importing module
// import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";
console.log("importing module");
// addToCart("Bread", 5);
// console.log(price, tq);

//? importing everything from the exporting module
// import * as ShoppingCart from "./shoppingCart.js";
// ShoppingCart.addToCart("Bread", 5);
// console.log(ShoppingCart.totalPrice, ShoppingCart.tq);

//? importing the default export
import add from "./shoppingCart.js";
add("Pizza", 3);

//! imports are live connection, not copies
import { testArr, showTestArr } from "./shoppingCart.js";
console.log(testArr);
testArr.pop();
testArr.push("new", "elements", "added");
showTestArr();

//? top-level await (ES2022): we can now use await keyword outside the async function (in modules)
// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);
// console.log("hello");

//* top-level await can be useful when returning some data from an async function
// const getLastPost = async function () {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await res.json();
//     // console.log(data);

//     return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = await getLastPost();
// console.log(lastPost);

/*
? The Module Pattern (How modules were implemented before the addition of native modules)
! We used IIFE to make a script function as modules, Example 👇
const ShoppingCart2 = (function () {
    const shippingCost = 10;
    const cart = [];
    const totalPrice = 280;
    const totalQty = 19;

    const addToCart = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} added to cart`);
    };

    return {
        cart,
        addToCart,
        totalQty,
        totalPrice,
    };
})();

ShoppingCart2.addToCart("Oats", 3);
ShoppingCart2.addToCart("Pasta", 3);
*/

/*
? CommonJS Module

* Export
export.addToCart = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} added to cart`);
    };
    
* Import
const { addToCart } = require("./shoppingCart.js")

! "export" and "require" are keywords available in node
*/

import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";

const state = {
    cart: [
        { product: "bread", quantity: 5 },
        { product: "pizza", quantity: 5 },
    ],
    user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;

console.log(stateClone);
console.log(stateDeepClone);

// if (module.hot) {
//     module.hot.accept();
// }
