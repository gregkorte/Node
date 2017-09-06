#!node
'use strict';

const { addToy, deleteToy, editDelivery, getAllToys, getOneToy } = require('./stream');

const loot = {};

loot.add = (arr) => {
    let object = {
        "child": arr[0],
        "toy": arr[1],
        "delivered": false
    }
    addToy(object);
};

loot.remove = (arr) => {
    deleteToy(arr[0]);
};

loot.delivered = (arr) => {
    editDelivery(arr[0]);
};

loot.getAll = () => {
    return getAllToys();
};

loot.listAll = () => {
    return loot.getAll();
};

loot.listOne = (name) => {
    return getOneToy(name[0])
};

module.exports = { loot };
