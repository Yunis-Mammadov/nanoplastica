const mongoose = require("mongoose")

const keratinModel = new mongoose.model("Keratin", (
    new mongoose.Schema({
        name: String,
        brand: String,
        price: Number,
        productImgUrl: String,
        postImgUrl: String,
        description: String,
        poductDetails: String
    })
))

module.exports = keratinModel