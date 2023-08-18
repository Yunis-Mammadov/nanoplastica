const socialMediaLinksPostSchema = require("../validation/socialMediaLinks.validation")

const socialMediaLinksPostMiddleware = (req, res, next) => {
    const { error } = socialMediaLinksPostSchema.validate(req.body)
    if ( error === undefined ) {
        next()
    } else {
        const { details } = error;
        console.log(details);
        const message = details.map((i) => i.message).join(",")
        res.send({ message: message });
    }
}


module.exports = socialMediaLinksPostMiddleware