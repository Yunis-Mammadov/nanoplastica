const mongoose = require("mongoose")

const suallarModel = new mongoose.model("Suallar", (
    new mongoose.Schema({
        sual: String,
        cavab: String
    })
))

module.exports = suallarModel