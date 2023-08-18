const express = require("express")
const fenler_router = express.Router()
const fenlerController = require("../controller/fenler.controller")
const fenlerPostMiddleware = require("../middleware/fenler.middleware")


fenler_router.get("/", fenlerController.getAll)

fenler_router.get("/:id", fenlerController.getOne)

fenler_router.delete("/:id", fenlerController.delete)

fenler_router.post("/", fenlerPostMiddleware ,fenlerController.post)

fenler_router.put("/:id", fenlerController.edit)



module.exports = fenler_router