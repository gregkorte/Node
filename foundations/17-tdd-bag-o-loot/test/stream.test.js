'use strict';

const { assert: { isFunction, isObject, lengthOf, equal, isString, isFalse, isTrue } } = require('chai');
const { addToy, deleteToy, editDelivery, getAllToys, getOneToy } = require('../lib/stream.js');

describe('STREAM TESTING', () => {

    describe('addToy()', () => {
        it('Should be a function', () => {
            isFunction(addToy);
        });
    });

    describe('deleteToy()', () => {
        it('Should be a function', () => {
            isFunction(deleteToy);
        });
    });

    describe('editDelivery()', () => {
        it('Should be a function', () => {
            isFunction(editDelivery);
        });
    });
       
    describe('getAllToys()', () => {
        it('Should be a function', () => {
            isFunction(getAllToys);
        });
    });

    describe('getOneToy()', () => {
        it('Should be a function', () => {
            isFunction(getOneToy);
        });
    });

});
