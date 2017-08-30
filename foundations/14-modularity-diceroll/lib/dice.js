'use strict';

const { randomInt } = require('./math.js')

// The roll method should accept a dice notation String and produce a random Number which is the result of the dice roll.
const roll = (str) => {
    let d = str.indexOf('d');
    let min = str.substring(0, d);
    let max = min * str.substring(d+1, str.length);
    return randomInt(Number(min), Number(max));
};

// The toDiceNotation method should accept an object with a sides and count property and convert it to a String with the dice notation i.e. "1d6" or "2d40".
const toDiceNotation = (obj) => {
    return `${obj.count}d${obj.sides}`;
};

// The dice file should export an object with at least two methods called roll and toDiceNotation.
module.exports = { roll, toDiceNotation };