const { Transform } = require('stream');

const addTo = (obj) => Transform({
    transform(file, _, done){
        let json = { "children": JSON.parse(file).children };
        console.log('addTo running', obj, json);
        json.children.push(obj);
        var buf = new Buffer.from(JSON.stringify(json));
        obj ? done(null, buf) : process.exit();
    }
});

const deleteFrom = (name) => Transform({
    transform(file, _, done){
        console.log('deleteFrom running');        
        let json = JSON.parse(file).children;
        json.forEach((item, index, object) => {
            if (item.child === name){
                object.splice(index, 1);
            };
        });
        json = { "children": json };
        var buf = new Buffer.from(JSON.stringify(json));
        name ? done(null, buf) : process.exit();
    }
});

const edit = () => Transform({
    transform(word, _, done){
        count <= 10 ? done(null, word) : process.exit();
    }
});

module.exports = { addTo, deleteFrom, edit }
