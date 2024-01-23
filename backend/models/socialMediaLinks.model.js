const mongoose = require("mongoose");

const socialMediaLinksModel = mongoose.model("SocialMediaLinks", new mongoose.Schema({
    name: String,
    platform: String,
    link: String,
    icon: String
}));

module.exports = socialMediaLinksModel;
