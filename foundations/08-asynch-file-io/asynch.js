#!/usr/bin/env node

const fs = require('fs');

let [,,file] = process.argv;

fs.readFile(file, (err, data) => {
    if(err) throw err;
    console.log(String(data));
});