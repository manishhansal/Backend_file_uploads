const mongoose = require('mongoose');

const user = new mongoose.Schema({
    "firstName" : { type: String, required: true },
    "lastName" : { type: String, required: true },
    "profilePic" : { type: Number}
})

module.exports = mongoose.model('user', user);