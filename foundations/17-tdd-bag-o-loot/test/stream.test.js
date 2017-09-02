'use strict';

const { assert: { isFunction, isObject, lengthOf, equal, isString, isFalse, isTrue } } = require('chai');
const { addToy } = require('../lib/stream.js');

describe('STREAM TESTING', () => {

    describe('addToy()', () => {
        it('Should be a function', () => {
            isFunction(addToy);
        });

        // it('Should return an object', () => {
        //     let obj = {'child': 'Billy', 'toy': 'Goat', 'delivered': false};
        //     isObject(addToy(obj));
        // })
        
    });

});