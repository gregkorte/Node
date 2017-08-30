'use strict';

// This function should return a random integer inclusive of the lower bound and the upper bound.
const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// The math file should export an Object with a method called randomInt that accepts two arguments, a lower bound and an upper bound.
module.exports = { randomInt }