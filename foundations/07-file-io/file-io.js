#!/usr/bin/env node

const fs = require('fs');

let [,,file] = process.argv;

let output = fs.readFileSync(file).toString();
process.stdout.write(output);
