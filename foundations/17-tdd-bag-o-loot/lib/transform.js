const { Transform } = require('stream');

const addTo = (obj) => Transform({
    transform(file, _, done){
        let json = { "children": JSON.parse(file).children };
        json.children.push(obj);
        var buf = new Buffer.from(JSON.stringify(json));
        obj ? done(null, buf) : process.exit();
    }
});

const deleteFrom = () => Transform({
    transform(word, _, done){
        count <= 10 ? done(null, word) : process.exit();
    }
});

const edit = () => Transform({
    transform(word, _, done){
        count <= 10 ? done(null, word) : process.exit();
    }
});

module.exports = { addTo, deleteFrom, edit }
