const Joi = require("joi")

const contactPostSchema = Joi.object({
    location: Joi.string().required(),
    number1: Joi.string().required(),
    number2: Joi.string().required(),
})


module.exports = contactPostSchema