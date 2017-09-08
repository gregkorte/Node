#!node
'use strict'

// const { createServer } = require('http');
// const server = createServer();
// const port = process.env.PORT || 8080;

// server.on('request', (req, res) => {
//     if (req.method === 'GET' && req.url === '/') {
//         res.end('Hello World!')
//     } else if (req.method === 'GET' && req.url === '/time'){
//         let d = new Date();
//         let dt = d.toISOString();
//     res.end(`${dt}`);
//     }
// })
// .listen(port);

// REFACTORED
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.end('Hello World!');
})
.get('/time', (req, res) => {
    let d = new Date();
    let dt = d.toISOString();
    res.end(`${dt}`);
})
.listen(port);

// CODE EXAMPLE #1
// let express = require('express');
// let app = express();

// // Middleware
// const logParams = (req, res, next) => {
//     console.log('Middleware function awesomeness!', req.url);
//     // console.log('request', req);
//     console.log('req.params', req.params.id);
//     console.log('req.url fro "logParams"', req.url);
//     next();
// }

// const anotherMiddleware = (req, res, next) => {
//     console.log('blah');
//     next();
// }

// With no route middleware will run on every request
// app.use(logParams);

// With route middleware will only run when it matches the request url
// app.use('/hello', anotherMiddleware);
// app.get('/hello', anotherMiddleware);
// app.post('/hello', processAForm);

// let routes = require('./routes/');

// app.use(logParams);
// app.use('/api/v1/', routes);

// app.use((req, res, next) => {
//     let err = new Error('Not Found, dummy');
//     err.status = 404;
//     next("This got passed along");
// })

// app.use((err, req, res, next) => {
//     res.status(err.status || 500);
//     res.json({
//         "message": "You blew it",
//         err: err
//     })
// })

// app.listen(8081, () => {
//     console.log('Listening on port 8081');
// })
