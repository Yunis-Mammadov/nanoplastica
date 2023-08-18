const contactModel = require("../models/contact.model")

const contactController = {
    getAll: async (req, res) => {
        const { name } = req.query
        const contact = await contactModel.find()
        if (name) {
            res.status(200).send(contact)
        } else {
            const searchcontact = contact.filter((x) =>
                x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
            )
        }
    },
    getOne: async (req, res) => {
        const { id } = req.params
        const contact = await contactModel.findById(id)
        res.status(200).send(contact)
    },
    delete: async (req, res) => {
        const id = req.params.id
        const contact = await contactModel.findByIdAndDelete(id)
        res.status(203).send({
            message: `${contact.location} deleted successfully!`
        })
    },
    post: async (req, res) => {
        const { location, number1, number2 } = req.body
        const newContact = new contactModel({
            location: location,
            number1: number1, 
            number2: number2
        })
        await newContact.save()
        res.status(201).send({
            message: `${newContact.location} posted successfully!`,
            contact: newContact
        })
    },
    edit: async (req, res) => {
        const id = req.params.id
        const { location, number1, number2 } = req.body
        const updatingContact = {
            location: location,
            number1: number1, 
            number2: number2
        }
        const contact = await contactModel.findByIdAndUpdate(id, updatingContact)
        res.status(200).send({
            message: `${contact.location} updated successfully!`
        })
    }
}


module.exports = contactController