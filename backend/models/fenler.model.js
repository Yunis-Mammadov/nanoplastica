const mongoose = require("mongoose")

const fenlerModel = new mongoose.model("Fenler", (
    new mongoose.Schema({
        name: String,
        brand: String,
        price: Number,
        productImgUrl: String,
        postImgUrl: String,
        description: String,
    })
))

module.exports = fenlerModel