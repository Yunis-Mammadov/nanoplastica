const mongoose = require("mongoose")

const imgModel = new mongoose.model("İmgs", (
    new mongoose.Schema({
        sliderImg: String,
        aboutImg: String,
        ComImg: String
    })
))

module.exports = imgModel