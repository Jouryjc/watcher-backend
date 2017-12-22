const database  = require('mongoskin').db('mongodb://127.0.0.1:27017/watcher' , {native_parser:true});

module.exports = {
    insertUser: function(name , age){
        database.user.insert(
            {name: name,age: age},
            { writeConcern: { w: "majority", wtimeout: 5000 } }
        )

    }
}