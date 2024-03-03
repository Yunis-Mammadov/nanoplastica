const verifyJWTMiddleware = async (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(401).send({ message: 'Token is required to access this route.' });
    } else {
        try {
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            // const { error, value } = verifyJWTMiddlewarePostSchema.validate(req.body);
            // if (error) {
            //     return res.status(400).send({ message: error.details[0].message })
            // }
            req.userId = decoded.id;
            next();
        } catch (error) {
            return res.status(401).send({ auth: false, message: 'Authentication failed.' });
        }
    }
};

module.exports = verifyJWTMiddleware;