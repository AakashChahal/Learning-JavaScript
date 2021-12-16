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
