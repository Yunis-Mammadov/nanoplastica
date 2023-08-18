const express = require("express")
const socialMediaLinks_router = express.Router()
const socialMediaLinksController = require("../controller/socialMediaLinks.contoller")
const socialMediaLinksPostMiddleware = require("../middleware/socialMediaLinks.middleware")


socialMediaLinks_router.get("/", socialMediaLinksController.getAll)

socialMediaLinks_router.get("/:id", socialMediaLinksController.getOne)

socialMediaLinks_router.delete("/:id", socialMediaLinksController.delete)

socialMediaLinks_router.post("/", socialMediaLinksPostMiddleware, socialMediaLinksController.post)

socialMediaLinks_router.put("/:id", socialMediaLinksController.edit)


module.exports = socialMediaLinks_router
