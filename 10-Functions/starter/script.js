"use strict";

const bookings = [];

const createBooking = function (
    flightNum,
    numPassengers = 1,
    price = 199 * numPassengers
) {
    const booking = {
        flightNum,
        numPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 298);
createBooking("LH123", 2);
createBooking("LH123", 5);

createBooking("LH123", undefined, 300); // way to skip a parameter
