#!node
'use strict'

const { createServer } = require('http');
const { readFileSync } = require('fs');
const server = createServer();
const toIndex = readFileSync('./index.html');

server.on('request', (req, res) => {
    res.end(toIndex);
})
.listen(8080);
