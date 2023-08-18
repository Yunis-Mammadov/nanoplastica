const mongoose = require("mongoose")


const utulerModel = new mongoose.model("Utuler", (
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


module.exports = utulerModel