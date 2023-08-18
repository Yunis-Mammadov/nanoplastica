const navbarLinksModel = require("../models/navbarLinks.model")

const navbarLinksController = {
    getAll: async (req, res) => {
        const { name } = req.query
        const navbarLinks = await navbarLinksModel.find()
        if (name) {
            res.status(200).send(navbarLinks)
        } else {
            const searchNavbarLinks = navbarLinks.filter((x) =>
                x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
            )
            res.status(200).send(searchNavbarLinks)
        }
    },
    getOne: async (req, res) => {
        const { id } = req.params
        const navbarLinks = await navbarLinksModel.findById(id)
        res.status(200).send(navbarLinks)
    },
    delete: async (req, res) => {
        const id = req.params.id
        const navbarLinks = await navbarLinksModel.findByIdAndDelete(id)
        res.status(203).send({
            message: `${navbarLinks.label} deleted successully`
        })
    },
    post: async (req, res) => {
        const { label, path } = req.body
        const newNavbarLinks = new navbarLinksModel({
            label: label,
            path: path
        })
        await newNavbarLinks.save()
        res.status(201).send({
            message: `${newNavbarLinks.label} posted successfully!`,
            navbarLinks: newNavbarLinks
        })
    },
    edit: async (req, res) => {
        const id = req.params.id
        const { label, path } = req.body
        const updatingNavbarLinks = {
            label: label,
            path: path
        }
        const navbarLinks = await navbarLinksModel.findByIdAndUpdate(id, updatingNavbarLinks)
        res.status(200).send({
            message: `${navbarLinks.label} update successfully!`
        })
    }
}


module.exports = navbarLinksController