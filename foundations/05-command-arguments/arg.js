#!/usr/bin/env node

let input = process.argv;
let sum = 0;

for(let i = input.length -1; i > 1; i--){
    sum += parseFloat(input[i]);
}

console.log('The sum of the arguments is', sum.toFixed(2));