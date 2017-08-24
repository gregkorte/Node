#!/usr/bin/env node

const fs = require('fs');

let [,,file] = process.argv;

let output = fs.readFileSync(file);
process.stdout.write(String(output));
