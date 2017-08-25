#!/usr/bin/env node

const fs = require('fs');

let [,,file] = process.argv;
let output = fs.readFileSync(file);

process.stdout.write(String(output));

// CODE EXAMPLE

// const { readFileSync } = require('fs');
// let file = process.argv[2];
// let output = readFileSync(file);

// if(file){
//     try{
//         const data = readFileSync(file);
//         process.stdout.write(output.toString());
//     } catch(err) {
//         console.log('Error', err.stack);
//     }
// } else {
//     process.exit();
// }
