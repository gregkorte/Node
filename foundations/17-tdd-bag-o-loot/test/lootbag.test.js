'use strict';

const { assert: { isFunction, isObject, lengthOf, equal, isString, isFalse, isTrue } } = require('chai');
const { loot: { add, remove, getAll, listAll, listOne, delivered, clearAll } } = require('../lib/lootbag.js')

describe('LOOTBAG TESTING', () => {

    describe('add()', () => {
        it('Should be a function', () => {
            isFunction(add);
        });

        it('Should return an object', ()  => {
            clearAll();
            add(['Anna', 'Dolly']);
            let obj = getAll();
            isObject(obj);
        });

        it('Should add more than one object to the array', () => {
            clearAll();
            add(['Anna', 'Dolly']);
            add(['Tommy', 'Gun']);
            add(['Jerry', 'Racecar']);
            let obj = getAll();
            lengthOf(obj.children, 3);
        });

        it('Should add a specific childs name to the object array', () => {
            clearAll();
            add(['Anna', 'Dolly']);
            let obj = getAll();
            equal(obj.children[0].child, 'Anna');
        });

        it('Should add a specific toy to the object array', () => {
            clearAll();
            add(['Anna', 'Dolly']);
            let obj = getAll();
            equal(obj.children[0].toy, 'Dolly');
        });

        it('Should add a default value of false to the delivered property', () => {
            clearAll();
            add(['Anna', 'Dolly']);
            let obj = getAll();
            isFalse(obj.children[0].delivered);
        });
    });

    describe('remove()', () => {
        it('Should be a function', () => {
            isFunction(remove);
        });

        it('Should return an empty object array', ()  => {
            clearAll();
            add(['Anna', 'Dolly']);
            remove(['Anna']);
            let obj = getAll();
            lengthOf(obj.children, 0);
        });

        it('Should only take the first argument if more than one are passed in', () =>{
            clearAll();
            add(['Annan', 'Dolly']);
            add(['Tommy']);
            let arr = remove(['Annan', 'Tommy']);
            let obj = getAll();
            lengthOf(obj.children, 1);
        });
    });

    describe('getAll()', () => {
        it('Should be a function', () => {
            isFunction(getAll);
        });

        it('Should return an object', ()  => {
            isObject(getAll());
        });
    });

    describe('listAll()', () => {
        it('Should be a function', () => {
            isFunction(listAll);
        });

        it('Should return a string', () => {
            clearAll();
            add(['Annan', 'Dolly']);
            add(['Tommy', 'Gun']);
            add(['Jerry', 'Racecar']);
            let str = listAll();
            isString(str);
        });
    });

    describe('listOne()', () => {
        it('Should be a function', () => {
            isFunction(listOne);
        });

        it('Should return an error string on error', ()  => {
            clearAll();
            add(['Annan', 'Dolly']);
            let str = listOne('Tommy');
            isString(str);
        });

        it('Should return a string on success', ()  => {
            clearAll();
            add(['Annan', 'Dolly']);
            let str = listOne('Annan');
            isString(str);
        });

        it('Should only take the first argument if more than one are passed in', () =>{
            clearAll();
            add(['Annan', 'Dolly']);
            let arr = listOne(['Annan', 'Tommy'])
            isString(arr);
        })
    });

    describe('delivered()', () => {
        it('Should be a function', () => {
            isFunction(delivered);
        });

        it('Should return true on the property delivery when run once', () => {
            clearAll();
            add(['Tommy', 'Gun']);
            delivered(['Tommy']);
            let obj = getAll();
            isTrue(obj.children[0].delivered);
        });

        it('Should return false on the property delivery when run twice', () => {
            clearAll();
            add(['Tommy', 'Gun']);
            delivered(['Tommy']);
            delivered(['Tommy']);
            let obj = getAll();
            isFalse(obj.children[0].delivered);
        })
    });

    describe('clearAll()', () => {
        it('Should be a function', () => {
            isFunction(clearAll);
        });

        it('Should reset the children array', () => {
            clearAll();
            add(['Tommy', 'Gun']);
            clearAll();
            let obj = getAll();
            lengthOf(obj.children, 0);
        });
    });

});