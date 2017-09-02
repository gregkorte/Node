#!node
'use strict';
const { join } = require('path');
const { createReadStream, writeFile } = require('fs');
const { Writable } = require('stream');
const { addTo, deleteFrom, edit } = require('./transform');

const writeStream = Writable();
const readStream = createReadStream(join(__dirname, '/../data/', 'bagOloot.json'));


writeStream._write = (json, _, next) => {
    let newFile = JSON.parse(json);
    let prettified = JSON.stringify(newFile, null, "\t");
    writeFile('./data/bagOloot.json', prettified, (err) => {
        if(err) throw err;
        console.log('The data to write was added to the file.');
    });
    next();
};

const addToy = (obj) => {
    readStream
    .pipe(addTo(obj))
    .pipe(writeStream)
    readStream.on('end', () => {
        console.log('Finished rummaging through loot bag...');
    });
};

// deleteFromWriteStream._write = (buffer, _, next) => {
//     appendFile('../data/bagOloot.json', buffer, (err) => {
//         if(err) throw err;
//         console.log('The data to write was removed from the file.');
//     });
//     next();
// };

// editWriteStream._write = (buffer, _, next) => {
//     appendFile('../data/bagOloot.json', buffer, (err) => {
//         if(err) throw err;
//         console.log('The data to write was removed from the file.');
//     });
//     next();
// };

// const deleteToy = (obj) => {
//     createReadStream('../data/bagOloot.json').pipe(deleteFromWriteStream).createWriteStream(obj);
// };

// const editDelivery = () => {
//     createReadStream('../data/bagOloot.json').pipe(editWriteStream).createWriteStream(obj);
// };

// const getAllToys = () => {
//     createReadStream('../data/bagOloot.json')
// };

// const getOneToy = () => {
//     createReadStream('../data/bagOloot.json')
// };

module.exports = { addToy };