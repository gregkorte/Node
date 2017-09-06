const { Transform } = require('stream');

const addTo = (obj) => Transform({
    transform(file, _, done){
        let json = { "children": JSON.parse(file).children };
        json.children.push(obj);
        var buf = new Buffer.from(JSON.stringify(json));
        obj ? done(null, buf) : process.exit();
    }
});

const deleteFrom = (name) => Transform({
    transform(file, _, done){        
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

const edit = (name) => Transform({
    transform(file, _, done){
        let json = JSON.parse(file).children;
        json.forEach((item, index, object) => {
            if (item.child === name){
               item.delivered = item.delivered ? false : true;
            };
        });
        json = { "children": json };
        var buf = new Buffer.from(JSON.stringify(json));
        name ? done(null, buf) : process.exit();
    }
});

const all = () => Transform({
    transform(file, _, done){
        let buf = new Buffer.from(file);
        file ? done(null, buf) : process.exit();
    }
});

const one = (name) => Transform({
    transform(file, _, done){
        let obj = { "children": [] };
        json = JSON.parse(file).children;
        json.forEach((item, index, object) => {
            if(item.child === name){
                obj.children.push(item);
            }
        });
        let buf = new Buffer.from(JSON.stringify(obj));
        name ? done(null, buf) : process.exit();
    }
})


module.exports = { addTo, deleteFrom, edit, all, one }
