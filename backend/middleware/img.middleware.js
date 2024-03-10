const imgPostSchema = require("../validation/img.validation")

const imgPostMiddleware = (req, res, next) => {
    const { error } = imgPostSchema.validate(req.body);
    if (error === undefined) {
        next()
    } else {
        const { details } = error;
        console.log(details);
        const message = details.map((i) => i.message).join(",");
        res.send({ message: message })
    }
}

module.exports = imgPostMiddleware