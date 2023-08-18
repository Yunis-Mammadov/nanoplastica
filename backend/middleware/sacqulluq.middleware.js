const sacqulluqPostSchema = require("../validation/sacqulluq.validation")

const sacqulluqPostMiddleware = (req, res, next) => {
    const { error } = sacqulluqPostSchema.validate(req.body)
    if ( error === undefined ) {
        next()
    } else {
        const { details } = error
        console.log(details);
        const message = details.map((i) => i.message).join(",")
        res.send({ message: message })
    }
}

module.exports = sacqulluqPostMiddleware