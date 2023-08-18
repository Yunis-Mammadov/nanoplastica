const keratinPostSchema = require("../validation/keratin.validation")

const keratinPostMiddleware = (req, res, next) => {
    const { error } = keratinPostSchema.validate(req.body);
    if (error === undefined) {
        next()
    } else {
        const { details } = error;
        console.log(details);
        const message = details.map((i) => i.message).join(",");
        res.send({ message: message})
    }
}

module.exports = keratinPostMiddleware