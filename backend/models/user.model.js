const mongoose = require("mongoose")
const jwt = require('jsonwebtoken');


let validateEmail = function (email) {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const UserModel = new mongoose.model("Users", (
    new mongoose.Schema({
        name: {
            type: String,
            required: true,
            trim: true,
            minlength: 5,
            unique: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            validate: [validateEmail, 'Please fill a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        password: {
            type: String,
            minlength: 5,
            required: true,
        },
        isAdmin: {
            type: Boolean
        }
    })
))

module.exports = UserModel