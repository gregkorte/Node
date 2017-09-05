#!node
'use strict';
const { join } = require('path');
const { createReadStream, writeFile } = require('fs');
const { Writable } = require('stream');
const { addTo, deleteFrom, edit, all, one } = require('./transform');

const writeStream = Writable();
const readStream = createReadStream(join(__dirname, '/../data/', 'bagOloot.json'));
const outputWriteStream = Writable();


writeStream._write = (json, _, next) => {
    let newFile = JSON.parse(json);
    let prettified = JSON.stringify(newFile, null, "\t");
    writeFile('./data/bagOloot.json', prettified, (err) => {
        if(err) throw err;
        console.log('The data to write was added to the file.');
    });
    next();
};

outputWriteStream._write = (buf, _, next) => {
    let json = JSON.parse(buf).children;
    let str = '';
    json.forEach((item, index, object) => {
        let tab = item.child.length < 10 ? `\t\t` : `\t`;
        let num = (index + 1) < 10 ? `${index + 1}.  ` : `${index + 1}. `;
        let del = item.delivered ? 'Was delivered' : 'Not delivered';
        str += `\n${num}${item.child}${tab}${item.toy}\t\t\t${del}`;
    });
    console.log(str);
    next();
}

const addToy = (obj) => {
    console.log('addToy running');
    readStream
    .pipe(addTo(obj))
    .pipe(writeStream)
    readStream.on('end', () => {
        console.log('Finished rummaging through loot bag...');
    });
};

const deleteToy = (name) => {
    console.log('deleteToy running');
    readStream
    .pipe(deleteFrom(name))
    .pipe(writeStream)
    readStream.on('end', () => {
        console.log('Finished rummaging through loot bag...');
    });
};

const editDelivery = (name) => {
    console.log('editDelivery running');
    readStream
    .pipe(edit(name))
    .pipe(writeStream)
    readStream.on('end', () => {
        console.log('Finished rummaging through loot bag...');
    })
};

const getAllToys = () => {
    readStream
    .pipe(all())
    .pipe(outputWriteStream)
    readStream.on('end', () => {
        console.log('Finished rummaging through loot bag...');
    })
};

const getOneToy = (name) => {
    readStream
    .pipe(one(name))
    .pipe(outputWriteStream)
    readStream.on('end', () => {
        console.log('Finished rummaging through loot bag...');
    })
};

module.exports = { addToy, deleteToy, editDelivery, getAllToys, getOneToy };