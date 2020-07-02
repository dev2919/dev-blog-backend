const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name : 'string',
    username : 'string',
    email : {type : 'string', unique : true},
    password:"string"

});

const model = mongoose.model('User',UserSchema);

module.exports = model;