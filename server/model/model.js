const mongoose = require('mongoose');

var users = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    department :{
        type : String,
        required: true
    },
    position :{
        type : String,
        required: true
    },
    status : String
})

const UserDB = mongoose.model('users', users);

module.exports = UserDB;