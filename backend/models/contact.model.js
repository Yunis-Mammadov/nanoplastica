const mongoose = require("mongoose")

const contactModel = new mongoose.model("Contact", (
    new mongoose.Schema({
        location: String,
        number1: String,
        number2: String
    })
))

module.exports = contactModel