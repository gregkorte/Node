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

// CODE EXAMPLE #1
// const { readFile } = require('fs');
// const { createServer } = require('http');
// const server = createServer();

// server.on('request', (req, res) => {
//     console.log('request method', req.method);
//     console.log('request url', req.url);
//     console.log('request headers', req.headers);

    // 1st Example

    // res.writeHead(200, {'useless-message': 'Howdy, Cohort 20'});
    // readFile('./index.html', function(err, buff) {
    //     if(err){ 
    //         res.statusCode = 404; 
    //         res.end('404: not found'); 
    //     };
    //     res.end(buff);
    // });

    // 2nd Example

//     let url = req.url;
//     let path = url.slice(-1) === '/'
//     ? url.slice(1).concat('index.html') 
//     : url.slice(1);

//     readFile(path, (err, buff) => {
//         if(err){
//             res.statusCode = 404;
//             return res.end('not found, dude!');
//         }
//         res.end(buff)
//     });

// })
// .listen(8080, () => {
//     console.log('Listening on port 8080');
// });
