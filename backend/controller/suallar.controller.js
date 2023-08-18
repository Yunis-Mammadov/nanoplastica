const suallarModel = require("../models/suallar.model")

const suallarController = {
    getAll: async (req, res) => {
        const { name } = req.query
        const suallar = await suallarModel.find()
        if (name) {
            res.status(200).send(suallar)
        } else {
            const searchSuallar = suallar.filter((x) =>
                x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
            )
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
            message: `${suallar.question} deleted successfully!`
        })
    },
    post: async (req, res) => {
        const { question, answer } = req.body
        const newSuallar = new suallarModel({
            question: question,
            answer: answer
        })
        await newSuallar.save()
        res.status(201).send({
            message: `${newSuallar.question} posted successfully!`,
            suallar: newSuallar
        })
    },
    edit: async (req, res) => {
        const id = req.params.id
        const updatingSuallar = {
            name: name,
            link: link,
            icon: icon
        }
        const suallar = await suallarModel.findByIdAndUpdate(id, updatingSuallar)
        res.status(200).send({
            message: `${suallar.name} updated successfully!`
        })
    }
}


module.exports = suallarController