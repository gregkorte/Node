#!node
'use strict'

// const { createServer } = require('http');
const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT || 8080;

let getEgg = ((req, res) => {
    if(req.url === '/see-our-eggs'){
    let d = new Date();
    let dt = d.toISOString();  
    console.log(`You found the Easter Egg at ${dt}
    
              ,ggadddd8888888bbbbaaa,_
          ,ad888,      \`Y88,      \`Y888baa,
        ,dP"  "Y8b,      \`"Y8b,      \`"Y8888ba,
       ,88      "Y88b,      \`"Y8ba,       \`"Y88Ya,
      ,P88b,      \`"Y88b,       \`"Y8ba,_       ""8a,
     ,P'"Y88b,        "Y88b,        \`"Y8ba,_      \`Ya,
     8'    "Y88b,        ""Y8ba,         ""Y8ba,_   \`8,
     8b       "Y88b,         ""Y8ba,_         ""Y88baaY
     88b,        "Y88ba,         ""Y88ba,_         \`""P
     8Y88ba,        ""Y88ba,_         ""Y88ba,,_    ,P'
     \`b,"Y88ba,         ""Y88baa,_         """Y888bd"
      \`b, \`"Y88ba,_         ""Y888baa,_         ,8"
       \`8,   \`""Y88ba,_         \`"""Y8888baaaaaP"
        \`Ya,     \`""Y888ba,_           \`"d88P"
          \`"Yb,,_     \`""Y888baa,__,,adP""'
              \`"""YYYY8888888PPPP"""'"`); 
    }
});

app
.use(express.static(`${__dirname}/public`), router)
.use(getEgg)
.listen(port);

router.get('/', (req, res, next) => {
    res.send('This is the index!!');
    next();
});

router.get('/home', (req, res, next) => {
    res.sendFile(`${__dirname}/public/home.html`);
    next();
})

router.get('/see-our-chickens', (req, res, next) => {
    res.sendFile(`${__dirname}/public/see-our-chickens.html`);
    next();
})

router.get('/see-our-eggs', (req, res, next) => { 
    res.sendFile(`${__dirname}/public/see-our-eggs.html`);
    next();
})
