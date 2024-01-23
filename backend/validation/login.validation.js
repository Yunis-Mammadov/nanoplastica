const Joi = require('joi');

const LoginPostSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

module.exports = LoginPostSchema