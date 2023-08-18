const mongoose = require("mongoose")

const navbarLinksModel = new mongoose.model("NavbarLinks", (
        new mongoose.Schema({
            label: String,
            path: String
        })
))

module.exports = navbarLinksModel