const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token || !token.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Token is required to access this route.' });
    }

    const tokenValue = token.split(' ')[1];

    try {
        const decoded = jwt.verify(tokenValue, 'LeoMessi');
        req.userId = decoded.id;
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: 'Authentication failed.' });
    }
};

module.exports = verifyToken;
