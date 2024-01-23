const express = require("express");
const user_router = express.Router();
const userController = require("../controller/user.controller")
const verifyJWTMiddleware = require("../middleware/users.middleware")
const app = express();


user_router.use(verifyJWTMiddleware);

app.get('/test', verifyJWTMiddleware, (req, res) => {
    res.json({ message: 'Token is valid.', userId: req.userId });
});
user_router.post('/user', userController.post);
user_router.delete("/:id", userController.delete);

module.exports = user_router;
