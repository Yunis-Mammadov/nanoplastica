const express = require("express")
const keratin_router = express.Router()
const keratinController = require("../controller/keratin.controller")
const keratinPostMiddleware = require("../middleware/keratin.middleware")


keratin_router.get("/", keratinController.getAll)

keratin_router.get("/:id", keratinController.getOne)

keratin_router.delete("/:id", keratinController.delete)

keratin_router.post("/", keratinPostMiddleware ,keratinController.post)

keratin_router.put("/:id", keratinController.edit)



module.exports = keratin_router