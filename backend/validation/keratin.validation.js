const Joi = require("joi")

const keratinPostSchema = Joi.object({
    name: Joi.string().required(),
    brand: Joi.string().required(),
    price: Joi.number().required,
    productImgUrl: Joi.string().required(),
    postImgUrl: Joi.string().required(),
    description: Joi.string().required(),
    poductDetails: Joi.string().required()
})

module.exports = keratinPostSchema