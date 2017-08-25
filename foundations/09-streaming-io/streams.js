#!/usr/bin/env node

// const { createReadStream, appendFile, createWriteStream, writeFile } = require('fs');
// const { Transform, Writable } = require('stream');
// const upperCase = Transform();
// const writeStream = Writable();

// let [,,source, destination] = process.argv;

// upperCase._transform = (buffer, _, prepForTrans) => {
//     prepForTrans(null, String(buffer).toUpperCase());
// }

// writeStream._write = (buffer, _, next) => {
//     writeFile(destination, buffer, (err) => {
//         if(err) throw err;
//         console.log('The data to write was added to the file.');
//     });
//     next();
// };

// createReadStream(source).pipe(upperCase).pipe(writeStream);

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

const { createReadStream } = require('fs');
const { Writable } = require('stream');
const { map, split } = require('event-stream');
const limitToTen = require('./limitTen')();

const userInput = process.argv[2] ? process.argv[2].toLowerCase() : null;
const writeStream = Writable();
const wordListStream = createReadStream('./en-US.dic');

writeStream._write = (word, _, next) => {
    const output = word || 'No matching words found.';
    process.stdout.write(output);
    next();
};

if(!userInput){
    console.log('Usage: ./word-search [search term]');
    process.exit();
}

wordListStream
.pipe(split())
.pipe(map((word, done) => {
     word.toString().toLowerCase().includes(userInput) ? done(null, word + '\n') : done()
    })
)
.pipe(limitToTen)
.pipe(writeStream)

wordListStream.on('end', () => {
    console.log('Finished reading that honkin dic');
});

////////////////////////////////////////
