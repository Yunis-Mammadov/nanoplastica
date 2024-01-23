const Joi = require("joi")

const keratinPostSchema = Joi.object({
    name: Joi.string().required(),
    brand: Joi.string().required(),
    price: Joi.number().required(),
    productImgUrl: Joi.string().required(),
    postImgUrl: Joi.string().required(),
    description: Joi.string().required(),
    productDetails: Joi.string().required(),
    bestSeller: Joi.boolean(),
    filterName: Joi.string().required(),
    filterInput: Joi.string()
})

module.exports = keratinPostSchema