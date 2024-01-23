const LoginPostSchema = require('../validations/login.validation')

const LoginPostMiddleware = (req, res, next) => {
  const { error } = LoginPostSchema.validate(req.body);
  if (error === undefined) {
    next();
  } else {
    const { details } = error;
    console.log(details);
    const message = details.map((i) => i.message).join(",");
    res.send({ message: message });
  }
};

module.exports = LoginPostMiddleware