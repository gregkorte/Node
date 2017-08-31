#!node
'use strict';

const { loot } = require('./lootbag.js');
const { lootHelp } = require('./help.js');
const { argv: [,,func,...args] } = process;

if (func === 'lootHelp'){
    lootHelp();
} else loot[func](args);

console.log(loot.getAll());