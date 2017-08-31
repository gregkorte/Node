'use strict';

const { createReadStream, createWriteStream } = require('fs');
const { Writable } = require('stream');
const writeStream = Writable();

writeStream._write = (buffer, _, next) => {
    appendFile('../data/bagOloot.json', buffer, (err) => {
        if(err) throw err;
        console.log('The data to write was added to the file.');
    });
    next();
};

createWriteStream('../data/bagOloot.json');
