const Joi = require("joi")

const suallarPostSchema = Joi.object({
    question: Joi.string().required,
    answer: Joi.string().required,
})


module.exports = suallarPostSchema