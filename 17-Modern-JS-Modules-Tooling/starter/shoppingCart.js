// Exporting module
console.log("Exporting module");

//? All top-level (global) variables are scoped to this module only
const shippingCost = 10;
const cart = [];
export const testArr = [10, 20, "old last value"];
export const showTestArr = function () {
    console.log(testArr);
};

//? Two types of exports
//! exports must always be at the top-level (global)
//*  1. named export
export const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
};
//* 1.1 exporting multiple items (using named exports)
const totalPrice = 280;
const totalQty = 19;

export { totalPrice, totalQty as tq };

//* 2. default export: used when only want to export one thing from the module
export default function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
    console.log(cart);
}
