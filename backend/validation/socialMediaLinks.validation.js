const Joi = require("joi")

const socialMediaLinksPostSchema = Joi.object({
    name: Joi.string().required(),
    platform: Joi.string().required(),
    link: Joi.string().required(),
    icon: Joi.string().required()
})


module.exports = socialMediaLinksPostSchema