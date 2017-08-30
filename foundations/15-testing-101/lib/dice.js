'use strict';

const { randomInt } = require('./math.js')

const roll = (str) => {
    let d = str.indexOf('d');
    let min = str.substring(0, d);
    let max = min * str.substring(d+1, str.length);
    return randomInt(Number(min), Number(max));
};

const toDiceNotation = (obj) => {
    return `${obj.count}d${obj.sides}`;
};

module.exports = { roll, toDiceNotation };