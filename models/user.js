var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/watcher' , {
    useMongoClient: true,
});

var userSchema = new mongoose.Schema({
    name: String,
    password: String
}, {
    collection: 'users'
});

var userModel = mongoose.model('User', userSchema);

function User(user) {
    this.name = user.name;
    this.password = user.password;
};

User.prototype.save = function(callback) {
    var user = {
        name: this.name,
        password: this.password
    };

    var newUser = new userModel(user);

    newUser.save(function (err, user) {
        if (err) {
            return callback(err);
        }
        var result = {status: 0, description: "提交成功"};
        callback(result, user);
    });
}

User.prototype.getAllUser = function(callback) {

}

module.exports = User;