#!/usr/bin/env node

const chalk = require('chalk');
const log = console.log;
const stars = chalk.white.bgBlue;
const r = chalk.bgRed;
const w = chalk.bgWhite;

for(let i = 0; i < 13; i++){
    if(i < 6){
        switch(i % 2 === 0){
            case true:
                log(`${stars('* '.repeat(10))}${r(' '.repeat(40))}`);
                break;
            case false:
                log(`${stars(' *'.repeat(10))}${w(' '.repeat(40))}`);
                break;
        }
    } else {
        switch(i % 2 === 0){
            case true:
                log(`${r(' '.repeat(60))}`);
                break;
            case false:
                log(`${w(' '.repeat(60))}`);
                break;
        }
    }
}
