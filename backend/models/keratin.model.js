const mongoose = require("mongoose")

const keratinModel = new mongoose.model("Keratin", (
    new mongoose.Schema({
        name: String,
        brand: String,
        price: Number,
        productImgUrl: String,
        postImgUrl: String,  
        description: String,
        productDetails: String,
        bestSeller: String,
        filterName: String,
        filterInput: String
    })
))

module.exports = keratinModel