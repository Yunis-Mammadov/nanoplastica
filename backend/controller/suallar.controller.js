const suallarModel = require("../models/suallar.model")

const suallarController = {
    getAll: async (req, res) => {
        const { name } = req.query
        const suallar = await suallarModel.find()
        if (name !== undefined) {
            const searchSuallar = suallar.filter((x) =>
                x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
            )
            res.status(200).send(searchSuallar)
        } else {
            res.status(200).send(suallar)
        }
    },
    getOne: async (req, res) => {
        const { id } = req.params
        const suallar = await suallarModel.findById(id)
        res.status(200).send(suallar)
    },
    delete: async (req, res) => {
        const id = req.params.id
        const suallar = await suallarModel.findByIdAndDelete(id)
        res.status(203).send({
            message: `${suallar.location} deleted successfully!`
        })
    },
    post: async (req, res) => {
        const { sual, cavab } = req.body
        const newSuallar = new suallarModel({
            sual: sual,
            cavab: cavab
        })
        await newSuallar.save()
        res.status(201).send({
            message: `${newSuallar.location} posted successfully!`,
            suallar: newSuallar
        })
    },
    edit: async (req, res) => {
        const id = req.params.id
        const { sual, cavab } = req.body
        const updatingSuallar = {
            sual: sual,
            cavab: cavab
        }
        const suallar = await suallarModel.findByIdAndUpdate(id, updatingSuallar)
        res.status(200).send({
            message: `${suallar.location} updated successfully!`
        })
    }
}


module.exports = suallarController