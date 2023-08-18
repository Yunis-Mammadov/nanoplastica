const keratinModel = require("../models/keratin.model")

const keratinController = {
    getAll: async (req, res) => {
        const { name } = req.query
        const keratin = await keratinModel.find()
        if (name) {
            res.status(200).send(keratin)
        } else {
            const searchKeratin = keratin.filter((x) =>
                x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
            )
            res.status(200).send(searchKeratin)
        }
    },
    getOne: async (req, res) => {
        const { id } = req.params
        const keratin = await keratinModel.findById(id)
        res.status(200).send(keratin)
    },
    delete: async (req, res) => {
        const id = req.params.id
        const keratin = await keratinModel.findByIdAndDelete(id)
        res.status(203).send({
            message: `${keratin.name} deleted successfully`
        })
    },
    post: async (req, res) => {
        const { name, brand, price, productImgUrl, postImgUrl, description, productDetails } = req.body
        const newKeratin = new keratinModel({
            name: name,
            brand: brand,
            price: price,
            productImgUrl: productImgUrl,
            postImgUrl: postImgUrl,
            description: description,
            productDetails: productDetails
        })
        await newKeratin.save()
        res.status(201).send({
            message: `${newKeratin.name} posted successfully!`,
            keratin: newKeratin
        })
    },
    edit: async (req, res) => {
        const id = req.params.id
        const { name, brand, price, productImgUrl, postImgUrl, description, productDetails } = req.body
        const updatingKeratin = {
            name: name,
            brand: brand,
            price: price,
            productImgUrl: productImgUrl,
            postImgUrl: postImgUrl,
            description: description,
            productDetails: productDetails
        }
        const keratin = await keratinModel.findByIdAndUpdate(id, updatingKeratin)
        res.status(200).send({
            message: `${keratin.name} updated successfully!`
        })
    }
}

module.exports = keratinController