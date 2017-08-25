#!/usr/bin/env node

const { createReadStream, appendFile, createWriteStream, writeFile } = require('fs');
const { Transform, Writable } = require('stream');

let [,,source, destination] = process.argv;

const upperCase = Transform();
const writeStream = Writable();

upperCase._transform = (buffer, _, prepForTrans) => {
    console.log("1st", String(buffer).toUpperCase());
    prepForTrans(null, String(buffer).toUpperCase());
}

writeStream._write = (buffer, _, next) => {
    writeFile(destination, buffer, (err) => {
        if(err) throw err;
        console.log('The data to write was added to the file.');
    });
    next();
};

createReadStream(source).pipe(upperCase).pipe(writeStream);

// CODE EXAMPLE 1

// const { createReadStream, createWriteStream, appendFile, writeFile } = require('fs');
// const { Transform, Writable } = require('stream');
// const transformStream = Transform();
// const writeStream = Writable();

// transformStream._transform = (buffer, _, prepForTrans) => {
//     prepForTrans(null, buffer.toString().toUpperCase());
// };

// writeStream._write = (buffer, _, next) => {
//     writeFile('languagesUpper.txt', buffer, (err) => {
//         if(err) throw err;
//         console.log('The data to write was added to the file.');
//     });
//     next();
// };

// createReadStream('languages.txt').pipe(transformStream).pipe(writeStream);


// CODE EXPAMPLE 2: Using appendFile and createWriteStream

// const { createReadStream, createWriteStream, appendFile, writeFile } = require('fs');
// const { Transform, Writable } = require('stream');
// const transformStream = Transform();
// const writeStream = Writable();

// transformStream._transform = (buffer, _, prepForTrans) => {
//     prepForTrans(null, buffer.toString().toUpperCase());
// };

// // writeStream._write = (buffer, _, next) => {
// //     appendFile('languagesUpper.txt', buffer, (err) => {
// //         if(err) throw err;
// //         console.log('The data to write was added to the file.');
// //     });
// //     next();
// // };

// createReadStream('languages.txt').pipe(transformStream).pipe(createWriteStream('languagesUpper.txt'));

// // createReadStream('languages.txt').pipe(transformStream).pipe(writeStream);


// CODE EXAMPLE 3: Slightly more complex

////////////////////////////////////////
