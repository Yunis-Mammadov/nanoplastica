const Joi = require("joi")

const keratinPostSchema = Joi.object({
    name: Joi.string(),
    brand: Joi.string(),
    price: Joi.number(),
    productImgUrl: Joi.string(),
    postImgUrl: Joi.string(),
    description: Joi.string(),
    productDetails: Joi.string(),
    bestSeller: Joi.boolean(),
    filterName: Joi.string(),
    filterInput: Joi.string(),
    category: Joi.string(),
    type: Joi.string(),
})

module.exports = keratinPostSchema