const Joi = require("joi")

const suallarPostSchema = Joi.object({
    sual: Joi.string().required(),
    cavab: Joi.string().required(),
})


module.exports = suallarPostSchema