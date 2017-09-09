#!node
'use strict'

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

let getEgg = (req, res, next) => {
    if (req.url.match(/egg/)){
    let d = new Date().toISOString();  
    console.log(`You found the Easter Egg at ${d}
    
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
    next();
};

let errCheck = () => {
    app.use((req, res, next) => {
        let err = new Error('Not Found, dummy');
        err.status = 404;
        next(err);
    })
    
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.json({
            "message": "You blew it",
            err: err
        })
    })
    next();
}

app.use(getEgg)
.use(express.static(path.join(__dirname, `public`),{index:false,extensions:['html']}))
.use(errCheck)
.listen(port);
