const express = require("express")
const user_router = express.Router()
const userController = require("../controller/user.controller");
const verifyJWTMiddleware = require("../middleware/user.middleware");

user_router.get("/", userController.getAll);

user_router.post('/', userController.post)

user_router.delete("/:id", userController.delete)


module.exports = user_router