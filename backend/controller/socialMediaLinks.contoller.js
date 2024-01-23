const socialMediaLinksModel = require("../models/socialMediaLinks.model");

const socialMediaLinksController = {
    getAll: async (req, res) => {
        const { name } = req.query;
        const socialMediaLinks = await socialMediaLinksModel.find();
        res.status(200).send(socialMediaLinks);
    },
    getOne: async (req, res) => {
        const { id } = req.params
        const socialMediaLinks = await socialMediaLinksModel.findById(id)
        res.status(200).send(socialMediaLinks)
    },
    delete: async (req, res) => {
        const id = req.params.id
        const socialMediaLinks = await socialMediaLinksModel.findByIdAndDelete(id)
        res.status(203).send({
            message: `${socialMediaLinks.name} deleted successfully!`
        })
    },
    post: async (req, res) => {
        const { name, platform, link, icon } = req.body
        const newSocialMediaLinks = new socialMediaLinksModel({
            name: name,
            platform: platform,
            link: link,
            icon: icon
        })
        await newSocialMediaLinks.save()
        res.status(201).send({
            message: `${newSocialMediaLinks.name} posted successfully!`,
            socialMediaLinks: newSocialMediaLinks 
        })
    },
    edit: async (req, res) => {
        const id = req.params.id
        const { name, platform, link, icon } = req.body
        const updatingSocialMediaLinks = {
            name: name,
            platform: platform,
            link: link,
            icon: icon
        }
        const socialMediaLinks = await socialMediaLinksModel.findByIdAndUpdate(id, updatingSocialMediaLinks)
        res.status(200).send({
            message: `${socialMediaLinks.name} updated successfully!`
        })
    }
}


module.exports = socialMediaLinksController;
