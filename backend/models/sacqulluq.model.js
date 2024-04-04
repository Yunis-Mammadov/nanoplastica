const mongoose = require("mongoose")


const sacqulluqModel = new mongoose.model("Sacqulluq", (
    new mongoose.Schema({
        name: String,
        brand: String,
        type: String,
        price: Number,
        productImgUrl: String,
        postImgUrl: String,
        description: String,
        poductDetails: String,
        category: String,
        searchValue: String,
    })
))


module.exports = sacqulluqModel