const fenlerPostSchema = require("../validation/fenler.validation")

const fenlerPostMiddleware = (req, res, next) => {
    const { error } = fenlerPostSchema.validate(req.body)
    if ( error === undefined ) {
        next()
    } else {
        const { details } = error
        console.log(details);
        const message = details.map((i) => i.message).join(",")
        res.send({ message: message })
    }
}

module.exports = fenlerPostMiddleware