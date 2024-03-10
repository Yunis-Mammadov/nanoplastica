const Joi = require("joi")

const imgPostSchema = Joi.object({
    sliderImg: Joi.string().required(),
    aboutImg: Joi.string(),
    ComImg: Joi.string(),
})

module.exports = imgPostSchema