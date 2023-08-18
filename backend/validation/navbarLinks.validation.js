const Joi = require("joi")

const navbarLinksPostSchema = Joi.object({
    label: Joi.string().required(),
    path: Joi.string().required()
})

module.exports = navbarLinksPostSchema