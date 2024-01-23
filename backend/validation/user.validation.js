const Joi = require('joi');

const verifyJWTMiddlewarePostSchema = Joi.object({
    name: Joi.string().max(30).min(2).required(),
    email: Joi.string().email().required(),
    password: Joi.string()
        .min(8)
        .max(30)
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)
        .required(),
})

module.exports = verifyJWTMiddlewarePostSchema