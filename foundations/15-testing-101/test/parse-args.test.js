'use strict';

const chai = require('chai');
const parse = require('../lib/parse-args.js');

const { count, sides } = require('../lib/parse-args.js')([20, 2]);
const { assert } = chai;

describe('parse-args.js ():', () => {
    it('Should be a function', () => {
        assert.isFunction(parse);
    });

    it('Should return an object on two inputs:', () => {
        assert.isObject(parse([20, 2]));
    });

    it('Should return an error string on no input:', () => {
        assert.isString(parse())
    });

    it('Should return an error string on more than two inputs:', () => {
        assert.isString(parse([20, 2, 1]))
    });

    it('Should return an object on one input:', () => {
        assert.isObject(parse([20]))
    });

    it('Should contain a count and sides value', () => {
        assert.equal(count, 2);
        assert.equal(sides, 20);
    });

    it('Should contain the no input statement', () => {
        assert.equal(parse(), 'You have not entered any numbers.\nPlease enter the number of sides and the number of times you want to roll.')
    });

    it('Should contain the too many inputs statement', () => {
        assert.equal(parse([20, 2, 1]), 'You have entered too many numbers.\nPlease enter the number of sides and the number of times you want to roll.')
    })
});