const mongoose = require("mongoose")

const setlerModel = new mongoose.model("Setler", (
    new mongoose.Schema({
        name: String,
        brand: String,
        price: Number,
        productImgUrl: String,
        postImgUrl: String,  
        description: String,
        productDetails: String,
        bestSeller: Boolean,
    })
))

module.exports = setlerModel