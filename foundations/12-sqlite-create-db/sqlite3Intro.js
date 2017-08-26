#!/usr/bin/env node

// Creating the database
const { Database } = require('sqlite3').verbose();
// const db = new Database('example.sqlite', () => console.log('Connected!'));
const db = new Database('db/example.sqlite'); // Unable to open database file

// Error handler
const errorHandler = (err) => {
    if(err) {
        console.log(`Msg: ${err}`);
    };
};

// Creating a table
db.run('CREATE TABLE IF NOT EXISTS employees (id INT, first TEXT, last TEXT)', errorHandler);

// Simple INSERT statements
// db.run('INSERT INTO employees (id, first, last) VALUES (1, "Michael", "Scott")', errorHandler);
// db.run('INSERT INTO employees VALUES (2, "Jim", "Halpert")', errorHandler);

// // Dynamic inserts with javascript
// const employeeArray = [
//     { id: 3, firstName: 'Dwight', lastName: 'Schrute' },
//     { id: 4, firstName: 'Andy', lastName: 'Bernard' },
//     { id: 5, firstName: 'Pam', lastName: 'Beesly' }
// ];

// // Iterate over array to insert into database
// employeeArray.forEach((obj) => {
//     db.run(`INSERT INTO employees VALUES (${obj.id}, "${obj.firstName}", "${obj.lastName}")`, errorHandler)
// });

// Query the database
db.all('SELECT * FROM employees', (err, allRows) => {
    errorHandler(err);
    allRows.forEach(each =>{
        console.log(each.id, each.first + ' ' + each.last);
    });
});

// Close the database
db.close(err => {
    errorHandler(err);
    console.log('Database closed');
});