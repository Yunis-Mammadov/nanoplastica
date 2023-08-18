const express = require("express")
const contact_router = express.Router()
const contactController = require("../controller/contact.controller")
const contactPostMiddleware = require("../middleware/contact.middleware")


contact_router.get("/", contactController.getAll)

contact_router.get("/:id", contactController.getOne)

contact_router.delete("/:id", contactController.delete)

contact_router.post("/", contactPostMiddleware, contactController.post)

contact_router.put("/:id", contactController.edit)


module.exports = contact_router
