'use strict';

const chai = require('chai');
const { randomInt } = require('../lib/math.js');

const { assert } = chai;

describe('math.js randomInt() -', () => {
    it('Should be a function', () => {
        assert.isFunction(randomInt);
    });

    it('Should return a number', () => {
        assert.isNumber(randomInt(2, 20))
    });

    it('Should return a number greater or equal to the minimum', () => {
        assert.isTrue(randomInt(2, 20) >= 2)
    });

    it('Should return a number less than or equal to the maximum', () => {
        assert.isTrue(randomInt(2, 20) <= 40)
    })
});