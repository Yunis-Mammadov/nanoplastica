const utulerModel = require("../models/utuler.model")

const utulerController = {
    getAll: async (req, res) => {
        const { name } = req.query
        const utuler = await utulerModel.find()
        if (name) {
            res.status(200).send(utuler)
        } else {
            const searchUtuler = utuler.filter((x) =>
                x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
            )
            res.status(200).send(searchUtuler)
        }
    },
    getOne: async (req, res) => {
        const { id } = req.params
        const utuler = await utulerModel.findById(id)
        res.status(200).send(utuler)
    },
    delete: async (req, res) => {
        const id = req.params.id
        const utuler = await utulerModel.findByIdAndDelete(id)
        res.status(203).send({
            message: `${utuler.name} successfully deleted!`
        })
    },
    post: async (req, res) => {
        const { name, brand, price, productImgUrl, postImgUrl, description, productDetails } = req.body
        const newUtuler = new utulerModel({
            name: name,
            brand: brand,
            price: price,
            productImgUrl: productImgUrl,
            postImgUrl: postImgUrl,
            description: description,
            productDetails: productDetails
        })
        await newUtuler.save(),
            res.status(201).send({
                message: `${newUtuler.name} posted successfully!`,
                utuler: newUtuler
            })
    },
    edit: async (req, res) => {
        const id = req.params.id
        const { name, brand, price, productImgUrl, postImgUrl, description, productDetails } = req.body
        const updatingUtuler = {
            name: name,
            brand: brand,
            price: price,
            productImgUrl: productImgUrl,
            postImgUrl: postImgUrl,
            description: description,
            productDetails: productDetails
        }
        const utuler = await utulerModel.findByIdAndUpdate(id, updatingUtuler)
        res.status(200).send({
            message: `${utuler.name} updated successfully!`
        })
    }
}

module.exports = utulerController