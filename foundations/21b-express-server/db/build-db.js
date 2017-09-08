'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./mediaStore.sqlite');
const { shows } = require('../data/shows');
const { directors } = require('../data/directors');

// inProduction is true or false, but sqlite doesn't support it, so we set to Int and use 1 or 0
db.serialize(() => {
    db.run(`DROP TABLE IF EXISTS shows`);
    db.run(`DROP TABLE IF EXISTS directors`);

    db.run(`CREATE TABLE IF NOT EXISTS directors (
        dir_id INTEGER PRIMARY KEY,
        name TEXT UNIQUE NOT NULL,
        gender TEXT NOT NULL,
        birth_year INT,
        twitter_handle TEXT UNIQUE)`
    );

    db.run(`CREATE TABLE IF NOT EXISTS shows (
        show_id INTEGER PRIMARY KEY,
        name TEXT UNIQUE NOT NULL,
        network TEXT NOT NULL,
        genre TEXT NOT NULL,
        inProduction INT NOT NULL,
        director_id INT NOT NULL,
            FOREIGN KEY (director_id) REFERENCES directors(dir_id))`
    );

    directors.forEach( ({name, gender, birth_year, twitter_handle}) => {
        db.run(`INSERT INTO directors (name, gender, birth_year, twitter_handle) VALUES ("${name}", "${gender}", "${birth_year}", "${twitter_handle}")`);
    });

    shows.forEach( ({name, network, genre, inProduction, director_id}) => {
        db.run(`INSERT INTO shows (name, network, genre, inProduction, director_id) VALUES ("${name}", "${network}", "${genre}", "${inProduction}", "${director_id}")`);
    });
});