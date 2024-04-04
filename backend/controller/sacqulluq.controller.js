const sacqulluqModel = require("../models/sacqulluq.model")

const sacqulluqController = {
    getAll: async (req, res) => {
        const { name } = req.query;
        const sacqulluq = await sacqulluqModel.find();

        if (name) {
            const searchSacqulluq = sacqulluq.filter((x) =>
                x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
            );
            res.status(200).send(searchSacqulluq);
        } else {
            res.status(200).send(sacqulluq);
        }
    },
    getOne: async (req, res) => {
        const { id } = req.params
        const sacqulluq = await sacqulluqModel.findById(id)
        res.status(200).send(sacqulluq)
    },
    delete: async (req, res) => {
        const id = req.params.id
        const sacqulluq = await sacqulluqModel.findByIdAndDelete(id)
        res.status(203).send({
            message: `${sacqulluq.name} deleted successfully`
        })
    },
    post: async (req, res) => {
        const { name, brand, type, price, productImgUrl, postImgUrl, description, productDetails, category, searchValue } = req.body
        const newSacqulluq = new sacqulluqModel({
            name: name,
            brand: brand,
            type: type,
            price: price,
            productImgUrl: productImgUrl,
            postImgUrl: postImgUrl,
            description: description,
            productDetails: productDetails,
            category: category,
            searchValue: searchValue,
        })
        await newSacqulluq.save(),
            res.status(201).send({
                message: `${newSacqulluq.name} posted successfully!`,
                sacqulluq: newSacqulluq
            })
    },
    edit: async (req, res) => {
        const id = req.params.id
        const { name, brand, type, price, productImgUrl, postImgUrl, description, productDetails, category, searchValue } = req.body
        const updatingSacqulluq = {
            name: name,
            brand: brand,
            type: type,
            price: price,
            productImgUrl: productImgUrl,
            postImgUrl: postImgUrl,
            description: description,
            productDetails: productDetails,
            category: category,
            searchValue: searchValue
        }
        const sacqulluq = await sacqulluqModel.findByIdAndUpdate(id, updatingSacqulluq)
        res.status(200).send({
            message: `${sacqulluq.name} updated successfully!`
        })
    }
}

module.exports = sacqulluqController