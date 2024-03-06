const jwt = require('jsonwebtoken');

const verifyTokenMiddleware = (req, res, next) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        return res.status(401).json({ message: 'Token is required' });
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        // Token geçerli, decoded içinde kullanıcı bilgileri var
        req.user = decoded;
        next(); // Middleware'den sonra bir sonraki işlemi devam ettir
    });
};

module.exports = verifyTokenMiddleware;
