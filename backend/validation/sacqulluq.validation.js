const Joi = require("joi")

const sacqulluqPostSchema = Joi.object({
    name: Joi.string(),
    brand: Joi.string(),
    type: Joi.string(),
    price: Joi.number(),
    productImgUrl: Joi.string(),
    postImgUrl: Joi.string(),
    description: Joi.string(),
    poductDetails: Joi.string(),
    category: Joi.string(),
    searchValue: Joi.string(),
})

module.exports = sacqulluqPostSchema