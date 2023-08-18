const mongoose = require("mongoose")

const socialMediaLinksModel = new mongoose.model("SocialMediaLinks", (
    new mongoose.Schema({
        name: String,
        link: String,
        icon: String
    })
))

module.exports = socialMediaLinksModel