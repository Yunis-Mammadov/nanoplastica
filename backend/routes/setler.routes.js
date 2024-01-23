const express = require("express")
const setler_router = express.Router()
const setlerController = require("../controller/setler.controller")
const setlerPostMiddleware = require("../middleware/setler.middleware")


setler_router.get("/", setlerController.getAll)

setler_router.get("/:id", setlerController.getOne)

setler_router.delete("/:id", setlerController.delete)

setler_router.post("/", setlerPostMiddleware ,setlerController.post)

setler_router.put("/:id", setlerController.edit)



module.exports = setler_router