#!/usr/bin/env node

const { Database } = require('sqlite3').verbose();
const employeeObject = require('./employees.json');
const db = new Database('db/company.sqlite');
const employeeArray = employeeObject.employees;

const errorHandler = (err) => {
    if(err){
        console.log(`Msg: ${err}`);
    };
};
// db.run('DROP TABLE IF EXISTS employees', errorHandler)
db.run('CREATE TABLE IF NOT EXISTS employees (id INT, firstName TEXT, lastName TEXT, jobTitle TEXT, address TEXT, salary INT)', errorHandler);

// const employeeArray = [
//     { id: 1, firstName: "Phil", lastName: "Troupe", jobTitle: "CEO", address: "123 Trow Way"},
//     { id: 2, firstName: "Mary", lastName: "Mayeye", jobTitle: "CIO", address: "123 Trow Way"},
//     { id: 3, firstName: "Bob", lastName: "Ersop", jobTitle: "CTO", address: "56789 Main Dr"},
//     { id: 4, firstName: "Jonesie", lastName: "Cat", jobTitle: "CBO", address: "78 Rt 1"},
//     { id: 5, firstName: "Rat", lastName: "Tread", jobTitle: "CRO", address: "928 Teller Ave"},
//     { id: 6, firstName: "Chibs", lastName: "Scot", jobTitle: "SAM", address: "98 Morrow Ln"}
// ];

// employeeArray.forEach((rec) => {
//     db.run(`INSERT INTO employees VALUES (${rec.id}, "${rec.firstName}", "${rec.lastName}", "${rec.jobTitle}", "${rec.address}", ${rec.salary})`, errorHandler)
// });

db.all('SELECT * FROM employees ORDER BY id', (err, allRows) => {
    errorHandler(err);
    allRows.forEach((rec) => {
        console.log(`${rec.id} ${rec.firstName} ${rec.lastName} ${rec.jobTitle} ${rec.address} ${rec.salary}` );
    });
});

db.all('SELECT jobTitle FROM employees ORDER BY id', (err, print) => {
    errorHandler(err);
    print.forEach((rec) => {
        console.log(`${rec.jobTitle}`);
    });
});

db.all('SELECT firstName, lastName, address FROM employees ORDER BY lastName', (err, print) => {
    print.forEach((rec) => {
        console.log(`${rec.firstName} ${rec.lastName} ${rec.address}`);
    });
});

db.all('SELECT * FROM employees WHERE jobTitle = "SAM"', (err, print) => {
    errorHandler(err);
    print.forEach((rec) => {
        console.log(`${rec.firstName} ${rec.lastName}`)
    })
})
