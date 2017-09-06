#!node
'use strict'

const { createServer } = require('http');
const server = createServer();
const port = process.env.PORT || 8080;

server.on('request', (req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.end('Hello World!')
    } else if (req.method === 'GET' && req.url === '/time'){
        let d = new Date();
        let dt = d.toISOString();
    res.end(`${dt}`);
    }
})
.listen(port);
