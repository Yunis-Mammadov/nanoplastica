const setlerModel = require("../models/setler.model")

const setlerController = {
    getAll: async (req, res) => {
        const { name } = req.query
        const setler = await setlerModel.find()
        if (name !== undefined) {
            const searchSetler = setler.filter((x) =>
                x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
            );
            res.status(200).send(searchSetler);
        } else {
            res.status(200).send(setler);
        }
    },
    getOne: async (req, res) => {
        const { id } = req.params
        const setler = await setlerModel.findById(id)
        res.status(200).send(setler)
    },
    delete: async (req, res) => {
        const id = req.params.id
        const setler = await setlerModel.findByIdAndDelete(id)
        res.status(203).send({
            message: `${setler.name} deleted successfully`
        })
    },
    post: async (req, res) => {
        const { name, brand, price, productImgUrl, postImgUrl, description, productDetails, bestSeller } = req.body
        const newSetler = new setlerModel({
            name: name,
            brand: brand,
            price: price,
            productImgUrl: productImgUrl,
            postImgUrl: postImgUrl,
            description: description,
            productDetails: productDetails,
            bestSeller: bestSeller,
        })
        await newSetler.save()
        res.status(201).send({
            message: `${newSetler.name} posted successfully!`,
            setler: newSetler
        })
    },
    edit: async (req, res) => {
        const id = req.params.id
        const { name, brand, price, productImgUrl, postImgUrl, description, productDetails } = req.body
        const updatingSetler = {
            name: name,
            brand: brand,
            price: price,
            productImgUrl: productImgUrl,
            postImgUrl: postImgUrl,
            description: description,
            productDetails: productDetails,
        }
        const setler = await setlerModel.findByIdAndUpdate(id, updatingSetler)
        res.status(200).send({
            message: `${setler.name} updated successfully!`
        })
    }
}

module.exports = setlerController