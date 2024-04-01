const Joi = require("joi")

const imgPostSchema = Joi.object({
    sliderImg: Joi.string(),
    aboutImg: Joi.string(),
    ComImg: Joi.string(),
})

module.exports = imgPostSchema