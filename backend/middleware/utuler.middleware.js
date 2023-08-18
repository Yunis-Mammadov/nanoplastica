const utulerPostSchema = require("../validation/utuler.validation")

const utulerPostMiddleware = (req, res, next) => {
    const { error } = utulerPostSchema.validate(req.body)
    if ( error=== undefined ) {
        next()
    } else {
        const { details } = error;
        console.log(details);
        const message = details.map((i) => i.message).join(",");
        res.send({ message: message})
    }
}

module.exports = utulerPostMiddleware