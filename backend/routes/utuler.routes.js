const express = require("express")
const utuler_router = express.Router()
const utulerController = require("../controller/utuler.controller")
const utulerPostMiddleware = require("../middleware/utuler.middleware")


utuler_router.get("/", utulerController.getAll)

utuler_router.get("/:id", utulerController.getOne)

utuler_router.delete("/:id", utulerController.delete)

utuler_router.post("/", utulerPostMiddleware ,utulerController.post)

utuler_router.put("/:id", utulerController.edit)



module.exports = utuler_router