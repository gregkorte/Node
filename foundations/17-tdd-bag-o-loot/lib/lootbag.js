#!node
'use strict';

const { addToy } = require('./stream');

const loot = {};
let lootBag = {};
lootBag.children = [];

loot.add = (arr) => {
    // let obj = {'child': arr[0], 'toy': arr[1], 'delivered': false};
    // lootBag.children.push(obj);
    return
    addToy(arr)
    .then((obj) => {
        // console.log('addTo resolved:', obj)
    })
};

loot.remove = (name) => {
    lootBag.children.forEach((item, index, object) => {
        if (item.child === name[0]){
            object.splice(index, 1);
        };
    });
};

loot.getAll = () => {
    return lootBag;
};

loot.listAll = () => {
    let all = loot.getAll();
    let str = '';
    let del = '';
    all.children.forEach((item, index) => {
        item.delivered ? del = 'Was delivered' : del = 'Not delivered';
        str += `\n${index+1}. ${item.child}\t${item.toy}\t\t${del}`;
    })
    return str;
};

loot.listOne = (name) => {
    if(name.length > 1) { name = name[0]; }
    let del = '';
    let str = '';
    lootBag.children.forEach((item, index, object) => {
        if (item.child === name){
            item.delivered ? del = 'Was delivered' : del = 'Not delivered';
            str = `\n1. ${item.child}\t${item.toy}\t\t${del}`;
        } else str ='That child is naughty, no gifts for them!';
    });
    return str;
};

loot.delivered = (name) => {
    lootBag.children.forEach((item, index, object) => {
        if (item.child === name[0]){
           item.delivered = item.delivered ? false : true;
        };
    });
};

loot.clearAll = () => {
    lootBag.children = [];
};

module.exports = { loot };