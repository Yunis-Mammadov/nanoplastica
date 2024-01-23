const suallarPostSchema = require("../validation/suallar.validation")

const suallarPostMiddleware = (req, res, next) => {
    const { error } = suallarPostSchema.validate(req.body)
    if ( error === undefined ) {
        next()
    } else {
        const { details } = error;
        console.log(details);
        const message = details.map((i) => i.message).join(",")
        res.send({ message: message });
    }
}


module.exports = suallarPostMiddleware