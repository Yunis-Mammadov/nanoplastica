const imgModel = require("../models/img.model")

const imgController = {
    getAll: async (req, res) => {
        const { name } = req.query
        const img = await imgModel.find()
        if (name !== undefined) {
            const searchImgs = img.filter((x) =>
                x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
            );
            res.status(200).send(searchImgs);
        } else {
            res.status(200).send(img);
        }
    },
    getOne: async (req, res) => {
        const { id } = req.params
        const img = await imgModel.findById(id)
        res.status(200).send(img)
    },
    delete: async (req, res) => {
        const id = req.params.id
        const img = await imgModel.findByIdAndDelete(id)
        res.status(203).send({
            message: `${img.name} deleted successfully`
        })
    },
    post: async (req, res) => {
        const { sliderImg, aboutImg, ComImg } = req.body
        const newImg = new imgModel({
            sliderImg: sliderImg,
            aboutImg: aboutImg,
            ComImg: ComImg
        })
        await newImg.save()
        res.status(201).send({
            message: `${newImg.name} posted successfully!`,
            img: newImg
        })
    },
    edit: async (req, res) => {
        const id = req.params.id
        const { sliderImg, aboutImg, ComImg } = req.body
        const updatingImg = {
            sliderImg: sliderImg,
            aboutImg: aboutImg,
            ComImg: ComImg
        }
        const img = await imgModel.findByIdAndUpdate(id, updatingImg)
        res.status(200).send({
            message: `${img.name} updated successfully!`
        })
    }
}

module.exports = imgController