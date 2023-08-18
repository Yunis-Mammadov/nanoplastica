const contactPostSchema = require("../validation/contact.validation")

const contactPostMiddleware = (req, res, next) => {
    const { error } = contactPostSchema.validate(req.body)
    if ( error === undefined ) {
        next()
    } else {
        const { details } = error;
        console.log(details);
        const message = details.map((i) => i.message).join(",")
        res.send({ message: message });
    }
}


module.exports = contactPostMiddleware