#!/usr/bin/env node

const fs = require('fs');

let [,,file] = process.argv;

fs.readFile(file, (err, data) => {
    if(err) throw err;
    console.log(String(data));
});

// CODE EXAMPLE

// const { readFile } = process.argv;
// const fileArg = process.argv[2];

// if(fileArg){
//     readFile(fileArg, (err, data) => {
//         if(err) return console.error(err);
//         process.stdout.write(data);   -----------> (readFile parses data to string)
//     });
// } else {
//     process.exit();
// }