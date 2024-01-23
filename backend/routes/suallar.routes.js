const express = require("express")
const suallar_router = express.Router()
const suallarController = require("../controller/suallar.controller")
const suallarPostMiddleware = require("../middleware/suallar.middleware")


suallar_router.get("/", suallarController.getAll)

suallar_router.get("/:id", suallarController.getOne)

suallar_router.delete("/:id", suallarController.delete)

suallar_router.post("/", suallarPostMiddleware, suallarController.post)

suallar_router.put("/:id", suallarController.edit)


module.exports = suallar_router
