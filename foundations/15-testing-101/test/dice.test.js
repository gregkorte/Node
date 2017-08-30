'use strict';

const chai = require('chai');
const { roll, toDiceNotation } = require('../lib/dice.js');

const { assert } = chai;

describe('dice.js roll() -', () => { // FOR EACH METHOD
    it('Should be a function', () => {
        assert.isFunction(roll);
    });

    it('Should return a number', () => {
        assert.isNumber(roll('1d20'))
    });
});

describe('dice.js toDiceNotation() -', () => {
    it('Should be a function', () => {
        assert.isFunction(toDiceNotation)
    });

    it('Should return a string', () => {
        assert.isString(toDiceNotation({ count: 1, sides: 20 }))
    });
});