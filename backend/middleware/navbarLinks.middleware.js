const navbarLinksPostSchema = require("../validation/navbarLinks.validation")

const navbarLinksPostMiddleware = (req, res, next) => {
    const {error} = navbarLinksPostSchema.validate(req.body);
    if (error === undefined) {
        next();
    } else {
        const { details } = error;
        console.log(details);
        const message = details.map((i) => i.message).join(",");
        res.send({ message: message });   
    }
}

module.exports = navbarLinksPostMiddleware