const mongoose = require("mongoose")

const suallarModel = new mongoose.model("Suallar", (
    new mongoose.Schema({
        question: String,
        answer: String
    })
))

module.exports = suallarModel