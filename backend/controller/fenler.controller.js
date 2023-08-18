const fenlerModel = require("../models/fenler.model")

const fenlerController = {
    getAll: async (req, res) => {
        const { name } = req.query
        const fenler = await fenlerModel.find()
        if ( name ) {
            res.status(200).send(fenler)
        } else {
            const searchFenler = fenler.filter( (x) =>
                x.name.toLowerCase().trim().includes(name.toLowerCase().trim())                
            )
            res.status(200).send(searchFenler)
        }
    },
    getOne: async (req, res) => {
        const { id } = req.params
        const fenler = await fenlerModel.findById(id)
        res.status(200).send(fenler)
    },
    delete: async (req, res) => {
        const id = req.params.id
        const fenler = await fenlerModel.findByIdAndDelete(id)
        res.status(203).send({
            message: `${fenler.name} deleted successfully!`
        })
    },
    post: async (req, res) => {
        const { name, brand, price, productImgUrl, postImgUrl, description } = req.body
        const newFenler = new fenlerModel({
            name: name,
            brand: brand,
            price: price,
            productImgUrl: productImgUrl,
            postImgUrl: postImgUrl,
            description: description
        })
        await newFenler.save()
        res.status(201).send({
            message: `${newFenler.name} posted successfully`,
            fenler: newFenler
        })
    },
    edit: async (req, res) => {
        const id = req.params.id
        const { name, brand, price, productImgUrl, postImgUrl, description } = req.body
        const updatingFenler = {
            name: name,
            brand: brand,
            price: price,
            productImgUrl: productImgUrl,
            postImgUrl: postImgUrl,
            description: description
        }
        const fenler = await fenlerModel.findByIdAndUpdate(id, updatingFenler)
        res.status(200).send({
            message: `${fenler.name} updated successfully!`
        })
    }
}


module.exports = fenlerController