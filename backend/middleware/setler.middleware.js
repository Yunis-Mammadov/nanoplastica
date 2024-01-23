const setlerPostSchema = require("../validation/setler.validation")

const setlerPostMiddleware = (req, res, next) => {
    const { error } = setlerPostSchema.validate(req.body);
    if (error === undefined) {
        next()
    } else {
        const { details } = error;
        console.log(details);
        const message = details.map((i) => i.message).join(",");
        res.send({ message: message})
    }
}

module.exports = setlerPostMiddleware