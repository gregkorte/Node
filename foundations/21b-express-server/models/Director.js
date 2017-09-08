'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/mediaStore.sqlite');

module.exports = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM directors`, (err, directorsData) => {
                if (err) return reject(err);
                resolve(directorsData);
            })
        })
    },

    getOne: (id) => {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM directors WHERE dir_id = ${id}`, (err, directorData) => {
                if (err) return reject(err);
                resolve(directorData);
            })
        })
    }
}
